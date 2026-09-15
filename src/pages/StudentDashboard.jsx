import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'Student';
  const userDepartment = localStorage.getItem('userDepartment') || '';
  const userLevel = localStorage.getItem('userLevel') || '';
  const userUsername = localStorage.getItem('userUsername') || '';
  const userRole = localStorage.getItem('userRole') || 'student';

  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const [courses] = useState([
    { id: 1, title: 'Microsoft Word', icon: '📄', progress: 75, status: 'In Progress' },
    { id: 2, title: 'Microsoft PowerPoint', icon: '📽️', progress: 50, status: 'In Progress' },
    { id: 3, title: 'Microsoft Excel', icon: '📊', progress: 30, status: 'In Progress' },
    { id: 4, title: 'Digital Safety & Cyber Hygiene', icon: '🛡️', progress: 0, status: 'Not Started' },
    { id: 5, title: 'Windows & File Management', icon: '💻', progress: 0, status: 'Not Started' },
  ]);

  const [recentActivity] = useState([
    { id: 1, activity: 'Completed Module 2 in Microsoft Word', date: '2026-08-14' },
    { id: 2, activity: 'Started Microsoft PowerPoint', date: '2026-08-13' },
    { id: 3, activity: 'Submitted Assignment in Digital Safety', date: '2026-08-12' },
  ]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* --- Header --- */}
      <header style={{ 
        background: 'linear-gradient(135deg, #0a1628, #1a2a4a)', 
        color: 'white', padding: '12px 32px', 
        position: 'sticky', top: 0, zIndex: 100, 
        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>🏛️ CCYI GLOBAL ACADEMY PORTAL</h1>
          <span style={{ fontSize: '12px', color: '#f5b400', display: 'block', marginTop: '-2px' }}>Student Learning Platform</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px' }}>
            👤 {userName}
          </span>
          <button onClick={handleLogout} style={{
            background: 'transparent', border: 'none', color: '#fca5a5', cursor: 'pointer', fontSize: '14px', fontWeight: 500
          }}>Logout</button>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 32px' }}>
        
        {/* Welcome Section */}
        <section style={{ 
          background: 'white', padding: '24px 28px', 
          borderRadius: '16px', border: '1px solid #e8ecf0', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0a1628', margin: '0 0 4px 0' }}>
                Welcome, {userName} 👋
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>Continue your learning journey</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
              <span style={{ background: 'rgba(255,255,255,0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', color: '#0a1628', background: '#e0f2fe' }}>
                📚 {userDepartment || 'Student'}
              </span>
              <span style={{ padding: '4px 14px', borderRadius: '20px', fontSize: '13px', color: '#0a1628', background: '#f3e8ff' }}>
                📊 Level: {userLevel || 'N/A'}
              </span>
              <span style={{ padding: '4px 14px', borderRadius: '20px', fontSize: '13px', color: '#0a1628', background: '#dcfce7' }}>
                👤 {userUsername}
              </span>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section style={{ marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e8ecf0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '28px' }}>📚</div>
              <div><h3 style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Enrolled</h3><p style={{ fontSize: '28px', fontWeight: 700, color: '#0a1628', margin: 0 }}>{courses.length}</p></div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e8ecf0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '28px' }}>✅</div>
              <div><h3 style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Completed</h3><p style={{ fontSize: '28px', fontWeight: 700, color: '#0a1628', margin: 0 }}>{courses.filter(c => c.status === 'Completed').length}</p></div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e8ecf0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '28px' }}>📈</div>
              <div><h3 style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>In Progress</h3><p style={{ fontSize: '28px', fontWeight: 700, color: '#0a1628', margin: 0 }}>{courses.filter(c => c.status === 'In Progress').length}</p></div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e8ecf0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '28px' }}>🏆</div>
              <div><h3 style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Overall</h3><p style={{ fontSize: '28px', fontWeight: 700, color: '#0a1628', margin: 0 }}>{Math.round(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length)}%</p></div>
            </div>
          </div>
        </section>

        {/* My Courses */}
        <section style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a1628', marginBottom: '16px' }}>📖 My Courses</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {courses.map((course) => (
              <div key={course.id} style={{ 
                background: 'white', padding: '20px', borderRadius: '12px', 
                border: '1px solid #e8ecf0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', 
                display: 'flex', flexDirection: 'column', transition: 'all 0.2s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '32px' }}>{course.icon}</div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#0a1628', margin: 0 }}>{course.title}</h4>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ flex: 1, height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: '#f5b400', borderRadius: '4px', width: `${course.progress}%` }}></div>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#0a1628' }}>{course.progress}%</span>
                </div>

                <span style={{ 
                  display: 'inline-block', padding: '2px 12px', borderRadius: '12px', 
                  fontSize: '12px', fontWeight: 600, alignSelf: 'flex-start', marginBottom: '12px',
                  background: course.status === 'Completed' ? '#d1fae5' : course.status === 'In Progress' ? '#fef9e7' : '#f3f4f6',
                  color: course.status === 'Completed' ? '#065f46' : course.status === 'In Progress' ? '#7a5500' : '#6b7280'
                }}>
                  {course.status}
                </span>

                <button style={{
                  marginTop: 'auto', width: '100%', padding: '10px', background: '#0a1628',
                  color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, 
                  fontSize: '14px', cursor: 'pointer'
                }}>Continue Learning →</button>
              </div>
            ))}
          </div>
        </section>

        {/* --- Certificate Section --- */}
        <section style={{ background: 'white', padding: '24px 28px', borderRadius: '16px', border: '1px solid #e8ecf0', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a1628', marginBottom: '16px' }}>🎓 Your Certificate</h3>
          {(() => {
            const total = courses.length;
            const done = courses.filter(c => c.progress === 100).length;
            if (total > 0 && done === total) {
              return (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '10px' }}>🏆</div>
                  <h4 style={{ color: '#10b981', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Congratulations, {userName}!</h4>
                  <p style={{ color: '#6b7280', marginBottom: '16px' }}>You have completed all your registered courses!</p>
                  <button onClick={() => setShowCertificateModal(true)} style={{ background: '#f5b400', color: '#0a1628', border: 'none', padding: '12px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}>🎓 Generate Your Certificate</button>
                </div>
              );
            } else {
              return (
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#f9fafb', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🔒</span>
                    <div><p style={{ fontWeight: 600, color: '#374151', margin: 0 }}>Certificate Locked</p><p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Complete <strong>{total - done}</strong> more course(s).</p></div>
                  </div>
                  <div style={{ fontWeight: 'bold', color: '#9ca3af' }}>{done}/{total}</div>
                </div>
              );
            }
          })()}
        </section>

        {/* Recent Activity */}
        <section style={{ background: 'white', padding: '24px 28px', borderRadius: '16px', border: '1px solid #e8ecf0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0a1628', marginBottom: '16px' }}>📋 Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {recentActivity.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #e8ecf0' }}>
                <span style={{ fontSize: '18px' }}>📌</span>
                <span style={{ flex: 1 }}>{item.activity}</span>
                <span style={{ color: '#6b7280', fontSize: '13px' }}>{item.date}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer style={{ background: '#0a1628', color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '16px 24px', marginTop: 'auto' }}>
        <div>
          <p style={{ margin: '4px 0', fontSize: '14px' }}>Powered by <strong style={{ color: 'white' }}>CCYI Global Enterprise</strong></p>
          <p style={{ margin: '4px 0', fontSize: '14px' }}>
            <span>📞 <a href="tel:07018327654" style={{ color: '#f5b400', textDecoration: 'none' }}>07018327654</a></span>
            <span style={{ color: '#4b6a8a', margin: '0 8px' }}>|</span>
            <span>📧 <a href="mailto:ceoccyige@gmail.com" style={{ color: '#f5b400', textDecoration: 'none' }}>ceoccyige@gmail.com</a></span>
          </p>
        </div>
      </footer>

      {/* Certificate Modal */}
      {showCertificateModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', maxWidth: '500px', width: '90%', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎓</div>
            <h2 style={{ fontSize: '24px', color: '#0a1628', margin: '0 0 8px 0' }}>Certificate of Completion</h2>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>This certifies that <strong>{userName}</strong> has successfully completed all required courses.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button onClick={() => window.print()} style={{ padding: '12px', background: '#0a1628', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>🖨️ Download / Print Certificate</button>
              <button onClick={() => setShowCertificateModal(false)} style={{ padding: '12px', background: '#e5e7eb', color: '#374151', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;