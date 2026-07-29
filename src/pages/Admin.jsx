import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole') || 'student';
  const userName = localStorage.getItem('userName') || 'User';
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingMode, setEditingMode] = useState(false);
  
  // ... existing state declarations ...
  const [modules, setModules] = useState(() => {
    const saved = localStorage.getItem('trainingModules');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Moodle LMS', icon: '📖', status: 'not-started', progress: 0 },
      { id: 2, title: 'Turnitin', icon: '📋', status: 'not-started', progress: 0 },
      { id: 3, title: 'Office 365', icon: '📧', status: 'not-started', progress: 0 },
      { id: 4, title: 'Internet Login', icon: '🌍', status: 'not-started', progress: 0 },
      { id: 5, title: 'Grammarly', icon: '✏️', status: 'not-started', progress: 0 },
      { id: 6, title: 'CU Portal', icon: '🏫', status: 'not-started', progress: 0 },
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

  // AI Course Creator State
  const [aiCourseInput, setAiCourseInput] = useState('');
  const [aiCourseLevel, setAiCourseLevel] = useState('secondary');
  const [aiCourseSubject, setAiCourseSubject] = useState('');
  const [aiGeneratedCourses, setAiGeneratedCourses] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStandard, setSelectedStandard] = useState('CCMAS');

  // Mock quiz results data
  const [quizResults, setQuizResults] = useState([
    { id: 1, student: 'John Doe', course: 'OER101', score: 85, maxScore: 100, percentage: 85, grade: 'A', date: '2024-06-15' },
    { id: 2, student: 'Jane Smith', course: 'OER101', score: 72, maxScore: 100, percentage: 72, grade: 'B', date: '2024-06-15' },
    { id: 3, student: 'Michael Johnson', course: 'DIG200', score: 91, maxScore: 100, percentage: 91, grade: 'A', date: '2024-06-16' },
    { id: 4, student: 'Sarah Williams', course: 'DIG200', score: 64, maxScore: 100, percentage: 64, grade: 'C', date: '2024-06-16' },
    { id: 5, student: 'David Brown', course: 'OER101', score: 48, maxScore: 100, percentage: 48, grade: 'E', date: '2024-06-15' },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showReportCard, setShowReportCard] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [csvData, setCsvData] = useState('');

  const isSuperAdmin = userRole === 'superadmin';
  const isManager = userRole === 'manager';
  const isStudent = userRole === 'student';

  // Subject options based on standard
  const getSubjects = () => {
    const subjects = {
      'CCMAS': ['English', 'Mathematics', 'Science', 'Social Studies', 'Creative Arts', 'Technology'],
      'WAEC': ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Geography', 'History'],
      'JAMB': ['Use of English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Literature', 'Government']
    };
    return subjects[selectedStandard] || subjects['CCMAS'];
  };

  const getLevels = () => {
    return ['primary', 'secondary', 'tertiary'];
  };

  // Generate AI Course
  const generateAICourse = () => {
    if (!aiCourseSubject) {
      alert('Please select a subject.');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation with realistic course content
    setTimeout(() => {
      const courseTemplates = {
        'Mathematics': {
          title: `Advanced ${aiCourseSubject} (${selectedStandard})`,
          description: `This course covers ${aiCourseSubject} concepts aligned with ${selectedStandard} standards for ${aiCourseLevel} education.`,
          objectives: [
            'Understand core principles and theories',
            'Apply concepts to real-world scenarios',
            'Develop critical thinking skills',
            'Prepare for standardized assessments'
          ],
          topics: ['Introduction', 'Core Concepts', 'Advanced Topics', 'Practical Applications', 'Review and Assessment'],
          duration: '12 weeks',
          level: aiCourseLevel,
          standard: selectedStandard
        },
        'English': {
          title: `Comprehensive ${aiCourseSubject} (${selectedStandard})`,
          description: `Master ${aiCourseSubject} skills aligned with ${selectedStandard} curriculum standards for ${aiCourseLevel} education.`,
          objectives: [
            'Develop strong communication skills',
            'Enhance reading comprehension',
            'Master writing techniques',
            'Prepare for standardized exams'
          ],
          topics: ['Grammar', 'Comprehension', 'Writing Skills', 'Literature', 'Exam Preparation'],
          duration: '12 weeks',
          level: aiCourseLevel,
          standard: selectedStandard
        },
        'Science': {
          title: `Integrated ${aiCourseSubject} (${selectedStandard})`,
          description: `Explore ${aiCourseSubject} concepts aligned with ${selectedStandard} standards for ${aiCourseLevel} education.`,
          objectives: [
            'Understand scientific methods',
            'Apply scientific principles',
            'Develop analytical skills',
            'Prepare for practical assessments'
          ],
          topics: ['Scientific Method', 'Core Concepts', 'Experiments', 'Applications', 'Review'],
          duration: '12 weeks',
          level: aiCourseLevel,
          standard: selectedStandard
        }
      };

      const template = courseTemplates[aiCourseSubject] || courseTemplates['Mathematics'];
      
      const newCourse = {
        id: Date.now(),
        ...template,
        subject: aiCourseSubject,
        generatedAt: new Date().toISOString(),
        status: 'draft'
      };

      setAiGeneratedCourses([newCourse, ...aiGeneratedCourses]);
      setIsGenerating(false);
      alert(`✅ Course "${newCourse.title}" generated successfully!`);
    }, 2000);
  };

  // Save AI generated course to courses list
  const saveAICourse = (course) => {
    const newCourse = {
      id: courses.length + 1,
      title: course.title,
      code: `${course.subject.substring(0, 3).toUpperCase()}${Math.floor(100 + Math.random() * 900)}`,
      instructor: 'AI Generated',
      enrolled: 0
    };
    setCourses([...courses, newCourse]);
    setAiGeneratedCourses(aiGeneratedCourses.filter(c => c.id !== course.id));
    alert(`✅ Course "${course.title}" added to your courses!`);
  };

  // Delete AI generated course
  const deleteAICourse = (id) => {
    setAiGeneratedCourses(aiGeneratedCourses.filter(c => c.id !== id));
  };

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

  const students = [...new Set(quizResults.map(r => r.student))];
  
  const getStudentResults = (studentName) => {
    return quizResults.filter(r => r.student === studentName);
  };

  const getStudentAverage = (studentName) => {
    const results = getStudentResults(studentName);
    if (results.length === 0) return 0;
    const total = results.reduce((sum, r) => sum + r.percentage, 0);
    return Math.round(total / results.length);
  };

  const getOverallGrade = (average) => {
    if (average >= 80) return { grade: 'A', color: '#10b981' };
    if (average >= 70) return { grade: 'B', color: '#3b82f6' };
    if (average >= 60) return { grade: 'C', color: '#f59e0b' };
    if (average >= 50) return { grade: 'D', color: '#f97316' };
    if (average >= 40) return { grade: 'E', color: '#ef4444' };
    return { grade: 'F', color: '#dc2626' };
  };

  const viewReportCard = (studentName) => {
    setSelectedStudent(studentName);
    setShowReportCard(true);
  };

  const closeReportCard = () => {
    setShowReportCard(false);
    setSelectedStudent(null);
  };

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A': return '#10b981';
      case 'B': return '#3b82f6';
      case 'C': return '#f59e0b';
      case 'D': return '#f97316';
      case 'E': return '#ef4444';
      case 'F': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const renderTabs = () => {
    const tabs = [
      { id: 'dashboard', label: 'Dashboard', icon: '📊' },
      { id: 'users', label: 'Users', icon: '👥' },
      { id: 'courses', label: 'Courses', icon: '📚' },
      { id: 'modules', label: 'Modules', icon: '📋' },
      { id: 'results', label: 'Quiz Results', icon: '📈' },
      { id: 'ai-courses', label: 'AI Course Creator', icon: '🤖' },
    ];

    return (
      <div className="admin-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>
    );
  };

  // Render AI Course Creator Tab
  const renderAICourseCreator = () => {
    return (
      <div className="admin-section">
        <div className="section-header">
          <h2>🤖 AI Course Creator</h2>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Generate courses aligned with CCMAS, WAEC, and JAMB standards
          </p>
        </div>

        <div className="ai-course-creator">
          <div className="ai-course-form">
            <div className="form-row">
              <div className="form-group">
                <label>Standard</label>
                <select 
                  value={selectedStandard} 
                  onChange={(e) => setSelectedStandard(e.target.value)}
                  className="ai-select"
                >
                  <option value="CCMAS">CCMAS (Basic Education)</option>
                  <option value="WAEC">WAEC (Senior Secondary)</option>
                  <option value="JAMB">JAMB (Tertiary Entrance)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Level</label>
                <select 
                  value={aiCourseLevel} 
                  onChange={(e) => setAiCourseLevel(e.target.value)}
                  className="ai-select"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="tertiary">Tertiary</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Subject</label>
                <select 
                  value={aiCourseSubject} 
                  onChange={(e) => setAiCourseSubject(e.target.value)}
                  className="ai-select"
                >
                  <option value="">Select a subject</option>
                  {getSubjects().map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>&nbsp;</label>
                <button 
                  className="generate-btn"
                  onClick={generateAICourse}
                  disabled={isGenerating || !aiCourseSubject}
                >
                  {isGenerating ? '⏳ Generating...' : '🚀 Generate Course'}
                </button>
              </div>
            </div>
          </div>

          {/* Generated Courses */}
          {aiGeneratedCourses.length > 0 && (
            <div className="generated-courses">
              <h3>Generated Courses</h3>
              <div className="generated-courses-grid">
                {aiGeneratedCourses.map((course) => (
                  <div key={course.id} className="generated-course-card">
                    <div className="course-header-info">
                      <h4>{course.title}</h4>
                      <span className={`level-badge ${course.level}`}>{course.level}</span>
                      <span className="standard-badge">{course.standard}</span>
                    </div>
                    <p className="course-description">{course.description}</p>
                    <div className="course-details">
                      <div className="detail-item">
                        <strong>Duration:</strong> {course.duration}
                      </div>
                      <div className="detail-item">
                        <strong>Topics:</strong> {course.topics.join(', ')}
                      </div>
                    </div>
                    <div className="course-objectives">
                      <strong>Objectives:</strong>
                      <ul>
                        {course.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="course-actions">
                      <button 
                        className="save-course-btn"
                        onClick={() => saveAICourse(course)}
                      >
                        ✅ Add to Courses
                      </button>
                      <button 
                        className="delete-course-btn"
                        onClick={() => deleteAICourse(course.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render Quiz Results Tab
  const renderQuizResults = () => {
    return (
      <div className="admin-section">
        <div className="section-header">
          <h2>📈 Quiz Results</h2>
          <div className="section-actions">
            <button className="section-action-btn" onClick={() => alert('Export results coming soon...')}>
              📤 Export Results
            </button>
          </div>
        </div>

        <div className="results-overview">
          <div className="result-stat">
            <h4>Total Quizzes</h4>
            <p>{quizResults.length}</p>
          </div>
          <div className="result-stat">
            <h4>Average Score</h4>
            <p>{Math.round(quizResults.reduce((sum, r) => sum + r.percentage, 0) / quizResults.length)}%</p>
          </div>
          <div className="result-stat">
            <h4>Students</h4>
            <p>{students.length}</p>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student</th>
                <th>Course</th>
                <th>Score</th>
                <th>Max Score</th>
                <th>Percentage</th>
                <th>Grade</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizResults.map((result, index) => (
                <tr key={result.id}>
                  <td>{index + 1}</td>
                  <td>{result.student}</td>
                  <td>{result.course}</td>
                  <td>{result.score}</td>
                  <td>{result.maxScore}</td>
                  <td>{result.percentage}%</td>
                  <td>
                    <span className="grade-badge" style={{ 
                      backgroundColor: getGradeColor(result.grade),
                      color: 'white',
                      padding: '2px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {result.grade}
                    </span>
                  </td>
                  <td>{result.date}</td>
                  <td>
                    <button 
                      className="view-btn-small"
                      onClick={() => viewReportCard(result.student)}
                    >
                      📄 Report Card
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Render Report Card Modal
  const renderReportCard = () => {
    if (!showReportCard || !selectedStudent) return null;

    const studentResults = getStudentResults(selectedStudent);
    const average = getStudentAverage(selectedStudent);
    const overallGrade = getOverallGrade(average);

    return (
      <div className="report-card-overlay">
        <div className="report-card-modal">
          <button className="close-modal-btn" onClick={closeReportCard}>✕</button>
          
          <div className="report-card-header">
            <h2>📄 Student Report Card</h2>
            <p className="student-name">{selectedStudent}</p>
            <p className="student-id">Student ID: {Math.floor(10000 + Math.random() * 90000)}</p>
            <p className="report-date">Generated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="report-card-summary">
            <div className="summary-item">
              <h4>Average Score</h4>
              <p className="value">{average}%</p>
            </div>
            <div className="summary-item">
              <h4>Overall Grade</h4>
              <p className="value" style={{ color: overallGrade.color }}>{overallGrade.grade}</p>
            </div>
            <div className="summary-item">
              <h4>Courses Completed</h4>
              <p className="value">{studentResults.length}</p>
            </div>
          </div>

          <div className="report-card-courses">
            <h3>Course Details</h3>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Score</th>
                  <th>Max Score</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {studentResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.course}</td>
                    <td>{result.score}</td>
                    <td>{result.maxScore}</td>
                    <td>{result.percentage}%</td>
                    <td>
                      <span className="grade-badge" style={{ 
                        backgroundColor: getGradeColor(result.grade),
                        color: 'white',
                        padding: '2px 10px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {result.grade}
                      </span>
                    </td>
                    <td>{result.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="report-card-footer">
            <button className="print-btn" onClick={() => window.print()}>
              🖨️ Print Report Card
            </button>
          </div>
        </div>
      </div>
    );
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

        {renderTabs()}

        {activeTab === 'dashboard' && (
          <>
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
                <h3>Quiz Results</h3>
                <p className="stat-number">{quizResults.length}</p>
              </div>
            </div>

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
          </>
        )}

        {activeTab === 'users' && (
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
        )}

        {activeTab === 'courses' && (
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
        )}

        {activeTab === 'modules' && (
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
        )}

        {activeTab === 'results' && renderQuizResults()}
        {activeTab === 'ai-courses' && renderAICourseCreator()}

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

        {renderReportCard()}

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

        {renderTabs()}

        {activeTab === 'dashboard' && (
          <>
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
                <h3>Quiz Results</h3>
                <p className="stat-number">{quizResults.length}</p>
              </div>
            </div>

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
                  <button className="edit-btn" onClick={addCourse}>
                    <i className="fas fa-plus-circle"></i> Add Course
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 'users' && (
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
        )}

        {activeTab === 'courses' && (
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
        )}

        {activeTab === 'modules' && (
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
        )}

        {activeTab === 'results' && renderQuizResults()}
        {activeTab === 'ai-courses' && renderAICourseCreator()}

        {renderReportCard()}

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

  // ========================
  // STUDENT VIEW
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
