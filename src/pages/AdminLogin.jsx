import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
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
      padding: '20px'
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      background: 'white',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    },
    logo: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#0f0c29',
      margin: 0
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
      padding: '12px',
      borderRadius: '8px',
      marginBottom: '16px',
      fontSize: '14px'
    },
    formGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '4px'
    },
    input: {
      width: '100%',
      padding: '10px 14px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.3s'
    },
    button: {
      width: '100%',
      padding: '12px',
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    demoBox: {
      marginTop: '16px',
      padding: '12px',
      background: '#f3f4f6',
      borderRadius: '8px',
      textAlign: 'center'
    },
    demoText: {
      fontSize: '12px',
      color: '#6b7280',
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
        <div style={styles.logo}>
          <Logo size="medium" variant="full" />
          <p style={styles.subtitle}>Administration Panel</p>
        </div>

        {error && <div style={styles.errorBox}>❌ {error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Admin Email</label>
            <input
              type="email"
              name="email"
              placeholder="admin@ccyiglobalacademy.com"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = '#4f46e5';
                e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter admin password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = '#4f46e5';
                e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? { opacity: 0.6, cursor: 'not-allowed' } : {})
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(79,70,229,0.3)';
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

        <div style={styles.demoBox}>
          <p style={styles.demoText}>
            🔑 Demo: admin@ccyiglobalacademy.com / admin123
          </p>
        </div>

        <a href="/dashboard" style={styles.backLink}>
          ← Back to Dashboard
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;