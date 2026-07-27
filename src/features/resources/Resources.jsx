import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload';

const Resources = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

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
      marginBottom: '8px' 
    },
    subtitle: { 
      fontSize: '16px', 
      color: '#6b7280', 
      marginBottom: '24px' 
    },
    section: { 
      marginBottom: '32px' 
    },
    card: { 
      background: 'white', 
      padding: '24px', 
      borderRadius: '12px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
      marginBottom: '16px' 
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px'
    },
    list: { 
      paddingLeft: '20px', 
      color: '#6b7280', 
      lineHeight: '1.8'  // ? Fixed: lineHeight instead of line-height
    },
    fileList: {
      marginTop: '16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '12px'
    },
    fileItem: {
      background: '#f3f4f6',
      padding: '12px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
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
      display: 'inline-block'
    }
  };

  const handleFileUpload = (fileData) => {
    setUploadedFiles(prev => [...prev, fileData]);
    console.log('File uploaded:', fileData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>?? Resources</h1>
      <p style={styles.subtitle}>Essential Documents & Support Materials</p>

      {/* Launch Button */}
      <div style={styles.launchBox}>
        <div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>
            ?? Access the Live Platform
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
            Click the button to access resources
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
          Launch Resources ?
        </a>
      </div>

      {/* Upload Section */}
      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>
          ?? Upload Resources
        </h2>
        <FileUpload 
          onUpload={handleFileUpload}
          title="Upload Resource Document"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.jpg,.png"
        />
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div style={styles.section}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>
            Uploaded Files ({uploadedFiles.length})
          </h2>
          <div style={styles.fileList}>
            {uploadedFiles.map((file, index) => (
              <div key={index} style={styles.fileItem}>
                <span>??</span>
                <span style={{ fontSize: '14px', color: '#1f2937' }}>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Essential Documents */}
      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>
          ?? Essential Documents
        </h2>
        <div style={styles.card}>
          <ul style={styles.list}>
            <li>Staff Handbook and Conditions of Service</li>
            <li>University Policies on Plagiarism and Academic Integrity</li>
            <li>CCYI Global Academy Student Handbook</li>
            <li>Syllabi guidelines and academic regulations</li>
          </ul>
        </div>
      </div>

      {/* Training & Support */}
      <div style={styles.section}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>
          ?? Training & Support
        </h2>
        <div style={styles.card}>
          <ul style={styles.list}>
            <li><strong>CLR:</strong> Centre for Learning Resources - library support</li>
            <li><strong>CSIS:</strong> ICT support for all platforms</li>
            <li><strong>HR Unit:</strong> Staff welfare and administrative guidance</li>
            <li><strong>Faculty Orientation:</strong> Regular orientation programs for new faculty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
