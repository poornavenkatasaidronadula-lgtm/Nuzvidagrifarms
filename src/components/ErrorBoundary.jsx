import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center', background: '#fef2f2', fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚨</div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#991b1b', marginBottom: '8px' }}>Something went wrong.</h1>
          <p style={{ color: '#b91c1c', marginBottom: '24px', maxWidth: '400px' }}>
            We've encountered an unexpected error. Please try refreshing the page or going back to the home page.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ padding: '12px 24px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '16px' }}
          >
            Go to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
