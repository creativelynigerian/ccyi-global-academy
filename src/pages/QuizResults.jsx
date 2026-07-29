import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuizResults() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock data for testing - Replace with actual API calls later
  useEffect(() => {
    // Mock courses
    setCourses([
      { id: 1, fullname: 'Introduction to OER', shortname: 'OER101' },
      { id: 2, fullname: 'Digital Literacy', shortname: 'DIG200' },
      { id: 3, fullname: 'Web Development Basics', shortname: 'WEB101' },
    ]);
  }, []);

  const fetchResults = (courseId) => {
    setLoading(true);
    setError('');
    
    // Mock results data
    setTimeout(() => {
      const mockResults = [
        { userid: 1, firstname: 'John', lastname: 'Doe', department: 'Computer Science', score: 85, maxScore: 100, percentage: 85, grade: 'A' },
        { userid: 2, firstname: 'Jane', lastname: 'Smith', department: 'Engineering', score: 72, maxScore: 100, percentage: 72, grade: 'B' },
        { userid: 3, firstname: 'Michael', lastname: 'Johnson', department: 'Mathematics', score: 91, maxScore: 100, percentage: 91, grade: 'A' },
        { userid: 4, firstname: 'Sarah', lastname: 'Williams', department: 'Science', score: 64, maxScore: 100, percentage: 64, grade: 'C' },
        { userid: 5, firstname: 'David', lastname: 'Brown', department: 'Arts', score: 48, maxScore: 100, percentage: 48, grade: 'E' },
      ];
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  };

  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    if (courseId) {
      fetchResults(courseId);
    } else {
      setResults([]);
    }
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

  return (
    <div className="quiz-results-page">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      
      <div className="results-header">
        <h1>📊 Quiz Results</h1>
        <p>View student quiz results and performance</p>
      </div>

      <div className="course-selector">
        <label htmlFor="courseSelect">Select Course:</label>
        <select 
          id="courseSelect"
          value={selectedCourse}
          onChange={handleCourseChange}
          className="course-select"
        >
          <option value="">-- Select a course --</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.fullname || course.shortname}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading results...</p>
        </div>
      )}

      {!loading && selectedCourse && results.length > 0 && (
        <div className="results-table-container">
          <div className="results-summary">
            <p>Total Students: <strong>{results.length}</strong></p>
            <p>Average Score: <strong>
              {Math.round(results.reduce((acc, r) => acc + r.percentage, 0) / results.length)}%
            </strong></p>
          </div>
          
          <div className="table-wrapper">
            <table className="results-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Department</th>
                  <th>Score</th>
                  <th>Max Score</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {results.map((student, index) => (
                  <tr key={student.userid || index}>
                    <td>{index + 1}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.department}</td>
                    <td>{student.score}</td>
                    <td>{student.maxScore}</td>
                    <td>{student.percentage}%</td>
                    <td>
                      <span 
                        className="grade-badge"
                        style={{ 
                          backgroundColor: getGradeColor(student.grade),
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontWeight: 'bold'
                        }}
                      >
                        {student.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!loading && selectedCourse && results.length === 0 && !error && (
        <div className="no-results">
          <p>No quiz results found for this course.</p>
        </div>
      )}

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

export default QuizResults;
