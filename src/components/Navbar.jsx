import { useState } from 'react'

function Navbar({ scrolled }) {
    const [mobileOpen, setMobileOpen] = useState(false)

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#products', label: 'Products' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleClick = () => {
        setMobileOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-inner">
                    <a href="#" className="navbar-logo">
                        <img src="/logo.svg" alt="GSI Corp Logo" width="40" height="40" />
                        <span>GSI Corp</span>
                    </a>

                    <div className="navbar-links">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href}>{link.label}</a>
                        ))}
                        <a href="#contact" className="btn btn-primary navbar-cta">Get Started</a>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={handleClick}>{link.label}</a>
                ))}
                <a href="#contact" className="btn btn-primary" onClick={handleClick} style={{ marginTop: '1rem' }}>
                    Get Started
                </a>
            </div>
        </nav>
    )
}

export default Navbar
