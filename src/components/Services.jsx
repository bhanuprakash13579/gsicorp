function Services() {
    const services = [
        {
            icon: '🌐',
            title: 'Web Development',
            description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
            features: ['Custom Web Apps', 'E-commerce Solutions', 'Progressive Web Apps', 'API Development']
        },
        {
            icon: '📱',
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile apps for iOS and Android that users love.',
            features: ['React Native Apps', 'iOS Development', 'Android Development', 'App Store Optimization']
        },
        {
            icon: '🔧',
            title: 'Maintenance & Support',
            description: 'Reliable ongoing support to keep your applications running smoothly and securely.',
            features: ['24/7 Monitoring', 'Performance Optimization', 'Security Updates', 'Feature Enhancements']
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        {
            icon: '☁️',
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
            features: ['AWS / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Serverless Architecture']
        },
        {
            icon: '📊',
            title: 'Consulting',
            description: 'Strategic technology consulting to help you make informed decisions.',
            features: ['Tech Stack Selection', 'Architecture Review', 'Digital Strategy', 'Team Augmentation']
        }
    ]

    return (
        <section className="section" id="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    Comprehensive digital solutions tailored to your business needs
                </p>

                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="glass-card service-card fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-features">
                                {service.features.map((feature, fIdx) => (
                                    <span key={fIdx}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
