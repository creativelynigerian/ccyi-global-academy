import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // If already logged in, redirect to the right dashboard
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role === 'superadmin' || role === 'manager') {
      navigate('/admin', { replace: true });
    } else if (role === 'student') {
      navigate('/student', { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // --- DEMO LOGIC ---
    if (email === 'admin@ccyiglobal.com' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'superadmin');
      localStorage.setItem('userName', 'Admin User');
      navigate('/admin');
    } else if (email === 'student1@ccyiglobal.com' && password === 'student123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'student');
      localStorage.setItem('userName', 'Student 1');
      localStorage.setItem('userUsername', 'student1');
      localStorage.setItem('userLevel', '100');
      localStorage.setItem('userDepartment', 'Computer Science');
      navigate('/student');
    } else if (email === 'student2@ccyiglobal.com' && password === 'student123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'student');
      localStorage.setItem('userName', 'Student 2');
      localStorage.setItem('userUsername', 'student2');
      localStorage.setItem('userLevel', '200');
      localStorage.setItem('userDepartment', 'Business Admin');
      navigate('/student');
    } else if (email === 'student3@ccyiglobal.com' && password === 'student123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'student');
      localStorage.setItem('userName', 'Student 3');
      localStorage.setItem('userUsername', 'student3');
      localStorage.setItem('userLevel', '300');
      localStorage.setItem('userDepartment', 'Engineering');
      navigate('/student');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6a 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
      padding: 0
    }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
        <div style={{
          background: 'white',
          padding: '40px 36px',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          textAlign: 'center'
        }}>

          <div style={{ marginBottom: '24px' }}>
            <h1 style={{
              fontSize: '28px', fontWeight: '700', color: '#0a1628',
              margin: '0 0 8px 0', letterSpacing: '-0.5px'
            }}>
              🏛️ CCYI Global Academy
            </h1>
            <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>
              Student Learning and Registration Platform
            </p>
          </div>

          {error && (
            <div style={{
              background: '#fee2e2', color: '#dc2626', padding: '10px',
              borderRadius: '8px', fontSize: '14px', marginBottom: '16px',
              border: '1px solid #fecaca'
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%', padding: '14px 16px',
                  border: '1px solid #d1d5db', borderRadius: '10px',
                  fontSize: '15px', outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.2s', color: '#1a1a2e'
                }}
                onFocus={(e) => e.target.style.borderColor = '#f5b400'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%', padding: '14px 16px',
                  border: '1px solid #d1d5db', borderRadius: '10px',
                  fontSize: '15px', outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.2s', color: '#1a1a2e'
                }}
                onFocus={(e) => e.target.style.borderColor = '#f5b400'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%', padding: '14px', background: '#f5b400',
                color: '#0a1628', border: 'none', borderRadius: '10px',
                fontWeight: '700', fontSize: '16px', cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(245, 180, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0px)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Sign In
            </button>
          </form>

          {/* Demo accounts: only visible during local dev, hidden on production */}
          {import.meta.env.DEV && (
            <div style={{ marginTop: '28px', textAlign: 'left', fontSize: '13px', color: '#4b5563' }}>
              <p style={{ margin: '0 0 12px 0', color: '#0a1628', fontSize: '15px', fontWeight: '600' }}>
                Demo Accounts (dev only):
              </p>
              <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <span style={{ fontSize: '18px' }}>🔑</span>
                <span><strong>Admin:</strong> admin@ccyiglobal.com / admin123</span>
              </div>
              <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <span style={{ fontSize: '18px' }}>🎓</span>
                <span><strong>Student 1:</strong> student1@ccyiglobal.com / student123</span>
              </div>
              <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <span style={{ fontSize: '18px' }}>🎓</span>
                <span><strong>Student 2:</strong> student2@ccyiglobal.com / student123</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <span style={{ fontSize: '18px' }}>🎓</span>
                <span><strong>Student 3:</strong> student3@ccyiglobal.com / student123</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Login;