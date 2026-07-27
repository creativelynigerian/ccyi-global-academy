import React, { useState } from 'react';

const FileUpload = ({ onUpload, title = "Upload File", accept = "*/*" }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessage('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first');
      return;
    }

    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      formData.append('fileType', file.type);
      formData.append('fileSize', file.size);

      // Simulate API call - Replace with actual upload endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMessage(`✅ ${file.name} uploaded successfully!`);
      
      // Call the onUpload callback with file data
      if (onUpload) {
        onUpload({
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified
        });
      }

      // Reset after success
      setTimeout(() => {
        setFile(null);
        setProgress(0);
        setUploading(false);
        // Reset file input
        document.getElementById('fileInput').value = '';
      }, 2000);

    } catch (error) {
      setMessage('❌ Upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      clearInterval(interval);
      setUploading(false);
    }
  };

  const styles = {
    container: {
      border: '2px dashed #d1d5db',
      borderRadius: '12px',
      padding: '32px',
      textAlign: 'center',
      transition: 'all 0.3s',
      background: '#f9fafb'
    },
    containerHover: {
      borderColor: '#2563eb',
      background: '#eff6ff'
    },
    icon: {
      fontSize: '48px',
      marginBottom: '12px'
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px'
    },
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '16px'
    },
    input: {
      display: 'none'
    },
    fileInfo: {
      background: '#f3f4f6',
      padding: '12px',
      borderRadius: '8px',
      marginBottom: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    fileName: {
      fontWeight: '500',
      color: '#1f2937'
    },
    fileSize: {
      fontSize: '12px',
      color: '#6b7280'
    },
    button: {
      background: '#2563eb',
      color: 'white',
      border: 'none',
      padding: '10px 24px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    buttonDisabled: {
      background: '#9ca3af',
      cursor: 'not-allowed'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      background: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden',
      marginTop: '12px'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
      borderRadius: '4px',
      transition: 'width 0.3s'
    },
    message: {
      marginTop: '12px',
      fontSize: '14px'
    },
    messageSuccess: {
      color: '#16a34a'
    },
    messageError: {
      color: '#dc2626'
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div 
      style={styles.container}
      onDragOver={(e) => {
        e.preventDefault();
        e.currentTarget.style.borderColor = '#2563eb';
        e.currentTarget.style.background = '#eff6ff';
      }}
      onDragLeave={(e) => {
        e.currentTarget.style.borderColor = '#d1d5db';
        e.currentTarget.style.background = '#f9fafb';
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.currentTarget.style.borderColor = '#d1d5db';
        e.currentTarget.style.background = '#f9fafb';
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
          setFile(droppedFile);
          setMessage('');
        }
      }}
    >
      <div style={styles.icon}>📤</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.subtitle}>Drag and drop your file here, or click to browse</p>

      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        accept={accept}
        style={styles.input}
      />

      <button
        onClick={() => document.getElementById('fileInput').click()}
        style={{
          ...styles.button,
          ...(uploading ? styles.buttonDisabled : {})
        }}
        disabled={uploading}
      >
        Select File
      </button>

      {file && (
        <div style={styles.fileInfo}>
          <span style={styles.fileName}>📄 {file.name}</span>
          <span style={styles.fileSize}>{formatFileSize(file.size)}</span>
        </div>
      )}

      {file && !uploading && (
        <button
          onClick={handleUpload}
          style={styles.button}
          onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
          onMouseLeave={(e) => e.target.style.background = '#2563eb'}
        >
          Upload File
        </button>
      )}

      {uploading && (
        <div style={{ marginTop: '12px' }}>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
          </div>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
            Uploading... {progress}%
          </p>
        </div>
      )}

      {message && (
        <p style={{
          ...styles.message,
          ...(message.includes('✅') ? styles.messageSuccess : styles.messageError)
        }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default FileUpload;