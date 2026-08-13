import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    { email: 'admin@ccyiglobal.com', password: 'admin123', role: 'superadmin', name: 'Super Admin' },
    { email: 'student@ccyiglobal.com', password: 'student123', role: 'student', name: 'Student' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userName', user.name);
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h1>🏛️ CCYI GLOBAL ACADEMY PORTAL</h1>
          <p>Student Learning and Registration Platform</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-btn">Sign In</button>
          </form>
          <p className="demo-credentials">Demo: admin@ccyiglobal.com / admin123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
