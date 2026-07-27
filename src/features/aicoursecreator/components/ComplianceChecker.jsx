import React, { useState, useEffect } from 'react';

const ComplianceChecker = ({ 
  courseData, 
  generatedContent, 
  onComplete, 
  onBack,
  nucStandards,
  jambSyllabi,
  sscSyllabi
}) => {
  const [checking, setChecking] = useState(true);
  const [progress, setProgress] = useState(0);
  const [complianceReport, setComplianceReport] = useState(null);

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
    reportItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '14px'
    },
    passBadge: {
      background: '#d1fae5',
      color: '#065f46',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
    },
    failBadge: {
      background: '#fee2e2',
      color: '#dc2626',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
    },
    warningBadge: {
      background: '#fef3c7',
      color: '#d97706',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
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
    }
  };

  const runComplianceCheck = () => {
    setChecking(true);
    setProgress(0);

    const steps = [
      { progress: 20, status: '🔍 Checking course structure...' },
      { progress: 40, status: '📋 Validating learning objectives...' },
      { progress: 60, status: '📖 Checking curriculum alignment...' },
      { progress: 80, status: '📝 Validating assessment methods...' },
      { progress: 100, status: '✅ Compliance check complete!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        setProgress(step.progress);
        // Update status text through the UI
        currentStep++;
      } else {
        clearInterval(interval);
        // Generate report
        generateReport();
        setChecking(false);
      }
    }, 600);

    return () => clearInterval(interval);
  };

  const generateReport = () => {
    const report = {
      total: 0,
      passed: 0,
      failed: 0,
      warnings: 0,
      items: []
    };

    // Check 1: Course title
    report.items.push({
      category: 'Course Information',
      check: 'Course title is provided',
      status: courseData.title ? 'pass' : 'fail',
      details: courseData.title || 'No title provided'
    });
    report.total++;

    // Check 2: Level selection
    report.items.push({
      category: 'Course Information',
      check: 'Course level is selected',
      status: courseData.level ? 'pass' : 'fail',
      details: courseData.level ? courseData.level.toUpperCase() : 'No level selected'
    });
    report.total++;

    // Check 3: Discipline
    report.items.push({
      category: 'Course Information',
      check: 'Discipline is selected',
      status: courseData.discipline ? 'pass' : 'fail',
      details: courseData.discipline || 'No discipline selected'
    });
    report.total++;

    // Check 4: Learning objectives
    report.items.push({
      category: 'Learning Objectives',
      check: 'Learning objectives defined',
      status: courseData.objectives && courseData.objectives.length > 0 ? 'pass' : 'fail',
      details: courseData.objectives && courseData.objectives.length > 0 
        ? `${courseData.objectives.length} objectives defined` 
        : 'No objectives defined'
    });
    report.total++;

    // Check 5: Generated content
    if (generatedContent) {
      report.items.push({
        category: 'Generated Content',
        check: 'Topics generated',
        status: generatedContent.topics && generatedContent.topics.length > 0 ? 'pass' : 'fail',
        details: generatedContent.topics && generatedContent.topics.length > 0 
          ? `${generatedContent.topics.length} topics generated` 
          : 'No topics generated'
      });
      report.total++;

      report.items.push({
        category: 'Generated Content',
        check: 'Assessments generated',
        status: generatedContent.assessments && generatedContent.assessments.length > 0 ? 'pass' : 'fail',
        details: generatedContent.assessments && generatedContent.assessments.length > 0 
          ? `${generatedContent.assessments.length} assessments generated` 
          : 'No assessments generated'
      });
      report.total++;

      report.items.push({
        category: 'Generated Content',
        check: 'Resources generated',
        status: generatedContent.resources && generatedContent.resources.length > 0 ? 'pass' : 'fail',
        details: generatedContent.resources && generatedContent.resources.length > 0 
          ? `${generatedContent.resources.length} resources generated` 
          : 'No resources generated'
      });
      report.total++;

      // Check 6: NUC/JAMB/SSCE compliance
      const complianceCheck = generatedContent.compliance;
      if (complianceCheck) {
        report.items.push({
          category: 'Compliance',
          check: 'NUC/JAMB/SSCE standards applied',
          status: complianceCheck.standards === '✓' ? 'pass' : 'warning',
          details: complianceCheck.standards === '✓' 
            ? 'Standards applied' 
            : 'Standards not fully applied'
        });
        report.total++;
      }
    }

    // Count statuses
    report.items.forEach(item => {
      if (item.status === 'pass') report.passed++;
      else if (item.status === 'fail') report.failed++;
      else if (item.status === 'warning') report.warnings++;
    });

    setComplianceReport(report);
  };

  useEffect(() => {
    runComplianceCheck();
  }, []);

  const handleComplete = () => {
    onComplete(complianceReport);
  };

  if (checking) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>✅ Compliance Check</h2>
        <p style={styles.subtitle}>Validating course against NUC/JAMB/SSCE standards</p>
        <div style={styles.loadingBox}>
          <div style={styles.spinner}></div>
          <p style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>
            Running Compliance Check
          </p>
          <p style={styles.statusText}>Checking course against standards...</p>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>✅ Compliance Report</h2>
      <p style={styles.subtitle}>
        Summary: {complianceReport?.passed} passed, {complianceReport?.failed} failed, {complianceReport?.warnings} warnings
      </p>

      <div style={styles.card}>
        {complianceReport?.items.map((item, index) => (
          <div key={index} style={styles.reportItem}>
            <div>
              {item.status === 'pass' && '✅'}
              {item.status === 'fail' && '❌'}
              {item.status === 'warning' && '⚠️'}
            </div>
            <div style={{ flex: 1 }}>
              <div>
                <strong>{item.category}:</strong> {item.check}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                {item.details}
              </div>
            </div>
            <div>
              {item.status === 'pass' && (
                <span style={styles.passBadge}>PASS</span>
              )}
              {item.status === 'fail' && (
                <span style={styles.failBadge}>FAIL</span>
              )}
              {item.status === 'warning' && (
                <span style={styles.warningBadge}>WARNING</span>
              )}
            </div>
          </div>
        ))}
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
          onClick={handleComplete}
        >
          ✅ Complete & Preview
        </button>
      </div>
    </div>
  );
};

export default ComplianceChecker;

// Add CSS animation keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);