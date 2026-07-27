import React, { useState } from 'react';
import CourseCreatorWizard from './components/CourseCreatorWizard';
import ComplianceChecker from './components/ComplianceChecker';
import AIGenerator from './components/AIGenerator';
import CoursePreview from './components/CoursePreview';
import SyllabusGenerator from './components/SyllabusGenerator';
import { disciplines } from './data/disciplines';
import { nucStandards } from './data/nucStandards';
import { jambSyllabi } from './data/jambSyllabi';
import { sscSyllabi } from './data/sscSyllabi';

// ... rest of the code as provided earlier

const AICourseCreator = () => {
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: '',
    level: 'nuc', // 'nuc', 'jamb', 'ssc'
    discipline: '',
    description: '',
    objectives: [],
    topics: [],
    assessments: [],
    resources: []
  });
  const [generatedContent, setGeneratedContent] = useState(null);
  const [complianceReport, setComplianceReport] = useState(null);

  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      marginBottom: '32px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    subtitle: {
      fontSize: '16px',
      color: '#6b7280'
    },
    progressBar: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '32px',
      position: 'relative'
    },
    progressStep: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      position: 'relative'
    },
    stepNumber: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      background: '#e5e7eb',
      color: '#6b7280',
      transition: 'all 0.3s',
      zIndex: 2
    },
    stepNumberActive: {
      background: '#2563eb',
      color: 'white'
    },
    stepNumberCompleted: {
      background: '#16a34a',
      color: 'white'
    },
    stepLabel: {
      marginTop: '8px',
      fontSize: '12px',
      color: '#6b7280',
      textAlign: 'center'
    },
    stepLabelActive: {
      color: '#2563eb',
      fontWeight: '600'
    },
    progressLine: {
      position: 'absolute',
      top: '18px',
      left: '0',
      right: '0',
      height: '2px',
      background: '#e5e7eb',
      zIndex: 1
    },
    progressLineFill: {
      height: '2px',
      background: '#2563eb',
      transition: 'width 0.5s'
    },
    content: {
      background: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
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

  const steps = [
    { label: 'Course Details', icon: '📝' },
    { label: 'AI Generation', icon: '🤖' },
    { label: 'Compliance Check', icon: '✅' },
    { label: 'Preview & Export', icon: '👁️' }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCourseDataUpdate = (data) => {
    setCourseData({ ...courseData, ...data });
  };

  const handleGenerate = (content) => {
    setGeneratedContent(content);
    // Auto-advance to compliance check
    setStep(3);
  };

  const handleComplianceCheck = (report) => {
    setComplianceReport(report);
    setStep(4);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <CourseCreatorWizard
            courseData={courseData}
            onUpdate={handleCourseDataUpdate}
            onNext={handleNext}
            disciplines={disciplines}
          />
        );
      case 2:
        return (
          <AIGenerator
            courseData={courseData}
            onGenerate={handleGenerate}
            onBack={handlePrev}
            nucStandards={nucStandards}
            jambSyllabi={jambSyllabi}
            sscSyllabi={sscSyllabi}
          />
        );
      case 3:
        return (
          <ComplianceChecker
            courseData={courseData}
            generatedContent={generatedContent}
            onComplete={handleComplianceCheck}
            onBack={handlePrev}
            nucStandards={nucStandards}
            jambSyllabi={jambSyllabi}
            sscSyllabi={sscSyllabi}
          />
        );
      case 4:
        return (
          <CoursePreview
            courseData={courseData}
            generatedContent={generatedContent}
            complianceReport={complianceReport}
            onBack={handlePrev}
          />
        );
      default:
        return <div>Step not found</div>;
    }
  };

  const getStepStatus = (index) => {
    if (index + 1 < step) return 'completed';
    if (index + 1 === step) return 'active';
    return 'pending';
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span>🤖</span> AI Course Creator
        </h1>
        <p style={styles.subtitle}>
          Create NUC, JAMB, and SSCE compliant courses with AI assistance
        </p>
      </div>

      {/* Progress Bar */}
      <div style={styles.progressBar}>
        <div style={styles.progressLine}>
          <div style={{ ...styles.progressLineFill, width: `${((step - 1) / (steps.length - 1)) * 100}%` }}></div>
        </div>
        {steps.map((s, index) => {
          const status = getStepStatus(index);
          return (
            <div key={index} style={styles.progressStep}>
              <div style={{
                ...styles.stepNumber,
                ...(status === 'active' ? styles.stepNumberActive : {}),
                ...(status === 'completed' ? styles.stepNumberCompleted : {})
              }}>
                {status === 'completed' ? '✓' : index + 1}
              </div>
              <span style={{
                ...styles.stepLabel,
                ...(status === 'active' ? styles.stepLabelActive : {})
              }}>
                {s.icon} {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div style={styles.content}>
        {renderStep()}
      </div>
    </div>
  );
};

export default AICourseCreator;