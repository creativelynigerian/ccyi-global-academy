import React, { useState } from 'react';

const CertificateHome = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const styles = {
    container: { padding: '24px', maxWidth: '1000px', margin: '0 auto' },
    title: { fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' },
    subtitle: { color: '#6b7280', marginBottom: '24px' },
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
    cardTitle: { fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '8px' },
    cardText: { color: '#6b7280', lineHeight: '1.6' },
    progressBar: { width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden', marginTop: '8px' },
    progressFill: { height: '100%', background: 'linear-gradient(90deg, #2563eb, #7c3aed)', borderRadius: '4px', width: '65%' },
    badgePending: { display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', background: '#fef3c7', color: '#d97706' },
    button: { background: '#2563eb', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' },
    certBox: { border: '4px double #d97706', padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, #fef3c7, #fbbf24)', borderRadius: '12px', marginTop: '24px' }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>?? Certificate</h1>
      <p style={styles.subtitle}>Track your progress and earn your completion certificate</p>

      {/* ? Launch Button */}
      <div style={styles.launchBox}>
        <div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>
            ?? Access the Live Platform
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
            Click the button to access your certificate
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
          Launch Certificate ?
        </a>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Your Progress</h3>
        <p style={styles.cardText}>Complete all modules to earn your Learning Platform Certificate</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#6b7280' }}>65% Complete</span>
          <span style={styles.badgePending}>? In Progress</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: '65%' }}></div>
        </div>
      </div>

      <button
        onClick={() => setShowCertificate(!showCertificate)}
        style={styles.button}
        onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
        onMouseLeave={(e) => e.target.style.background = '#2563eb'}
      >
        {showCertificate ? 'Hide Certificate' : 'Preview Certificate'}
      </button>

      {showCertificate && (
        <div style={styles.certBox}>
          <div style={{ fontSize: '48px', marginBottom: '8px' }}>???</div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#002147' }}>CERTIFICATE OF COMPLETION</h1>
          <p style={{ fontSize: '18px', color: '#1a3a6b' }}>Learning Platform Program</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#002147', margin: '16px 0', borderBottom: '2px solid #002147', paddingBottom: '8px', display: 'inline-block' }}>
            Dr. Faculty Member
          </p>
          <p style={{ fontSize: '14px', color: '#1a3a6b' }}>
            Has successfully completed the CCYI Global Academy Learning Platform Training Program
          </p>
        </div>
      )}
    </div>
  );
};

export default CertificateHome;
