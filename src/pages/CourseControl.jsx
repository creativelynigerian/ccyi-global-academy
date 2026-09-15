import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moodleApi from '../services/moodleApi';

function CourseControl() {
  const [students, setStudents] = useState([]);
  const [moodleCourses, setMoodleCourses] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [editingMode, setEditingMode] = useState(false);
  const [filterCategory, setFilterCategory] = useState('All');

  // Load data from Moodle
  useEffect(() => {
    const fetchData = async () => {
      console.log('🔄 Starting to fetch Moodle data...');
      setLoading(true);
      try {
        // Get all users from Moodle
        console.log('📡 Fetching users...');
        const usersData = await moodleApi.getUsers();
        console.log('✅ Users data received:', usersData);
        
        // Filter out guest and admin users
        const studentsList = usersData.users?.filter(u => 
          u.username !== 'guest' && u.username !== 'admin'
        ) || [];
        console.log('👥 Students list:', studentsList);
        setStudents(studentsList);

        // Get all courses from Moodle
        console.log('📡 Fetching courses...');
        const coursesData = await moodleApi.getCourses();
        console.log('✅ Courses data received:', coursesData);
        
        // Ensure coursesData is an array
        let coursesArray = [];
        if (Array.isArray(coursesData)) {
          coursesArray = coursesData;
        } else if (coursesData && typeof coursesData === 'object') {
          coursesArray = coursesData.courses || [];
        }
        console.log('📚 Courses array:', coursesArray);
        setMoodleCourses(coursesArray);

        // Load saved registrations from localStorage
        const saved = localStorage.getItem('courseRegistrations');
        if (saved) {
          console.log('📋 Loaded registrations from localStorage');
          setRegistrations(JSON.parse(saved));
        }

      } catch (error) {
        console.error('❌ Error fetching Moodle data:', error);
        setError(error.message);
        setModalMessage('⚠️ Failed to load Moodle data. Please check your connection.');
        setShowModal(true);
      }
      setLoading(false);
      console.log('🏁 Fetch complete. Loading:', false);
    };

    fetchData();
  }, []);

  // Save registrations to localStorage
  useEffect(() => {
    localStorage.setItem('courseRegistrations', JSON.stringify(registrations));
  }, [registrations]);

  // Get unique categories for filter
  const categories = ['All', ...new Set(moodleCourses.map(c => c.category || 'Uncategorized'))];

  // Filter courses by category
  const filteredCourses = filterCategory === 'All' 
    ? moodleCourses 
    : moodleCourses.filter(c => (c.category || 'Uncategorized') === filterCategory);

  const handleRegister = () => {
    if (!selectedStudent || !selectedCourse) {
      setModalMessage('⚠️ Please select both a student and a course.');
      setShowModal(true);
      return;
    }

    const student = students.find(s => s.id === parseInt(selectedStudent));
    const course = moodleCourses.find(c => c.id === parseInt(selectedCourse));

    if (!student || !course) {
      setModalMessage('⚠️ Student or course not found.');
      setShowModal(true);
      return;
    }

    // Check if already registered
    const alreadyRegistered = registrations.some(
      r => r.studentId === parseInt(selectedStudent) && r.courseId === parseInt(selectedCourse)
    );

    if (alreadyRegistered) {
      setModalMessage(`⚠️ ${student.firstname} ${student.lastname} is already registered for ${course.fullname}.`);
      setShowModal(true);
      return;
    }

    const newRegistration = {
      id: registrations.length + 1,
      studentId: parseInt(selectedStudent),
      studentName: `${student.firstname} ${student.lastname}`,
      studentEmail: student.email,
      courseId: parseInt(selectedCourse),
      courseTitle: course.fullname,
      courseCategory: course.category || 'Uncategorized',
      registrationDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      progress: 0,
      moodleUrl: `https://ccyiglobalentwebng.com.ng/lms/course/view.php?id=${course.id}`
    };

    setRegistrations([...registrations, newRegistration]);
    
    // Update course enrollment count
    const updatedCourses = moodleCourses.map(c => 
      c.id === parseInt(selectedCourse) ? { ...c, enrolled: (c.enrolled || 0) + 1 } : c
    );
    setMoodleCourses(updatedCourses);

    setModalMessage(`✅ ${student.firstname} ${student.lastname} has been registered for ${course.fullname}!`);
    setShowModal(true);
    setSelectedStudent('');
    setSelectedCourse('');
  };

  const unregisterStudent = (registrationId) => {
    if (window.confirm('Are you sure you want to remove this registration?')) {
      const reg = registrations.find(r => r.id === registrationId);
      if (reg) {
        const updatedCourses = moodleCourses.map(c => 
          c.id === reg.courseId ? { ...c, enrolled: Math.max(0, (c.enrolled || 0) - 1) } : c
        );
        setMoodleCourses(updatedCourses);
      }
      setRegistrations(registrations.filter(r => r.id !== registrationId));
    }
  };

  const updateProgress = (registrationId, newProgress) => {
    setRegistrations(registrations.map(r => 
      r.id === registrationId ? { ...r, progress: Math.min(newProgress, 100) } : r
    ));
  };

  const getStudentProgress = (registrationId) => {
    const reg = registrations.find(r => r.id === registrationId);
    if (!reg) return 0;
    return reg.progress || 0;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Moodle data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>⚠️ Error Loading Data</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="course-control-page">
      <div className="page-header">
        <h2>📚 Course Control</h2>
        <p>Register students for Moodle courses</p>
        <p className="moodle-link">
          🔗 Moodle Platform: <a href="https://ccyiglobalentwebng.com.ng/lms" target="_blank" rel="noopener noreferrer">
            ccyiglobalentwebng.com.ng/lms
          </a>
        </p>
        <p className="stats-info">
          <strong>{students.length}</strong> students | <strong>{moodleCourses.length}</strong> courses | <strong>{registrations.length}</strong> registrations
        </p>
      </div>

      {/* Course Summary */}
      <div className="course-summary">
        <div className="course-summary-header">
          <h4>📋 Available Moodle Courses</h4>
          <div className="category-filter">
            <label>Filter by Category:</label>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="course-tags">
          {filteredCourses.map((course) => (
            <span key={course.id} className="course-tag" title={course.category || 'Uncategorized'}>
              {course.fullname} ({course.enrolled || 0} enrolled)
            </span>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      <div className="registration-form">
        <div className="form-row">
          <div className="form-group">
            <label>Select Student</label>
            <select 
              value={selectedStudent} 
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">-- Select Student --</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.firstname} {student.lastname} ({student.email})
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Select Moodle Course</label>
            <select 
              value={selectedCourse} 
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">-- Select Course --</option>
              {filteredCourses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.fullname} - Enrolled: {course.enrolled || 0}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button className="register-btn" onClick={handleRegister}>
            ✅ Register Student for Course
          </button>
          <button className="toggle-edit-btn" onClick={() => setEditingMode(!editingMode)}>
            {editingMode ? '🔒 Hide Actions' : '✏️ Show Actions'}
          </button>
        </div>
      </div>

      {/* Registrations Table */}
      <div className="registrations-section">
        <h3>📋 Registered Students ({registrations.length})</h3>
        {registrations.length === 0 ? (
          <div className="empty-state">
            <p>No students registered yet. Use the form above to register students for courses.</p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg, index) => (
                  <tr key={reg.id}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{reg.studentName}</strong>
                      <br />
                      <small>{reg.studentEmail}</small>
                    </td>
                    <td>
                      <a href={reg.moodleUrl} target="_blank" rel="noopener noreferrer">
                        {reg.courseTitle}
                      </a>
                    </td>
                    <td>{reg.courseCategory}</td>
                    <td>{reg.registrationDate}</td>
                    <td>
                      <div className="progress-mini">
                        <div className="progress-mini-bar">
                          <div className="progress-mini-fill" style={{ width: `${getStudentProgress(reg.id)}%` }}></div>
                        </div>
                        <span className="progress-mini-text">{getStudentProgress(reg.id)}%</span>
                      </div>
                      {editingMode && (
                        <button 
                          className="update-progress-btn"
                          onClick={() => {
                            const newProgress = prompt('Enter progress (0-100):', getStudentProgress(reg.id));
                            if (newProgress !== null) {
                              updateProgress(reg.id, parseInt(newProgress) || 0);
                            }
                          }}
                        >
                          Update
                        </button>
                      )}
                    </td>
                    <td>
                      <span className={`status-badge ${reg.status.toLowerCase()}`}>
                        {reg.status}
                      </span>
                    </td>
                    <td>
                      {editingMode && (
                        <button className="delete-btn" onClick={() => unregisterStudent(reg.id)}>
                          🗑️ Remove
                        </button>
                      )}
                      <a 
                        href={reg.moodleUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="moodle-link-btn"
                      >
                        Go to Moodle
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button className="modal-btn" onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseControl;
