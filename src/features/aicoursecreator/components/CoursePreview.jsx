import React, { useState } from 'react';

const CoursePreview = ({ 
  courseData, 
  generatedContent, 
  complianceReport, 
  onBack 
}) => {
  const [exporting, setExporting] = useState(false);

  const styles = {
    container: {
      padding: '24px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280',
      marginBottom: '24px'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '16px',
      border: '1px solid #e5e7eb'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '12px'
    },
    section: {
      marginBottom: '16px'
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px'
    },
    sectionContent: {
      color: '#4b5563',
      lineHeight: '1.6'
    },
    list: {
      paddingLeft: '20px',
      color: '#4b5563',
      lineHeight: '1.8'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '16px'
    },
    statCard: {
      background: '#f9fafb',
      padding: '16px',
      borderRadius: '8px',
      textAlign: 'center'
    },
    statValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0'
    },
    statLabel: {
      fontSize: '12px',
      color: '#6b7280',
      margin: '4px 0 0 0'
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e5e7eb',
      flexWrap: 'wrap',
      gap: '12px'
    },
    button: {
      padding: '10px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    buttonPrimary: {
      background: '#2563eb',
      color: 'white'
    },
    buttonSecondary: {
      background: '#e5e7eb',
      color: '#4b5563'
    },
    buttonSuccess: {
      background: '#16a34a',
      color: 'white'
    },
    buttonPurple: {
      background: '#7c3aed',
      color: 'white'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  };

  const handleExport = (format) => {
    setExporting(true);
    // Simulate export
    setTimeout(() => {
      setExporting(false);
      alert(`✅ Course exported as ${format.toUpperCase()}!`);
    }, 1500);
  };

  const handleSave = () => {
    alert('✅ Course saved to library!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👁️ Course Preview</h2>
      <p style={styles.subtitle}>Review your AI-generated course before exporting</p>

      {/* Statistics */}
      <div style={styles.grid}>
        <div style={styles.statCard}>
          <p style={styles.statValue}>{courseData.title || 'Untitled'}</p>
          <p style={styles.statLabel}>Course Title</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statValue}>{courseData.level?.toUpperCase() || 'N/A'}</p>
          <p style={styles.statLabel}>Level</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statValue}>{courseData.discipline || 'N/A'}</p>
          <p style={styles.statLabel}>Discipline</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statValue}>
            {complianceReport?.passed || 0}/{complianceReport?.total || 0}
          </p>
          <p style={styles.statLabel}>Compliance Score</p>
        </div>
      </div>

      {/* Course Details */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>📚 Course Overview</h3>
        <div style={styles.section}>
          <p style={styles.sectionContent}>
            <strong>Title:</strong> {courseData.title}
          </p>
          <p style={styles.sectionContent}>
            <strong>Level:</strong> {courseData.level?.toUpperCase()}
          </p>
          <p style={styles.sectionContent}>
            <strong>Discipline:</strong> {courseData.discipline}
          </p>
          {courseData.description && (
            <p style={styles.sectionContent}>
              <strong>Description:</strong> {courseData.description}
            </p>
          )}
        </div>
      </div>

      {/* Learning Objectives */}
      {courseData.objectives && courseData.objectives.length > 0 && (
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🎯 Learning Objectives</h3>
          <ul style={styles.list}>
            {courseData.objectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Generated Content */}
      {generatedContent && (
        <>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📖 Course Topics</h3>
            {generatedContent.topics?.map((topic, index) => (
              <div key={index} style={styles.section}>
                <p style={{ fontWeight: '600' }}>
                  {index + 1}. {topic.topic}
                </p>
                <ul style={styles.list}>
                  {topic.subtopics?.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📝 Assessments</h3>
            <ul style={styles.list}>
              {generatedContent.assessments?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📚 Recommended Resources</h3>
            <ul style={styles.list}>
              {generatedContent.resources?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Compliance Report */}
      {complianceReport && (
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>✅ Compliance Summary</h3>
          <ul style={styles.list}>
            <li>Total Checks: {complianceReport.total}</li>
            <li>✅ Passed: {complianceReport.passed}</li>
            <li>❌ Failed: {complianceReport.failed}</li>
            <li>⚠️ Warnings: {complianceReport.warnings}</li>
          </ul>
        </div>
      )}

      {/* Footer Actions */}
      <div style={styles.footer}>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={onBack}
        >
          ← Back
        </button>
        
        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.buttonPrimary }}
            onClick={handleSave}
            onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
            onMouseLeave={(e) => e.target.style.background = '#2563eb'}
          >
            💾 Save to Library
          </button>
          
          <button
            style={{ ...styles.button, ...styles.buttonPurple }}
            onClick={() => handleExport('pdf')}
            disabled={exporting}
            onMouseEnter={(e) => e.target.style.background = '#6d28d9'}
            onMouseLeave={(e) => e.target.style.background = '#7c3aed'}
          >
            📄 Export PDF
          </button>
          
          <button
            style={{ ...styles.button, ...styles.buttonSuccess }}
            onClick={() => handleExport('scorm')}
            disabled={exporting}
            onMouseEnter={(e) => e.target.style.background = '#15803d'}
            onMouseLeave={(e) => e.target.style.background = '#16a34a'}
          >
            📦 Export SCORM
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;