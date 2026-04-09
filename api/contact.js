export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, phone, email, subject, message } = req.body;

        // Only name and phone are required
        if (!name || !phone) {
            return res.status(400).json({ error: 'Name and phone number are required' });
        }

        console.log('Contact Form Submission:', {
            name, phone, email, subject, message,
            timestamp: new Date().toISOString()
        });

        // Fire-and-forget — don't await, so the user gets an instant response
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
        if (GOOGLE_SCRIPT_URL) {
            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, email, subject, message })
            }).catch(e => console.error('Failed to save to Google Sheets:', e));
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
