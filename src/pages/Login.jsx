import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/common/Icon';
import Logo from '../components/common/Logo';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // ... (rest of the logic remains the same)

  const styles = {
    // ... (styles remain the same)
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardGlow}></div>
        
        {/* Logo */}
        <div style={styles.logo}>
          <Logo size="large" variant="full" />
        </div>

        {/* Welcome */}
        <div style={styles.welcome}>
          <h2 style={styles.welcomeTitle}>Welcome Back</h2>
          <p style={styles.welcomeSub}>Sign in to continue your learning journey</p>
        </div>

        {/* Error */}
        {error && (
          <div style={styles.errorBox}>
            <Icon name="AlertCircle" size={18} color="#dc2626" />
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Icon 
                name="Mail" 
                size={18} 
                color="#9ca3af" 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)' 
                }} 
              />
              <input
                type="email"
                name="email"
                placeholder="faculty@ccyiglobalacademy.com"
                value={formData.email}
                onChange={handleChange}
                style={{ ...styles.input, paddingLeft: '40px' }}
                // ... rest of input props
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={{ position: 'relative' }}>
              <Icon 
                name="Lock" 
                size={18} 
                color="#9ca3af" 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)' 
                }} 
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                style={{ ...styles.input, paddingLeft: '40px' }}
                // ... rest of input props
              />
            </div>
          </div>

          <div style={styles.options}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Remember me
            </label>
            <a href="#" style={styles.forgotLink}>
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {})
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(79, 70, 229, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Demo Credentials */}
        <div style={styles.demoBox}>
          <p style={styles.demoTitle}>🔑 Demo Credentials</p>
          <div style={styles.demoContent}>
            <div style={styles.demoItem}>
              <span style={styles.demoLabel}>Email: </span>
              <span style={styles.demoValue}>faculty@ccyiglobalacademy.com</span>
            </div>
            <div style={styles.demoItem}>
              <span style={styles.demoLabel}>Password: </span>
              <span style={styles.demoValue}>password123</span>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          © 2026 CCYI Global Academy. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;