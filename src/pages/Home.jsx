import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    hero: {
      background: 'linear-gradient(135deg, #002147 0%, #1a3a6b 50%, #2d5a8a 100%)',
      borderRadius: '24px',
      padding: '48px',
      color: 'white',
      marginBottom: '32px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap'
    },
    heroContent: {
      flex: 1
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 'bold',
      margin: '0 0 8px 0'
    },
    heroSubtitle: {
      fontSize: '24px',
      margin: '0 0 16px 0',
      opacity: 0.9
    },
    heroDesc: {
      fontSize: '18px',
      opacity: 0.8,
      maxWidth: '600px',
      margin: '0 0 24px 0',
      lineHeight: '1.6'
    },
    button: {
      background: '#fbbf24',
      color: '#002147',
      border: 'none',
      padding: '12px 32px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '32px'
    },
    statCard: {
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      textAlign: 'center'
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '0 0 8px 0'
    },
    statValue: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '0'
    },
    statValueBlue: { color: '#1e3a5f' },
    statValueGreen: { color: '#16a34a' },
    statValueOrange: { color: '#f97316' },
    statValueRed: { color: '#dc2626' }
  };

  return (
    <div style={styles.container}>
      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome Back 👋</h1>
          <p style={styles.heroSubtitle}>CCYI Global Academy Learning Platform</p>
          <p style={styles.heroDesc}>
            Complete your training journey and master the digital platforms used across CCYI Global Academy.
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            style={styles.button}
            onMouseEnter={(e) => e.target.style.background = '#f59e0b'}
            onMouseLeave={(e) => e.target.style.background = '#fbbf24'}
          >
            Continue Learning →
          </button>
        </div>
        <div style={{ flexShrink: 0 }}>
          <Logo size="large" variant="full" style={{ color: 'white' }} />
        </div>
      </div>

      {/* Statistics */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Training Modules</p>
          <p style={{...styles.statValue, ...styles.statValueBlue}}>6</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Completed</p>
          <p style={{...styles.statValue, ...styles.statValueGreen}}>1</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Overall Progress</p>
          <p style={{...styles.statValue, ...styles.statValueOrange}}>16%</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Certificate</p>
          <p style={{...styles.statValue, ...styles.statValueRed}}>Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Home;