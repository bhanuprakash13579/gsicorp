import { waitUntil } from '@vercel/functions';

const allowedOrigins = ['https://gsicorp.in', 'https://www.gsicorp.in', 'http://localhost:5173'];

export default async function handler(req, res) {
    // Restrict CORS to known origins only
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, phone, email, subject, message, _honey } = req.body;

        // Honeypot check — bots fill hidden fields, humans don't
        if (_honey) {
            return res.status(200).json({ success: true });
        }

        // Required fields
        if (!name || !phone) {
            return res.status(400).json({ error: 'Name and phone number are required' });
        }

        // Length limits
        if (name.length > 100 || phone.length > 20) {
            return res.status(400).json({ error: 'Input too long' });
        }
        if (email && email.length > 200) {
            return res.status(400).json({ error: 'Input too long' });
        }
        if (subject && subject.length > 200) {
            return res.status(400).json({ error: 'Input too long' });
        }
        if (message && message.length > 2000) {
            return res.status(400).json({ error: 'Message too long (max 2000 characters)' });
        }

        // Email format check (if provided)
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // Phone format check — must contain only digits, spaces, +, -, ()
        if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
            return res.status(400).json({ error: 'Invalid phone number' });
        }

        console.log('Contact Form Submission:', {
            name, phone, email, subject, message,
            timestamp: new Date().toISOString()
        });

        // Save to Google Sheets in background via waitUntil —
        // response is instant, Vercel keeps function alive until fetch completes
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
        if (GOOGLE_SCRIPT_URL) {
            waitUntil(
                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, phone, email, subject, message })
                }).catch(e => console.error('Failed to save to Google Sheets:', e))
            );
        }

        return res.status(200).json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ error: 'Failed to process your request' });
    }
}
