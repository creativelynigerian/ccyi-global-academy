import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Logo from '../components/common/Logo';

const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      background: 'white',
      padding: '12px 24px',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    adminLink: {
      color: '#4f46e5',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      padding: '6px 12px',
      borderRadius: '6px',
      background: '#eef2ff',
      transition: 'all 0.3s'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logoutBtn: {
      color: '#6b7280',
      border: 'none',
      background: 'none',
      padding: '8px 12px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s'
    },
    main: {
      flex: 1,
      overflow: 'auto',
      background: '#f9fafb'
    },
    footer: {
      background: '#002147',
      color: 'white',
      padding: '12px 24px',
      textAlign: 'center',
      borderTop: '2px solid #fbbf24',
      flexShrink: 0
    },
    footerText: {
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap',
      fontSize: '13px'
    },
    footerLink: {
      color: '#fbbf24',
      textDecoration: 'none',
      fontWeight: '500'
    },
    footerDivider: {
      color: '#4b6a8a'
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.content}>
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <Logo size="small" variant="text" />
            <a href="/admin/dashboard" style={styles.adminLink}>
              🔧 Admin
            </a>
          </div>
          <div style={styles.headerRight}>
            <button
              onClick={handleLogout}
              style={styles.logoutBtn}
              onMouseEnter={(e) => {
                e.target.style.color = '#dc2626';
                e.target.style.background = '#fef2f2';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#6b7280';
                e.target.style.background = 'none';
              }}
            >
              Logout
            </button>
          </div>
        </header>
        <main style={styles.main}>
          <Outlet />
        </main>
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            <span>Powered by</span>
            <a href="#" style={styles.footerLink}>CCYI Global Enterprise</a>
            <span style={styles.footerDivider}>|</span>
            <span>📞 07018327021</span>
            <span style={styles.footerDivider}>|</span>
            <a href="mailto:ceoccyige@gmail.com" style={styles.footerLink}>
              📧 ceoccyige@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;