import React from 'react';

const TurnitinHome = () => {
  const styles = {
    container: { padding: '24px', maxWidth: '1200px', margin: '0 auto' },
    title: { fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' },
    subtitle: { fontSize: '16px', color: '#6b7280', marginBottom: '24px' },
    card: { background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '16px' },
    cardTitle: { fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '8px' },
    cardText: { color: '#6b7280', lineHeight: '1.6' },
    list: { paddingLeft: '20px', color: '#6b7280', lineHeight: '1.8' },
    warningBox: { background: '#fef3c7', border: '1px solid #f59e0b', padding: '16px', borderRadius: '8px', marginTop: '12px' },
    warningText: { color: '#92400e', margin: 0 },
    section: { marginBottom: '32px' }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>?? Turnitin</h1>
      <p style={styles.subtitle}>Academic Integrity & Plagiarism Detection</p>

      {/* Purpose */}
      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>?? Purpose</h2>
        <div style={styles.card}>
          <p style={styles.cardText}>
            CCYI Global Academy subscribes to Turnitin software as part of its commitment to academic integrity. 
            All faculty and staff are required to subject all term papers, projects, dissertations, and theses 
            to similarity checks before submission.
          </p>
        </div>
      </div>

      {/* Acceptable Similarity */}
      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>?? Acceptable Similarity Index</h2>
        <div style={styles.card}>
          <div style={styles.warningBox}>
            <p style={styles.warningText}>
              <strong>?? Threshold:</strong> The similarity index acceptable to CCYI Global Academy 
              shall not exceed <strong>20%</strong> excluding references and bibliographies.
            </p>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>??? How to Use Turnitin</h2>
        <div style={styles.card}>
          <ol style={styles.list}>
            <li><strong>Access:</strong> Log in through the university portal or directly at turnitin.com</li>
            <li><strong>Create Class:</strong> Set up your course/class section for student submissions</li>
            <li><strong>Assignment Setup:</strong> Configure submission settings including due dates and file types</li>
            <li><strong>Review Reports:</strong> Examine originality reports and flag concerning similarities</li>
            <li><strong>Provide Feedback:</strong> Use the GradeMark feature for digital feedback</li>
          </ol>
        </div>
      </div>

      {/* Consequences */}
      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>?? Consequences for Violations</h2>
        <div style={styles.card}>
          <p style={styles.cardText}>Penalties for faculty/staff may include:</p>
          <ul style={styles.list}>
            <li>Suspension without pay</li>
            <li>Reprimand</li>
            <li>Demotion in rank for one year</li>
            <li>Long-term salary increase denial</li>
            <li>Termination or dismissal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TurnitinHome;

