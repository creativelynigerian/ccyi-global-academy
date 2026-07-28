import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole') || 'student';
  const userName = localStorage.getItem('userName') || 'User';
  
  const [editingMode, setEditingMode] = useState(false);
  const [modules, setModules] = useState(() => {
    const saved = localStorage.getItem('trainingModules');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Moodle LMS', icon: 'fa-graduation-cap', status: 'not-started', progress: 0 },
      { id: 2, title: 'Turnitin', icon: 'fa-search', status: 'not-started', progress: 0 },
      { id: 3, title: 'Office 365', icon: 'fa-building', status: 'not-started', progress: 0 },
      { id: 4, title: 'Internet Login', icon: 'fa-globe', status: 'not-started', progress: 0 },
      { id: 5, title: 'Grammarly', icon: 'fa-pen-fancy', status: 'not-started', progress: 0 },
      { id: 6, title: 'CU Portal', icon: 'fa-university', status: 'not-started', progress: 0 },
    ];
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, name: 'Super Admin', email: 'admin@ccyiglobal.com', role: 'superadmin', status: 'Active' },
      { id: 2, name: 'Manager', email: 'manager@ccyiglobal.com', role: 'manager', status: 'Active' },
      { id: 3, name: 'Student', email: 'student@ccyiglobal.com', role: 'student', status: 'Active' },
    ];
  });

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('courses');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Introduction to OER', code: 'OER101', instructor: 'Dr. Ade', enrolled: 45 },
      { id: 2, title: 'Digital Literacy', code: 'DIG200', instructor: 'Prof. Bola', enrolled: 32 },
    ];
  });

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [csvData, setCsvData] = useState('');

  const isSuperAdmin = userRole === 'superadmin';
  const isManager = userRole === 'manager';
  const isStudent = userRole === 'student';

  // Redirect students away from admin
  useEffect(() => {
    if (isStudent) {
      navigate('/');
    }
  }, [isStudent, navigate]);

  useEffect(() => {
    localStorage.setItem('trainingModules', JSON.stringify(modules));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [modules, users, courses]);

  const toggleEditing = () => {
    setEditingMode(!editingMode);
  };

  const resetAllProgress = () => {
    if (window.confirm('Are you sure you want to reset ALL training progress?')) {
      const resetModules = modules.map(m => ({ ...m, status: 'not-started', progress: 0 }));
      setModules(resetModules);
      localStorage.removeItem('certificateAwarded');
      alert('All progress has been reset!');
    }
  };

  const addUser = () => {
    const name = prompt('Enter user name:');
    const email = prompt('Enter user email:');
    const role = prompt('Enter role (superadmin/manager/student):');
    if (name && email && role) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        role,
        status: 'Active'
      };
      setUsers([...users, newUser]);
    }
  };

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(u => u.id !== id);
      setUsers(updatedUsers);
    }
  };

  const addCourse = () => {
    const title = prompt('Enter course title:');
    const code = prompt('Enter course code:');
    if (title && code) {
      const newCourse = {
        id: courses.length + 1,
        title,
        code,
        instructor: 'TBA',
        enrolled: 0
      };
      setCourses([...courses, newCourse]);
    }
  };

  const deleteCourse = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const updatedCourses = courses.filter(c => c.id !== id);
      setCourses(updatedCourses);
    }
  };

  const handleCsvUpload = () => {
    if (!csvData.trim()) {
      alert('Please paste CSV data.');
      return;
    }

    const lines = csvData.split('\n').filter(line => line.trim());
    const newUsers = [];
    
    lines.forEach((line, index) => {
      const cols = line.split(',').map(col => col.trim());
      if (cols.length >= 2) {
        newUsers.push({
          id: users.length + index + 1,
          name: cols[0],
          email: cols[1],
          role: cols[2] || 'student',
          status: 'Active'
        });
      }
    });

    if (newUsers.length > 0) {
      setUsers([...users, ...newUsers]);
      setCsvData('');
      setShowUploadModal(false);
      alert(`${newUsers.length} users uploaded successfully!`);
    } else {
      alert('No valid users found in CSV data.');
    }
  };

  // ========================
  // SUPER ADMIN VIEW
  // ========================
  if (isSuperAdmin) {
    return (
      <div className="admin-page">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        
        <div className="admin-header">
          <div>
            <h1>👑 Super Admin Dashboard</h1>
            <p className="admin-role-badge">
              <span className="role-badge superadmin">👑 Super Admin</span>
            </p>
          </div>
          <div className="admin-actions">
            <button 
              className={`admin-toggle-btn ${editingMode ? 'active' : ''}`}
              onClick={toggleEditing}
            >
              {editingMode ? '🔓 Turn Editing Off' : '🔒 Turn Editing On'}
            </button>
          </div>
        </div>

        {/* Super Admin Stats */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">{users.length}</p>
          </div>
          <div className="admin-stat-card">
            <h3>Total Modules</h3>
            <p className="stat-number">{modules.length}</p>
          </div>
          <div className="admin-stat-card">
            <h3>Total Courses</h3>
            <p className="stat-number">{courses.length}</p>
          </div>
          <div className="admin-stat-card">
            <h3>Completed Modules</h3>
            <p className="stat-number">{modules.filter(m => m.status === 'completed').length}</p>
          </div>
        </div>

        {/* Super Admin Controls */}
        {editingMode && (
          <div className="editing-panel">
            <h3>✏️ Super Admin Editing Mode</h3>
            <p>Full control over all system settings, users, courses, and modules.</p>
            
            <div className="editing-actions">
              <button className="edit-btn" onClick={resetAllProgress}>
                <i className="fas fa-sync-alt"></i> Reset All Progress
              </button>
              <button className="edit-btn" onClick={addUser}>
                <i className="fas fa-user-plus"></i> Add User
              </button>
              <button className="edit-btn" onClick={() => setShowUploadModal(true)}>
                <i className="fas fa-upload"></i> Upload Users (CSV)
              </button>
              <button className="edit-btn" onClick={addCourse}>
                <i className="fas fa-plus-circle"></i> Add Course
              </button>
            </div>
          </div>
        )}

        {/* CSV Upload Modal */}
        {showUploadModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Upload Users via CSV</h3>
              <p className="modal-hint">Format: Name, Email, Role (optional)</p>
              <p className="modal-hint">Example: John Doe, john@example.com, student</p>
              <textarea
                className="csv-textarea"
                rows="8"
                placeholder="John Doe, john@example.com, student&#10;Jane Smith, jane@example.com, manager"
                value={csvData}
                onChange={(e) => setCsvData(e.target.value)}
              />
              <div className="modal-actions">
                <button className="modal-btn cancel" onClick={() => setShowUploadModal(false)}>Cancel</button>
                <button className="modal-btn upload" onClick={handleCsvUpload}>Upload Users</button>
              </div>
            </div>
          </div>
        )}

        {/* User Management */}
        <section className="admin-section">
          <div className="section-header">
            <h2>👥 User Management</h2>
            <button className="section-action-btn" onClick={addUser}>
              <i className="fas fa-user-plus"></i> Add User
            </button>
          </div>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><span className={`role-tag ${user.role}`}>{user.role}</span></td>
                    <td><span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span></td>
                    <td>
                      <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Course Management */}
        <section className="admin-section">
          <div className="section-header">
            <h2>📚 Course Management</h2>
            <button className="section-action-btn" onClick={addCourse}>
              <i className="fas fa-plus-circle"></i> Add Course
            </button>
          </div>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Instructor</th>
                  <th>Enrolled</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td><strong>{course.code}</strong></td>
                    <td>{course.title}</td>
                    <td>{course.instructor}</td>
                    <td>{course.enrolled}</td>
                    <td>
                      <button className="delete-btn" onClick={() => deleteCourse(course.id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Module Management */}
        <section className="admin-section">
          <h2>📋 Module Management</h2>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Module</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.id}>
                    <td>{module.id}</td>
                    <td>{module.title}</td>
                    <td><span className={`status-badge ${module.status}`}>{module.status}</span></td>
                    <td>{module.progress}%</td>
                    <td>
                      <button className="edit-btn-small" onClick={() => {
                        const newProgress = prompt('Enter new progress (0-100):', module.progress);
                        if (newProgress !== null) {
                          const updated = modules.map(m => 
                            m.id === module.id ? { ...m, progress: Math.min(parseInt(newProgress) || 0, 100) } : m
                          );
                          setModules(updated);
                        }
                      }}>
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="app-footer">
          <div className="footer-content">
            <p>Powered by <strong>CCYI Global Enterprise</strong></p>
            <p className="footer-contact">
              <span>📞 <a href="tel:07018327021">07018327021</a></span>
              <span className="footer-separator">|</span>
              <span>📧 <a href="mailto:ceoccviye@gmail.com">ceoccviye@gmail.com</a></span>
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // ========================
  // MANAGER VIEW
  // ========================
  if (isManager) {
    return (
      <div className="admin-page">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        
        <div className="admin-header">
          <div>
            <h1>📋 Manager Dashboard</h1>
            <p className="admin-role-badge">
              <span className="role-badge manager">📋 Manager</span>
            </p>
          </div>
          <div className="admin-actions">
            <button 
              className={`admin-toggle-btn ${editingMode ? 'active' : ''}`}
              onClick={toggleEditing}
            >
              {editingMode ? '🔓 Turn Editing Off' : '🔒 Turn Editing On'}
            </button>
          </div>
        </div>

        {/* Manager Stats */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">{users.length}</p>
          </div>
          <div className="admin-stat-card">
            <h3>Total Modules</h3>
            <p className="stat-number">{modules.length}</p>
          </div>
          <div className="admin-stat-card">
            <h3>Completed Modules</h3>
            <p className="stat-number">{modules.filter(m => m.status === 'completed').length}</p>
          </div>
        </div>

        {/* Manager Controls */}
        {editingMode && (
          <div className="editing-panel">
            <h3>✏️ Manager Editing Mode</h3>
            <p>You can manage users, courses, and modules. System settings are restricted.</p>
            
            <div className="editing-actions">
              <button className="edit-btn" onClick={resetAllProgress}>
                <i className="fas fa-sync-alt"></i> Reset All Progress
              </button>
              <button className="edit-btn" onClick={addUser}>
                <i className="fas fa-user-plus"></i> Add User
              </button>
              <button className="edit-btn" onClick={() => setShowUploadModal(true)}>
                <i className="fas fa-upload"></i> Upload Users (CSV)
              </button>
              <button className="edit-btn" onClick={addCourse}>
                <i className="fas fa-plus-circle"></i> Add Course
              </button>
            </div>
          </div>
        )}

        {/* CSV Upload Modal */}
        {showUploadModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Upload Users via CSV</h3>
              <p className="modal-hint">Format: Name, Email, Role (optional)</p>
              <textarea
                className="csv-textarea"
                rows="8"
                placeholder="John Doe, john@example.com, student"
                value={csvData}
                onChange={(e) => setCsvData(e.target.value)}
              />
              <div className="modal-actions">
                <button className="modal-btn cancel" onClick={() => setShowUploadModal(false)}>Cancel</button>
                <button className="modal-btn upload" onClick={handleCsvUpload}>Upload Users</button>
              </div>
            </div>
          </div>
        )}

        {/* User Management */}
        <section className="admin-section">
          <div className="section-header">
            <h2>👥 User Management</h2>
            <button className="section-action-btn" onClick={addUser}>
              <i className="fas fa-user-plus"></i> Add User
            </button>
          </div>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><span className={`role-tag ${user.role}`}>{user.role}</span></td>
                    <td><span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span></td>
                    <td>
                      <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Course Management */}
        <section className="admin-section">
          <div className="section-header">
            <h2>📚 Course Management</h2>
            <button className="section-action-btn" onClick={addCourse}>
              <i className="fas fa-plus-circle"></i> Add Course
            </button>
          </div>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Instructor</th>
                  <th>Enrolled</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td><strong>{course.code}</strong></td>
                    <td>{course.title}</td>
                    <td>{course.instructor}</td>
                    <td>{course.enrolled}</td>
                    <td>
                      <button className="delete-btn" onClick={() => deleteCourse(course.id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Module Management */}
        <section className="admin-section">
          <h2>📋 Module Management</h2>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Module</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.id}>
                    <td>{module.id}</td>
                    <td>{module.title}</td>
                    <td><span className={`status-badge ${module.status}`}>{module.status}</span></td>
                    <td>{module.progress}%</td>
                    <td>
                      <button className="edit-btn-small" onClick={() => {
                        const newProgress = prompt('Enter new progress (0-100):', module.progress);
                        if (newProgress !== null) {
                          const updated = modules.map(m => 
                            m.id === module.id ? { ...m, progress: Math.min(parseInt(newProgress) || 0, 100) } : m
                          );
                          setModules(updated);
                        }
                      }}>
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="app-footer">
          <div className="footer-content">
            <p>Powered by <strong>CCYI Global Enterprise</strong></p>
            <p className="footer-contact">
              <span>📞 <a href="tel:07018327021">07018327021</a></span>
              <span className="footer-separator">|</span>
              <span>📧 <a href="mailto:ceoccviye@gmail.com">ceoccviye@gmail.com</a></span>
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // ========================
  // STUDENT VIEW (Should not see this)
  // ========================
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
        <Link to="/" className="back-link">← Go Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default Admin;
