import React from 'react';
import Icon from '../../components/common/Icon';

const Office365Home = () => {
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
    grid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '16px', 
      marginBottom: '24px' 
    },
    card: { 
      background: 'white', 
      padding: '20px', 
      borderRadius: '12px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
    },
    cardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
    },
    cardTitle: { 
      fontSize: '16px', 
      fontWeight: '600', 
      color: '#1f2937', 
      marginBottom: '8px' 
    },
    cardText: { 
      color: '#6b7280', 
      lineHeight: '1.6', 
      fontSize: '14px' 
    },
    list: { 
      paddingLeft: '20px', 
      color: '#6b7280', 
      lineHeight: '1.8' 
    },
    section: { 
      marginBottom: '32px' 
    },
    iconContainer: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      background: '#eef2ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '12px'
    }
  };

  const apps = [
    { 
      icon: 'Mail', 
      title: 'Outlook Email', 
      desc: 'Professional communication with students and colleagues' 
    },
    { 
      icon: 'MessageSquare', 
      title: 'Microsoft Teams', 
      desc: 'Virtual meetings and collaborative workspaces' 
    },
    { 
      icon: 'Cloud', 
      title: 'OneDrive', 
      desc: 'Secure cloud storage with access from any device' 
    },
    { 
      icon: 'FileText', 
      title: 'Office Applications', 
      desc: 'Word, Excel, PowerPoint, and OneNote for productivity' 
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <Icon name="Briefcase" size={32} color="#2563eb" />
        Office 365
      </h1>
      <p style={styles.subtitle}>Productivity & Collaboration Tools</p>

      {/* Launch Button */}
      <div style={styles.launchBox}>
        <div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>
            <Icon name="Rocket" size={16} style={{ marginRight: '8px' }} />
            Access the Live Platform
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
            Click the button to launch Office 365
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
          Launch Office 365 →
        </a>
      </div>

      <div style={styles.grid}>
        {apps.map((app, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            }}
          >
            <div style={styles.iconContainer}>
              <Icon name={app.icon} size={24} color="#4f46e5" />
            </div>
            <h3 style={styles.cardTitle}>{app.title}</h3>
            <p style={styles.cardText}>{app.desc}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
          ✨ Best Practices
        </h2>
        <div style={styles.card}>
          <ul style={styles.list}>
            <li><strong>Professional Communication:</strong> All official communication should use your CCYI Global Academy email</li>
            <li><strong>Security:</strong> Use strong passwords and enable multi-factor authentication</li>
            <li><strong>Storage Management:</strong> Organize files with clear naming conventions</li>
            <li><strong>Collaboration:</strong> Leverage real-time co-authoring features for research</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Office365Home;