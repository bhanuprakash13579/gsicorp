function Products() {
    const features = [
        {
            icon: '🏏',
            title: 'Activity Partners',
            description: 'Find companions for hiking, cricket, cycling, and music concerts.'
        },
        {
            icon: '🏠',
            title: 'Roommates & Travel',
            description: 'Connect with verified roommates and find buddies for your next trip.'
        },
        {
            icon: '🎬',
            title: 'Dining & Movies',
            description: 'Never eat or watch a movie alone. Find someone to join you.'
        },
        {
            icon: '💬',
            title: 'Instant Connection',
            description: 'Chat, plan, and coordinate meetups in real-time.'
        }
    ]

    return (
        <section className="section" id="products">
            <div className="container">
                <h2 className="section-title">Our Products</h2>
                <p className="section-subtitle">
                    Innovative solutions we've built in-house
                </p>

                <div className="products-showcase">
                    <div className="product-visual fade-in">
                        <div className="product-mockup">
                            <div className="product-mockup-header">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div
                                className="product-mockup-content"
                                style={{
                                    backgroundColor: '#000000',
                                    padding: '0'
                                }}
                            >
                                <img
                                    src="/fyndo-card-responsive.png"
                                    alt="Fyndo"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        borderRadius: 'inherit'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="product-info fade-in fade-in-delay-2">
                        <h2>
                            <span className="highlight">Fyndo</span> — Find Activity Partners
                        </h2>
                        <p>
                            The ultimate platform to find roommates, dining & movie companions, and partners for travel, cricket, hiking, cycling, or music concerts. Fyndo connects you with people for real-world activities.
                        </p>

                        <div className="product-features">
                            {features.map((feature, idx) => (
                                <div key={idx} className="product-feature">
                                    <div className="product-feature-icon">{feature.icon}</div>
                                    <div>
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="https://fyndo.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Visit Fyndo
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
