import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation - replace with real authentication later
    if (email === 'faculty@covenant.edu' && password === 'password123') {
      // Store user info in localStorage (simulating a session)
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      navigate('/');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Covenant University</h1>
          <p>Faculty Onboarding Portal</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="faculty@covenant.edu"
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
          <p>Default: faculty@covenant.edu / password123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
