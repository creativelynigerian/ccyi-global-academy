import React from 'react';
import Icon from '../../components/common/Icon';

const MoodleHome = () => {
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
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <Icon name="GraduationCap" size={32} color="#2563eb" />
        Moodle LMS
      </h1>
      <p style={styles.subtitle}>CCYI Global Academy's Learning Management System</p>

      {/* Launch Button */}
      <div style={styles.launchBox}>
        <div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>
            <Icon name="Rocket" size={16} style={{ marginRight: '8px' }} />
            Access the Live Platform
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
            Click the button to launch Moodle LMS
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
          Launch Moodle →
        </a>
      </div>

      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
          🚀 Getting Started
        </h2>
        <div style={styles.card}>
          <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '12px' }}>
            CCYI Global Academy uses Moodle as its primary Learning Management System for course delivery, 
            resource sharing, and student assessment.
          </p>
          <p style={{ fontWeight: '600', marginBottom: '8px' }}>Quick Steps:</p>
          <ol style={styles.list}>
            <li>Navigate to <strong>ccyiglobalentwebng.com.ng/lms</strong></li>
            <li>Log in using your staff credentials provided by IT</li>
            <li>Access your pre-assigned courses</li>
            <li>Begin adding content (lecture notes, presentations, videos)</li>
          </ol>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
          ✨ Best Practices
        </h2>
        <div style={styles.card}>
          <ul style={styles.list}>
            <li><strong>Regular Updates:</strong> Keep course materials current and organized by week or topic</li>
            <li><strong>Communication:</strong> Use the Announcements forum to communicate with students</li>
            <li><strong>Gradebook:</strong> Maintain accurate grade records and provide timely feedback</li>
            <li><strong>Backup:</strong> Regularly back up your course content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoodleHome;