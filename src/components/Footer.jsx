function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: '#about', label: 'About Us' },
        { href: '#services', label: 'Services' },
        { href: '#products', label: 'Products' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#contact', label: 'Contact' },
    ]

    const services = [
        { label: 'Web Development' },
        { label: 'Mobile Apps' },
        { label: 'UI/UX Design' },
        { label: 'Cloud Solutions' },
        { label: 'Maintenance' },
    ]

    const products = [
        { label: 'Fyndo', href: 'https://fyndo.org' },
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <img src="/logo.svg" alt="GSI Corp Logo" width="32" height="32" />
                            <h3 style={{ margin: 0 }}>GSI <span>Corp</span></h3>
                        </div>
                        <p>
                            Get Some Idea Technologies — Building premium digital experiences
                            that transform businesses and delight users.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link, idx) => (
                                <li key={idx}><a href={link.href}>{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            {services.map((service, idx) => (
                                <li key={idx}><a href="#services">{service.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Products</h4>
                        <ul>
                            {products.map((product, idx) => (
                                <li key={idx}>
                                    <a href={product.href} target="_blank" rel="noopener noreferrer">
                                        {product.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Get Some Idea Technologies. All rights reserved.</p>
                    <p>Made with ❤️ in India</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
