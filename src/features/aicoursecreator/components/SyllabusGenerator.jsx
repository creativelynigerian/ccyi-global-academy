import React, { useState } from 'react';

const SyllabusGenerator = ({ courseData, onGenerate, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [syllabus, setSyllabus] = useState(null);

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
      background: '#f9fafb',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '16px'
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
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e5e7eb'
    }
  };

  const generateSyllabus = () => {
    setLoading(true);
    setTimeout(() => {
      const weeks = 14; // Typical semester
      const syllabusData = {
        title: courseData.title || 'Course Syllabus',
        level: courseData.level?.toUpperCase() || 'NUC',
        discipline: courseData.discipline || 'General',
        description: courseData.description || 'Course description',
        objectives: courseData.objectives || ['Objective 1', 'Objective 2'],
        schedule: Array.from({ length: weeks }, (_, i) => ({
          week: i + 1,
          topic: `Topic ${i + 1}`,
          description: `Description for week ${i + 1}`
        })),
        assessments: [
          { type: 'Assignment 1', percentage: 10 },
          { type: 'Mid-term Exam', percentage: 20 },
          { type: 'Assignment 2', percentage: 10 },
          { type: 'Final Exam', percentage: 60 }
        ],
        resources: ['Textbook 1', 'Journal 1', 'Online Resource 1']
      };
      setSyllabus(syllabusData);
      setLoading(false);
      onGenerate(syllabusData);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📋 Syllabus Generator</h2>
      <p style={styles.subtitle}>Generate a complete course syllabus</p>

      <div style={styles.card}>
        <p><strong>Course:</strong> {courseData.title || 'Untitled'}</p>
        <p><strong>Level:</strong> {courseData.level?.toUpperCase() || 'Not selected'}</p>
        <p><strong>Discipline:</strong> {courseData.discipline || 'Not selected'}</p>
        <p><strong>Learning Objectives:</strong> {courseData.objectives?.length || 0}</p>
      </div>

      {syllabus && (
        <div style={styles.card}>
          <h3 style={{ marginBottom: '12px' }}>📚 Generated Syllabus</h3>
          <p><strong>Course:</strong> {syllabus.title}</p>
          <p><strong>Description:</strong> {syllabus.description}</p>
          <p><strong>Schedule:</strong> {syllabus.schedule.length} weeks</p>
          <p><strong>Assessments:</strong> {syllabus.assessments.length}</p>
        </div>
      )}

      <div style={styles.footer}>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={onBack}
        >
          ← Back
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonPrimary }}
          onClick={generateSyllabus}
          disabled={loading}
          onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
          onMouseLeave={(e) => e.target.style.background = '#2563eb'}
        >
          {loading ? 'Generating...' : '📋 Generate Syllabus'}
        </button>
      </div>
    </div>
  );
};

export default SyllabusGenerator;