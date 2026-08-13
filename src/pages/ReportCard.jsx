import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moodleApi from '../services/moodleApi';

function ReportCard() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedGradeData, setSelectedGradeData] = useState(null);

  // Load all data from Moodle
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // Get all users
        const usersData = await moodleApi.getUsers();
        const studentsList = usersData.users?.filter(u => 
          u.username !== 'guest' && u.username !== 'admin'
        ) || [];
        setStudents(studentsList);

        // Get all courses
        const coursesData = await moodleApi.getCourses();
        setCourses(coursesData);

        // Fetch grades for each student in each course
        const allGrades = {};
        for (const student of studentsList) {
          allGrades[student.id] = {};
          for (const course of coursesData) {
            try {
              const gradeData = await moodleApi.getUserGrades(course.id, student.id);
              allGrades[student.id][course.id] = gradeData;
            } catch (error) {
              console.error(`Error fetching grades for student ${student.id} in course ${course.id}:`, error);
            }
          }
        }
        setGrades(allGrades);
      } catch (error) {
        console.error('Error fetching Moodle data:', error);
      }
      setLoading(false);
    };

    fetchAllData();
  }, []);

  // Calculate overall average for a student across all courses
  const calculateOverallAverage = (studentId) => {
    const studentGrades = grades[studentId] || {};
    let total = 0;
    let count = 0;
    
    for (const courseId in studentGrades) {
      const courseData = studentGrades[courseId];
      if (courseData?.usergrades?.[0]?.gradeitems) {
        const gradeItems = courseData.usergrades[0].gradeitems;
        const courseTotal = gradeItems.reduce((sum, item) => {
          if (item.graderaw !== null && item.graderaw !== undefined) {
            return sum + item.graderaw;
          }
          return sum;
        }, 0);
        const courseMax = gradeItems.reduce((sum, item) => {
          if (item.grademax) {
            return sum + item.grademax;
          }
          return sum;
        }, 0);
        if (courseMax > 0) {
          total += (courseTotal / courseMax) * 100;
          count++;
        }
      }
    }
    return count > 0 ? Math.round(total / count) : 0;
  };

  // Calculate letter grade
  const getLetterGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A', color: '#10b981', label: 'Excellent' };
    if (percentage >= 80) return { grade: 'B', color: '#3b82f6', label: 'Very Good' };
    if (percentage >= 70) return { grade: 'C', color: '#f59e0b', label: 'Good' };
    if (percentage >= 60) return { grade: 'D', color: '#f97316', label: 'Satisfactory' };
    if (percentage >= 50) return { grade: 'E', color: '#ef4444', label: 'Needs Improvement' };
    return { grade: 'F', color: '#dc2626', label: 'Fail' };
  };

  // Get grades for a specific student in a specific course
  const getStudentCourseGrades = (studentId, courseId) => {
    const courseData = grades[studentId]?.[courseId];
    if (!courseData?.usergrades?.[0]?.gradeitems) return [];
    return courseData.usergrades[0].gradeitems.filter(item => item.itemtype !== 'course');
  };

  // Calculate course total
  const calculateCourseTotal = (studentId, courseId) => {
    const items = getStudentCourseGrades(studentId, courseId);
    let total = 0;
    let maxTotal = 0;
    items.forEach(item => {
      if (item.graderaw !== null && item.graderaw !== undefined) {
        total += item.graderaw;
        maxTotal += item.grademax || 100;
      }
    });
    return { total, maxTotal, percentage: maxTotal > 0 ? Math.round((total / maxTotal) * 100) : 0 };
  };

  const handleViewDetails = (studentId, courseId) => {
    const items = getStudentCourseGrades(studentId, courseId);
    const course = courses.find(c => c.id === courseId);
    setSelectedGradeData({
      student: students.find(s => s.id === studentId),
      course: course,
      items: items
    });
    setShowDetail(true);
  };

  const renderGradeBadge = (grade) => {
    const colors = {
      'A': '#10b981', 'B': '#3b82f6', 'C': '#f59e0b',
      'D': '#f97316', 'E': '#ef4444', 'F': '#dc2626'
    };
    return (
      <span className="grade-badge" style={{ backgroundColor: colors[grade] || '#6b7280' }}>
        {grade}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Moodle data...</p>
      </div>
    );
  }

  return (
    <div className="report-card-page">
      <div className="page-header">
        <h2>📊 Student Report Card</h2>
        <p>Real-time student performance from Moodle</p>
        <p className="moodle-link">
          🔗 <a href="https://ccyiglobalentwebng.com.ng/lms" target="_blank" rel="noopener noreferrer">
            ccyiglobalentwebng.com.ng/lms
          </a>
        </p>
      </div>

      {/* Student Selector */}
      <div className="report-card-selector">
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
      </div>

      {selectedStudent && (
        <div className="report-card-container">
          {students.filter(s => s.id === parseInt(selectedStudent)).map((student) => {
            const avg = calculateOverallAverage(student.id);
            const overallGrade = getLetterGrade(avg);
            return (
              <div key={student.id}>
                <div className="student-info-header">
                  <div className="student-details">
                    <h3>{student.firstname} {student.lastname}</h3>
                    <p><strong>Email:</strong> {student.email}</p>
                    <p><strong>Department:</strong> {student.department || 'N/A'}</p>
                    <p><strong>Username:</strong> {student.username}</p>
                  </div>
                  <div className="overall-performance">
                    <div className="overall-score">
                      <span className="score-label">Overall Average</span>
                      <span className="score-value">{avg}%</span>
                    </div>
                    <div className="overall-grade">
                      <span className="grade-label">Overall Grade</span>
                      <span className="grade-value" style={{ color: overallGrade.color }}>
                        {overallGrade.grade}
                        <small> - {overallGrade.label}</small>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Course Results */}
                <div className="course-results">
                  <h4>Course Results</h4>
                  <div className="admin-table-wrapper">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Course</th>
                          <th>Items</th>
                          <th>Total</th>
                          <th>Percentage</th>
                          <th>Grade</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course) => {
                          const courseTotal = calculateCourseTotal(student.id, course.id);
                          const grade = getLetterGrade(courseTotal.percentage);
                          const items = getStudentCourseGrades(student.id, course.id);
                          return (
                            <tr key={course.id}>
                              <td><strong>{course.fullname}</strong></td>
                              <td>{items.filter(i => i.graderaw !== null).length} / {items.length}</td>
                              <td>{courseTotal.total.toFixed(1)}</td>
                              <td>{courseTotal.percentage}%</td>
                              <td>{renderGradeBadge(grade.grade)}</td>
                              <td>
                                <button 
                                  className="view-detail-btn"
                                  onClick={() => handleViewDetails(student.id, course.id)}
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      {showDetail && selectedGradeData && (
        <div className="modal-overlay">
          <div className="modal-content modal-large">
            <h3>{selectedGradeData.course?.fullname}</h3>
            <p><strong>{selectedGradeData.student?.firstname} {selectedGradeData.student?.lastname}</strong></p>
            <div className="course-detail-grid">
              <div className="detail-section">
                <h4>📝 Grade Items</h4>
                {selectedGradeData.items.map((item, index) => (
                  <div key={index} className="detail-item">
                    <span>{item.itemname || 'Unnamed'}</span>
                    <span>
                      {item.graderaw !== null ? `${item.graderaw.toFixed(1)} / ${item.grademax}` : 'Not graded'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button className="modal-btn" onClick={() => setShowDetail(false)}>Close</button>
          </div>
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

export default ReportCard;
