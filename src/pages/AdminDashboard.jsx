import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import Logo from '../components/common/Logo';

// ... rest of the code, add Logo in the header

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { adminUser, editMode, toggleEditMode, logoutAdmin } = useAdmin();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [files, setFiles] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: 'Dr. John Smith', email: 'john@covenant.edu', role: 'faculty', status: 'active' },
    { id: 2, name: 'Dr. Mary Johnson', email: 'mary@covenant.edu', role: 'faculty', status: 'active' },
    { id: 3, name: 'Dr. David Williams', email: 'david@covenant.edu', role: 'faculty', status: 'pending' }
  ]);

  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0
    },
    adminBadge: {
      background: '#4f46e5',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    },
    editToggle: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '8px',
      background: editMode ? '#dbeafe' : '#f3f4f6',
      border: '2px solid',
      borderColor: editMode ? '#2563eb' : '#d1d5db',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    editToggleText: {
      fontSize: '14px',
      fontWeight: '500',
      color: editMode ? '#2563eb' : '#6b7280'
    },
    toggleIndicator: {
      width: '40px',
      height: '20px',
      borderRadius: '10px',
      background: editMode ? '#2563eb' : '#9ca3af',
      position: 'relative',
      transition: 'all 0.3s'
    },
    toggleDot: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: 'white',
      position: 'absolute',
      top: '2px',
      left: editMode ? '22px' : '2px',
      transition: 'all 0.3s'
    },
    tabs: {
      display: 'flex',
      gap: '4px',
      marginBottom: '24px',
      borderBottom: '1px solid #e5e7eb',
      flexWrap: 'wrap'
    },
    tab: {
      padding: '10px 20px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      color: '#6b7280',
      borderBottom: '2px solid transparent',
      transition: 'all 0.3s'
    },
    tabActive: {
      color: '#2563eb',
      borderBottom: '2px solid #2563eb'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '24px'
    },
    statCard: {
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      textAlign: 'center'
    },
    statValue: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0'
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '4px 0 0 0'
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
      marginBottom: '16px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    th: {
      textAlign: 'left',
      padding: '12px',
      borderBottom: '2px solid #e5e7eb',
      fontWeight: '600',
      color: '#374151'
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e5e7eb',
      color: '#4b5563'
    },
    statusBadge: {
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500',
      display: 'inline-block'
    },
    statusActive: {
      background: '#d1fae5',
      color: '#065f46'
    },
    statusPending: {
      background: '#fef3c7',
      color: '#d97706'
    },
    button: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '500',
      transition: 'all 0.3s'
    },
    buttonPrimary: {
      background: '#2563eb',
      color: 'white'
    },
    buttonDanger: {
      background: '#dc2626',
      color: 'white'
    },
    buttonSuccess: {
      background: '#16a34a',
      color: 'white'
    },
    logoutBtn: {
      background: '#dc2626',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    uploadArea: {
      border: '2px dashed #d1d5db',
      borderRadius: '12px',
      padding: '40px',
      textAlign: 'center',
      transition: 'all 0.3s'
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/dashboard');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles([...files, { id: Date.now(), name: file.name, size: file.size, date: new Date().toLocaleDateString() }]);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>🔧 Admin Dashboard</h1>
          <span style={styles.adminBadge}>ADMIN</span>
        </div>
        <div style={styles.headerRight}>
          <span style={{ fontSize: '14px', color: '#6b7280' }}>
            👋 {adminUser?.name || 'Administrator'}
          </span>
          
          {/* Edit Mode Toggle */}
          <div style={styles.editToggle} onClick={toggleEditMode}>
            <span style={styles.editToggleText}>
              {editMode ? '✏️ Edit Mode ON' : '📝 Edit Mode OFF'}
            </span>
            <div style={styles.toggleIndicator}>
              <div style={styles.toggleDot}></div>
            </div>
          </div>

          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={{ ...styles.tab, ...(activeTab === 'dashboard' ? styles.tabActive : {}) }}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'users' ? styles.tabActive : {}) }}
          onClick={() => setActiveTab('users')}
        >
          👥 Users
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'courses' ? styles.tabActive : {}) }}
          onClick={() => setActiveTab('courses')}
        >
          📚 Courses
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'uploads' ? styles.tabActive : {}) }}
          onClick={() => setActiveTab('uploads')}
        >
          📤 Uploads
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'settings' ? styles.tabActive : {}) }}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings
        </button>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <p style={styles.statValue}>3</p>
              <p style={styles.statLabel}>Total Users</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statValue}>{files.length}</p>
              <p style={styles.statLabel}>Uploaded Files</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statValue}>6</p>
              <p style={styles.statLabel}>Courses</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statValue}>{editMode ? 'ON' : 'OFF'}</p>
              <p style={styles.statLabel}>Edit Mode</p>
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Quick Actions</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button style={{ ...styles.button, ...styles.buttonPrimary }}>➕ Add New User</button>
              <button style={{ ...styles.button, ...styles.buttonPrimary }}>📚 Create Course</button>
              <button style={{ ...styles.button, ...styles.buttonSuccess }}>📤 Upload Materials</button>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>👥 User Management</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.role}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusBadge,
                      ...(user.status === 'active' ? styles.statusActive : styles.statusPending)
                    }}>
                      {user.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={{ ...styles.button, ...styles.buttonPrimary, marginRight: '4px' }}>✏️</button>
                    <button style={{ ...styles.button, ...styles.buttonDanger }}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Uploads Tab */}
      {activeTab === 'uploads' && (
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📤 Upload Course Materials</h3>
          <div style={styles.uploadArea}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>📁</div>
            <p style={{ fontSize: '16px', fontWeight: '500', color: '#1f2937' }}>Drag and drop files here</p>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
              or click to browse (PDF, DOC, PPT, MP4, ZIP)
            </p>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="fileInput"
            />
            <button
              style={{ ...styles.button, ...styles.buttonPrimary }}
              onClick={() => document.getElementById('fileInput').click()}
            >
              Select Files
            </button>
          </div>

          {files.length > 0 && (
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ marginBottom: '8px' }}>Uploaded Files ({files.length})</h4>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>File Name</th>
                    <th style={styles.th}>Size</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map(file => (
                    <tr key={file.id}>
                      <td style={styles.td}>📄 {file.name}</td>
                      <td style={styles.td}>{(file.size / 1024).toFixed(2)} KB</td>
                      <td style={styles.td}>{file.date}</td>
                      <td style={styles.td}>
                        <button style={{ ...styles.button, ...styles.buttonDanger }}>🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>⚙️ General Settings</h3>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Platform Name</label>
              <input
                type="text"
                value="CCYI Global Academy Learning Platform"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Admin Email</label>
              <input
                type="email"
                value="admin@covenant.edu"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              />
            </div>
            <button style={{ ...styles.button, ...styles.buttonPrimary }}>Save Settings</button>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🔄 Edit Mode</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>Status: <strong>{editMode ? 'ON' : 'OFF'}</strong></span>
              <button
                style={{
                  ...styles.button,
                  ...(editMode ? styles.buttonDanger : styles.buttonSuccess)
                }}
                onClick={toggleEditMode}
              >
                {editMode ? 'Turn Edit Mode OFF' : 'Turn Edit Mode ON'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;