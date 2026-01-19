function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content fade-in">
                    <div className="hero-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                        <span>Building the Future of Digital</span>
                    </div>

                    <h1 className="hero-title">
                        We Build <span className="highlight">Premium</span> <br />
                        Digital Experiences
                    </h1>

                    <p className="hero-description">
                        Get Some Idea Technologies crafts innovative web and mobile applications
                        that transform businesses. From concept to deployment, we bring your
                        digital vision to life.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            Start Your Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#portfolio" className="btn btn-secondary">
                            View Our Work
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <h3>15+</h3>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="hero-stat">
                            <h3>100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className="hero-stat">
                            <h3>5+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
