import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

function UserUpload() {
  const [csvData, setCsvData] = useState('');
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState({ success: 0, failed: 0, errors: [] });
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setCsvData(event.target.result);
    };
    reader.readAsText(file);
  };

  const parseCSV = (text) => {
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(',').map(h => h.trim());
    const users = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      if (values.length >= 2) {
        const user = {};
        headers.forEach((header, index) => {
          user[header] = values[index] || '';
        });
        users.push(user);
      }
    }
    return users;
  };

  const uploadUsers = async () => {
    if (!csvData) {
      alert('Please upload a CSV file first.');
      return;
    }

    setUploading(true);
    setResults({ success: 0, failed: 0, errors: [] });

    try {
      const users = parseCSV(csvData);
      let successCount = 0;
      let failCount = 0;
      const errors = [];

      for (const user of users) {
        try {
          // Check if email and password exist
          if (!user.email || !user.password) {
            failCount++;
            errors.push({
              email: user.email || 'unknown',
              error: 'Missing email or password'
            });
            continue;
          }

          // Create user with email and password
          const userCredential = await createUserWithEmailAndPassword(
            auth, 
            user.email, 
            user.password
          );
          
          // Store additional user data in Firestore
          await setDoc(doc(db, 'users', userCredential.user.uid), {
            name: user.name || '',
            email: user.email,
            role: user.role || 'student',
            department: user.department || '',
            createdAt: new Date().toISOString(),
            status: 'Active'
          });
          
          successCount++;
        } catch (error) {
          failCount++;
          errors.push({
            email: user.email || 'unknown',
            error: error.message
          });
        }
      }

      setResults({
        success: successCount,
        failed: failCount,
        errors: errors
      });
      setShowResults(true);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading users. Please check your CSV format.');
    }

    setUploading(false);
  };

  const downloadTemplate = () => {
    const template = 'name,email,password,role,department\nJohn Doe,john@example.com,password123,student,Computer Science\nJane Smith,jane@example.com,password123,student,Engineering';
    const blob = new Blob([template], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_upload_template.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="user-upload-container">
      <div className="upload-header">
        <h3>📤 Bulk User Upload</h3>
        <p>Upload multiple users at once using a CSV file</p>
      </div>

      <div className="upload-template-section">
        <button className="template-btn" onClick={downloadTemplate}>
          📄 Download CSV Template
        </button>
        <p className="template-hint">Format: name, email, password, role, department</p>
      </div>

      <div className="upload-area">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="file-input"
        />
        {csvData && (
          <div className="preview-area">
            <p><strong>File loaded:</strong> {csvData.split('\n').length - 1} users found</p>
            <button 
              className="upload-btn" 
              onClick={uploadUsers}
              disabled={uploading}
            >
              {uploading ? '⏳ Uploading...' : '🚀 Upload Users'}
            </button>
          </div>
        )}
      </div>

      {showResults && (
        <div className="upload-results">
          <h4>Upload Results</h4>
          <div className="results-stats">
            <span className="success">✅ Success: {results.success}</span>
            <span className="failed">❌ Failed: {results.failed}</span>
          </div>
          {results.errors.length > 0 && (
            <div className="error-list">
              <p><strong>Errors:</strong></p>
              {results.errors.map((err, index) => (
                <div key={index} className="error-item">
                  {err.email}: {err.error}
                </div>
              ))}
            </div>
          )}
          <button className="close-results-btn" onClick={() => setShowResults(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default UserUpload;
