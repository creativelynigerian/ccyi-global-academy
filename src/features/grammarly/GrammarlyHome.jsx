import React from 'react';
import Icon from '../../components/common/Icon';

const GrammarlyHome = () => {
  const styles = {
    container: { 
      padding: '24px', 
      maxWidth: '1200px', 
      margin: '0 auto' 
    },
    title: { 
      fontSize: '28px', 
      fontWeight: 'bold', 
      color: '#1f2937', 
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    subtitle: { 
      fontSize: '16px', 
      color: '#6b7280', 
      marginBottom: '24px' 
    },
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
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    card: { 
      background: 'white', 
      padding: '24px', 
      borderRadius: '12px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
      marginBottom: '16px' 
    },
    list: { 
      paddingLeft: '20px', 
      color: '#6b7280', 
      lineHeight: '1.8' 
    },
    section: { 
      marginBottom: '32px' 
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <Icon name="PenTool" size={32} color="#2563eb" />
        Grammarly
      </h1>
      <p style={styles.subtitle}>Professional Writing & Communication</p>

      {/* Launch Button */}
      <div style={styles.launchBox}>
        <div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>
            <Icon name="Rocket" size={16} style={{ marginRight: '8px' }} />
            Access the Live Platform
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
            Click the button to launch Grammarly
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
          <Icon name="ExternalLink" size={16} />
          Launch Grammarly →
        </a>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Purpose</h2>
        <div style={styles.card}>
          <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
            Grammarly helps ensure professional, error-free communication in all written materials, including:
          </p>
          <ul style={styles.list}>
            <li>Research papers and publications</li>
            <li>Course materials and handouts</li>
            <li>Student feedback and correspondence</li>
            <li>Administrative communications</li>
          </ul>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🚀 Getting Started</h2>
        <div style={styles.card}>
          <ol style={styles.list}>
            <li><strong>Access:</strong> Use the institutional subscription or create an account</li>
            <li><strong>Install Browser Extension:</strong> Add Grammarly to your browser for real-time checking</li>
            <li><strong>Upload Documents:</strong> Check pre-written documents for grammar, spelling, and style</li>
            <li><strong>Integration:</strong> Use with Microsoft Word for seamless document editing</li>
          </ol>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>✨ Best Practices</h2>
        <div style={styles.card}>
          <ul style={styles.list}>
            <li><strong>Consistency:</strong> Use Grammarly for all official communications</li>
            <li><strong>Tone Selection:</strong> Choose appropriate tone (formal, academic, professional)</li>
            <li><strong>Plagiarism Check:</strong> Use the plagiarism detection feature for research submissions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrammarlyHome;