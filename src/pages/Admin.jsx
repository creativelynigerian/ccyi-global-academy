import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [editingMode, setEditingMode] = useState(() => {
    return localStorage.getItem('editingMode') === 'true';
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('adminUsers');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, name: 'Super Admin', email: 'admin@ccyiglobal.com', role: 'superadmin', status: 'Active' },
      { id: 2, name: 'John Doe', email: 'john@ccyiglobal.com', role: 'student', status: 'Active' },
      { id: 3, name: 'Jane Smith', email: 'jane@ccyiglobal.com', role: 'student', status: 'Active' },
    ];
  });

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('adminCourses');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Microsoft Word', code: 'MSW101', instructor: 'Kay Daniels', enrolled: 45 },
      { id: 2, title: 'Microsoft Excel', code: 'MSE102', instructor: 'Kay Daniels', enrolled: 32 },
      { id: 3, title: 'Canva Design', code: 'CDN103', instructor: 'Kay Daniels', enrolled: 28 },
    ];
  });

  useEffect(() => {
    localStorage.setItem('editingMode', JSON.stringify(editingMode));
  }, [editingMode]);

  useEffect(() => {
    localStorage.setItem('adminUsers', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('adminCourses', JSON.stringify(courses));
  }, [courses]);

  const toggleEditing = () => {
    setEditingMode(!editingMode);
  };

  const addUser = () => {
    const name = prompt('Enter user name:');
    const email = prompt('Enter user email:');
    const role = prompt('Enter role (superadmin/student):');
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
        instructor: 'Kay Daniels',
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

  return (
    <div className="admin-page">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      
      <div className="admin-header">
        <h1>⚙️ Admin Dashboard</h1>
        <div className="admin-toggle-container">
          <span className="toggle-label">{editingMode ? '🔓 Editing ON' : '🔒 Editing OFF'}</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={editingMode} onChange={toggleEditing} />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      {editingMode && (
        <div className="editing-banner">
          <span>✏️ Editing Mode is <strong>ON</strong> - You can now add, edit, or delete content</span>
        </div>
      )}

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{users.length}</p>
        </div>
        <div className="admin-stat-card">
          <h3>Total Courses</h3>
          <p className="stat-number">{courses.length}</p>
        </div>
        <div className="admin-stat-card">
          <h3>Editing Mode</h3>
          <p className={`stat-number ${editingMode ? 'active' : 'inactive'}`}>
            {editingMode ? '🟢 Active' : '🔴 Inactive'}
          </p>
        </div>
      </div>

      <section className="admin-section">
        <div className="section-header">
          <h2>👥 User Management</h2>
          {editingMode && <button className="add-btn" onClick={addUser}>➕ Add User</button>}
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
                {editingMode && <th>Actions</th>}
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
                  {editingMode && (
                    <td>
                      <button className="delete-btn" onClick={() => deleteUser(user.id)}>🗑️</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="admin-section">
        <div className="section-header">
          <h2>📚 Course Management</h2>
          {editingMode && <button className="add-btn" onClick={addCourse}>➕ Add Course</button>}
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
                {editingMode && <th>Actions</th>}
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
                  {editingMode && (
                    <td>
                      <button className="delete-btn" onClick={() => deleteCourse(course.id)}>🗑️</button>
                    </td>
                  )}
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
            <span>📞 <a href="tel:07018327654">07018327654</a></span>
            <span className="footer-separator">|</span>
            <span>📧 <a href="mailto:ceoccviye@gmail.com">ceoccviye@gmail.com</a></span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Admin;
