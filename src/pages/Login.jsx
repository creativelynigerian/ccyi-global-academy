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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  // ✅ Define handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data
      localStorage.setItem('user', JSON.stringify({ 
        email: formData.email, 
        name: 'Faculty Member' 
      }));
      localStorage.setItem('isAuthenticated', 'true');

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      padding: '20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    },
    card: {
      width: '100%',
      maxWidth: '440px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)',
      padding: '48px 40px',
      position: 'relative',
      overflow: 'hidden'
    },
    cardGlow: {
      position: 'absolute',
      top: '-50%',
      right: '-50%',
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
      pointerEvents: 'none'
    },
    logo: {
      textAlign: 'center',
      marginBottom: '32px',
      position: 'relative'
    },
    welcome: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    welcomeTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#0f0c29',
      margin: 0
    },
    welcomeSub: {
      fontSize: '14px',
      color: '#9ca3af',
      margin: '4px 0 0 0'
    },
    errorBox: {
      background: '#fef2f2',
      border: '1px solid #fca5a5',
      color: '#dc2626',
      padding: '12px 16px',
      borderRadius: '12px',
      marginBottom: '20px',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '13px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '6px'
    },
    inputWrapper: {
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      paddingLeft: '40px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
      background: '#f9fafb'
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af'
    },
    options: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px'
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '13px',
      color: '#6b7280',
      cursor: 'pointer'
    },
    checkbox: {
      marginRight: '8px',
      width: '16px',
      height: '16px',
      cursor: 'pointer',
      accentColor: '#4f46e5'
    },
    forgotLink: {
      fontSize: '13px',
      color: '#4f46e5',
      textDecoration: 'none',
      fontWeight: '500'
    },
    button: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
      transform: 'none'
    },
    demoBox: {
      marginTop: '24px',
      padding: '16px 20px',
      background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
      borderRadius: '12px',
      textAlign: 'center'
    },
    demoTitle: {
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#6b7280',
      margin: '0 0 8px 0',
      fontWeight: '600'
    },
    demoContent: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      flexWrap: 'wrap'
    },
    demoItem: {
      fontSize: '12px',
      color: '#374151'
    },
    demoLabel: {
      color: '#6b7280',
      fontSize: '11px'
    },
    demoValue: {
      fontWeight: '600',
      color: '#0f0c29',
      fontFamily: 'monospace'
    },
    footer: {
      textAlign: 'center',
      marginTop: '24px',
      fontSize: '12px',
      color: '#9ca3af'
    }
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
            <div style={styles.inputWrapper}>
              <Icon 
                name="Mail" 
                size={18} 
                color="#9ca3af" 
                style={styles.inputIcon} 
              />
              <input
                type="email"
                name="email"
                placeholder="faculty@ccyiglobalacademy.com"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4f46e5';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 4px rgba(79, 70, 229, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.background = '#f9fafb';
                  e.target.style.boxShadow = 'none';
                }}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <Icon 
                name="Lock" 
                size={18} 
                color="#9ca3af" 
                style={styles.inputIcon} 
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4f46e5';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 4px rgba(79, 70, 229, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.background = '#f9fafb';
                  e.target.style.boxShadow = 'none';
                }}
                required
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