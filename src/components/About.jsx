function About() {
    const features = [
        { icon: '🎯', text: 'User-Centered Design Philosophy' },
        { icon: '⚡', text: 'Agile Development Process' },
        { icon: '🔒', text: 'Security-First Approach' },
        { icon: '📱', text: 'Cross-Platform Expertise' },
    ]

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content fade-in">
                        <h2>
                            Transforming Ideas into <span className="highlight">Digital Reality</span>
                        </h2>
                        <p>
                            Get Some Idea Technologies is a forward-thinking IT company dedicated to
                            building exceptional web and mobile applications. We combine cutting-edge
                            technology with creative design to deliver solutions that drive growth.
                        </p>
                        <p>
                            From our flagship product Fyndo to custom client solutions, we bring the
                            same level of dedication and innovation to every project we undertake.
                        </p>

                        <div className="about-features">
                            {features.map((feature, idx) => (
                                <div key={idx} className="about-feature">
                                    <div className="about-feature-icon">{feature.icon}</div>
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-cards fade-in fade-in-delay-2">
                        <div className="glass-card about-card">
                            <div className="about-card-icon">🚀</div>
                            <h3>Our Mission</h3>
                            <p>To empower businesses with innovative digital solutions that create lasting impact and drive measurable results.</p>
                        </div>
                        <div className="glass-card about-card">
                            <div className="about-card-icon">💡</div>
                            <h3>Our Vision</h3>
                            <p>To be the go-to technology partner for businesses seeking premium, scalable, and user-centric digital experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
