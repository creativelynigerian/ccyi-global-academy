import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    { email: 'admin@ccyiglobal.com', password: 'admin123', role: 'superadmin', name: 'Super Admin' },
    { email: 'manager@ccyiglobal.com', password: 'manager123', role: 'manager', name: 'Manager' },
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
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>CCYI Global Academy</h1>
            <p>Learning Platform</p>
          </div>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <button type="submit" className="login-btn">Sign In</button>
          </form>
          
          <div className="login-footer">
            <p><strong>Demo Accounts:</strong></p>
            <p>admin@ccyiglobal.com / admin123 (Super Admin)</p>
            <p>manager@ccyiglobal.com / manager123 (Manager)</p>
            <p>student@ccyiglobal.com / student123 (Student)</p>
          </div>
        </div>
      </div>
      
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

export default Login;
