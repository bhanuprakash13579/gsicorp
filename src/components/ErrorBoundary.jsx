import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                    textAlign: 'center',
                    padding: '2rem',
                    background: '#0a0f1c',
                    color: '#e2e8f0'
                }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Something went wrong</h1>
                    <p style={{ color: '#94a3b8' }}>Please refresh the page or contact us directly.</p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            background: '#3b82f6',
                            color: '#fff',
                            border: 'none',
                            padding: '0.75rem 2rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 500
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
