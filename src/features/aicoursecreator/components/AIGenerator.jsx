import React, { useState, useEffect } from 'react';

const AIGenerator = ({ 
  courseData, 
  onGenerate, 
  onBack,
  nucStandards,
  jambSyllabi,
  sscSyllabi
}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generated, setGenerated] = useState(null);
  const [status, setStatus] = useState('');

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
    loadingBox: {
      textAlign: 'center',
      padding: '60px 20px'
    },
    spinner: {
      width: '60px',
      height: '60px',
      border: '4px solid #e5e7eb',
      borderTop: '4px solid #2563eb',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 16px'
    },
    progressBar: {
      width: '100%',
      maxWidth: '400px',
      height: '8px',
      background: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden',
      margin: '16px auto'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
      borderRadius: '4px',
      transition: 'width 0.3s'
    },
    statusText: {
      color: '#6b7280',
      fontSize: '14px'
    },
    generatedContent: {
      maxHeight: '400px',
      overflowY: 'auto'
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
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e5e7eb'
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
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  // Get the appropriate standards based on course level
  const getStandards = () => {
    switch(courseData.level) {
      case 'nuc':
        return nucStandards;
      case 'jamb':
        return jambSyllabi;
      case 'ssc':
        return sscSyllabi;
      default:
        return null;
    }
  };

  // Get discipline-specific requirements
  const getDisciplineRequirements = () => {
    const standards = getStandards();
    if (!standards) return null;

    // For NUC, get from disciplines
    if (courseData.level === 'nuc') {
      const discipline = standards.disciplines?.[courseData.discipline];
      if (discipline) {
        return {
          requiredCourses: discipline.requiredCourses || [],
          learningOutcomes: discipline.learningOutcomes || [],
          coreCreditHours: discipline.coreCreditHours || 70,
          electiveCreditHours: discipline.electiveCreditHours || 30
        };
      }
    }

    // For JAMB/SSCE, get from syllabi
    const syllabus = standards[courseData.discipline];
    if (syllabus) {
      return {
        objectives: syllabus.objectives || [],
        topics: syllabus.topics || [],
        recommendedTextbooks: syllabus.recommendedTextbooks || []
      };
    }

    return null;
  };

  const generateContent = async () => {
    setLoading(true);
    setProgress(0);
    setStatus('Analyzing course requirements...');

    // Simulate AI generation with progressive updates
    const steps = [
      { progress: 10, status: '📚 Analyzing discipline requirements...' },
      { progress: 25, status: '📝 Generating learning objectives...' },
      { progress: 40, status: '📖 Creating course outline...' },
      { progress: 55, status: '📋 Developing topics and subtopics...' },
      { progress: 70, status: '📝 Designing assessments...' },
      { progress: 85, status: '📚 Adding recommended resources...' },
      { progress: 100, status: '✅ Course generation complete!' }
    ];

    const standards = getStandards();
    const disciplineReqs = getDisciplineRequirements();
    const levelMap = {
      nuc: 'NUC (University Level)',
      jamb: 'JAMB (UTME)',
      ssc: 'SSCE (WAEC/NECO)'
    };

    // Simulate AI generation steps
    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(step.progress);
      setStatus(step.status);
    }

    // Build the generated content
    const content = {
      title: courseData.title,
      level: levelMap[courseData.level] || 'Unknown',
      discipline: courseData.discipline,
      description: courseData.description,
      objectives: [],
      topics: [],
      assessments: [],
      resources: [],
      compliance: {
        standards: standards ? '✓' : '✗',
        discipline: '✓'
      }
    };

    // Generate based on level
    if (courseData.level === 'nuc') {
      content.objectives = [
        `By the end of this course, students will be able to:`,
        ...(disciplineReqs?.learningOutcomes?.slice(0, 4) || []).map(o => `  - ${o}`),
        `  - Apply ${courseData.discipline} principles to real-world problems`,
        `  - Demonstrate critical thinking and problem-solving skills`
      ];
      content.topics = [
        { topic: 'Introduction', subtopics: ['Overview', 'Key Concepts', 'Course Structure'] },
        { topic: 'Core Concepts', subtopics: ['Fundamental Principles', 'Theories', 'Models'] },
        { topic: 'Applications', subtopics: ['Practical Applications', 'Case Studies', 'Projects'] },
        { topic: 'Assessment and Review', subtopics: ['Assignments', 'Examinations', 'Project Work'] }
      ];
      content.assessments = [
        'Continuous Assessment (40%) - Assignments, Quizzes, Projects',
        'Examinations (60%) - Mid-term and Final Examinations'
      ];
      content.resources = [
        'Recommended Textbooks and Journals',
        'Online Learning Resources and Databases',
        'Labs and Practical Sessions',
        'Guest Lectures and Workshops'
      ];
    } else {
      // JAMB or SSCE
      const syllabus = courseData.level === 'jamb' ? jambSyllabi[courseData.discipline] : sscSyllabi[courseData.discipline];
      content.objectives = [
        `By the end of this course, students will be able to:`,
        ...(syllabus?.objectives?.slice(0, 4) || []).map(o => `  - ${o}`),
        `  - Apply knowledge to examination questions`,
        `  - Demonstrate understanding of key concepts`
      ];
      content.topics = syllabus?.topics?.map(t => ({
        topic: t.topic,
        subtopics: t.subtopics || []
      })) || [];
      content.assessments = [
        'Continuous Assessment (30%) - Assignments and Quizzes',
        'Examinations (70%) - Internal and External Examinations'
      ];
      content.resources = syllabus?.recommendedTextbooks?.map(b => `- ${b}`) || [
        'Recommended Textbooks and Study Materials',
        'Past Questions and Practice Tests',
        'Online Learning Resources'
      ];
    }

    setGenerated(content);
    setLoading(false);
  };

  useEffect(() => {
    generateContent();
  }, []);

  const handleAccept = () => {
    onGenerate(generated);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🤖 AI Course Generation</h2>
      <p style={styles.subtitle}>
        AI is generating a course based on NUC, JAMB, or SSCE standards
      </p>

      {loading ? (
        <div style={styles.loadingBox}>
          <div style={styles.spinner}></div>
          <p style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>
            Generating Course Content
          </p>
          <p style={styles.statusText}>{status}</p>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
          </div>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            This may take a moment...
          </p>
        </div>
      ) : (
        <div>
          <div style={styles.card}>
            <div style={styles.generatedContent}>
              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>📚 Course: {generated?.title}</h3>
                <p style={styles.sectionContent}>
                  <strong>Level:</strong> {generated?.level}<br />
                  <strong>Discipline:</strong> {generated?.discipline}
                </p>
              </div>

              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>🎯 Learning Objectives</h3>
                <ul style={styles.list}>
                  {generated?.objectives?.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>📖 Course Topics</h3>
                {generated?.topics?.map((topic, index) => (
                  <div key={index} style={{ marginBottom: '8px' }}>
                    <strong>{index + 1}. {topic.topic}</strong>
                    <ul style={styles.list}>
                      {topic.subtopics?.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>📝 Assessments</h3>
                <ul style={styles.list}>
                  {generated?.assessments?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>📚 Resources</h3>
                <ul style={styles.list}>
                  {generated?.resources?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>✅ Compliance Check</h3>
                <ul style={styles.list}>
                  <li>✅ NUC/JAMB/SSCE Standards Applied</li>
                  <li>✅ Learning Outcomes Mapped</li>
                  <li>✅ Assessment Methods Included</li>
                  <li>✅ Resources Recommended</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={styles.footer}>
            <button
              style={{ ...styles.button, ...styles.buttonSecondary }}
              onClick={onBack}
            >
              ← Back
            </button>
            <button
              style={{ ...styles.button, ...styles.buttonSuccess }}
              onClick={handleAccept}
            >
              ✅ Accept & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIGenerator;

// Add CSS animation keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);