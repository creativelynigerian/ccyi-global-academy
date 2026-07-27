import React from 'react';

const InternetHome = () => {
  const styles = {
    container: { padding: '24px', maxWidth: '1200px', margin: '0 auto' },
    title: { fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' },
    subtitle: { fontSize: '16px', color: '#6b7280', marginBottom: '24px' },
    launchBox: {
      background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
      border: '2px solid #2563eb',
      borderRadius: '12px',
      padding: '20px 24px',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    },
    launchButton: {
      background: '#2563eb',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textDecoration: 'none',
      display: 'inline-block'
    },
    card: { background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '16px' },
    list: { paddingLeft: '20px', color: '#6b7280', lineHeight: '1.8' },
    section: { marginBottom: '32px' }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>?? Internet Login</h1>
      <p style={styles.subtitle}>Network Access & Eduroam Connectivity</p>

      {/* ? Launch Button */}
      <div style={styles.launchBox}>
        <div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>
            ?? Access the Live Platform
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
            Click the button to launch Internet Login
          </p>
        </div>
        <a
          href="https://ccyiglobalentwebng.com.ng/lms"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.launchButton}
          onMouseEnter={(e) => {
            e.target.style.background = '#1d4ed8';
            e.target.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Launch Internet Login ?
        </a>
      </div>

      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>?? Access & Connectivity</h2>
        <div style={styles.card}>
          <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
            CCYI Global Academy provides internet access through the Nigerian Research and Education Network (NgREN).
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternetHome;
