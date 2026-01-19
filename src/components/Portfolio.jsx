function Portfolio() {
    const projects = [
        {
            title: 'A1 Building Services',
            description: 'A professional bilingual website for a water tank cleaning and leakage proofing service provider. Features a modern design with contact form integration.',
            tag: 'Client Work',
            tech: ['React', 'Vercel', 'Serverless', 'Google Sheets'],
            link: 'https://a1buildingservices.in',
            image: '/a1-service.png',
            fit: 'cover'
        },
        {
            title: 'Fyndo Platform',
            description: 'The ultimate social connection app. Find roommates, dining companions, hiking buddies, travel partners, or someone to watch a movie with. Fyndo connects you with people for all of life’s activities.',
            tag: 'Our Product',
            tech: ['React', 'React Native', 'FastAPI', 'PostgreSQL'],
            link: 'https://fyndo.org',
            image: '/fyndo-card-responsive.png',
            fit: 'contain',
            bg: '#000000'
        }
    ]

    return (
        <section className="section" id="portfolio">
            <div className="container">
                <h2 className="section-title">Our Work</h2>
                <p className="section-subtitle">
                    Projects that showcase our expertise and dedication
                </p>

                <div className="portfolio-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="glass-card portfolio-card fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div
                                className="portfolio-image"
                                style={{
                                    backgroundColor: project.bg || 'var(--bg-tertiary)'
                                }}
                            >
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            objectFit: project.fit || 'cover',
                                            width: '100%',
                                            height: '100%',
                                            padding: project.fit === 'contain' ? '20px' : '0'
                                        }}
                                    />
                                ) : (
                                    project.emoji
                                )}
                            </div>
                            <span className="portfolio-tag">{project.tag}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="portfolio-tech">
                                {project.tech.map((t, tIdx) => (
                                    <span key={tIdx}>{t}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                View Project
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
