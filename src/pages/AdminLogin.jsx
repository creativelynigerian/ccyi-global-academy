import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import Icon from '../components/common/Icon';
import Logo from '../components/common/Logo';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { loginAdmin } = useAdmin();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Demo admin credentials
    const adminCredentials = {
      email: 'admin@ccyiglobalacademy.com',
      password: 'admin123'
    };

    if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
      loginAdmin({
        name: 'Administrator',
        email: formData.email,
        role: 'admin'
      });
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials');
    }
    setLoading(false);
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
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
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
      transition: 'all 0.3s ease'
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed'
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
    demoText: {
      fontSize: '12px',
      color: '#374151',
      margin: 0
    },
    backLink: {
      display: 'block',
      textAlign: 'center',
      marginTop: '16px',
      color: '#4f46e5',
      textDecoration: 'none',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardGlow}></div>
        
        {/* Logo */}
        <div style={styles.logo}>
          <Logo size="large" variant="full" />
          <p style={styles.subtitle}>Administration Panel</p>
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
            <label style={styles.label}>Admin Email</label>
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
                placeholder="admin@ccyiglobalacademy.com"
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
                placeholder="Enter admin password"
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
            {loading ? 'Signing in...' : 'Sign In as Admin'}
          </button>
        </form>

        {/* Demo Credentials */}
        <div style={styles.demoBox}>
          <p style={styles.demoTitle}>🔑 Demo Credentials</p>
          <p style={styles.demoText}>
            admin@ccyiglobalacademy.com / admin123
          </p>
        </div>

        <a href="/dashboard" style={styles.backLink}>
          ← Back to Dashboard
        </a>
      </div>
    </div>
  );
};

// ✅ IMPORTANT: Default export
export default AdminLogin;