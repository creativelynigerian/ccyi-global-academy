import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, FileText, LogOut, Settings, User } from  'lucide-react';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const navLinkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 20px',
    color: isActive ? '#0a1628' : '#4a5a6e',
    textDecoration: 'none',
    fontWeight: isActive ? '600' : '500',
    borderLeft: isActive ? '3px solid #f5b400' : '3px solid transparent',
    background: isActive ? '#f0f4ff' : 'transparent',
    transition: 'all 0.2s'
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>

      {/* ADMIN HEADER */}
      <header style={{
        background: '#0a1628',
        color: 'white',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '3px solid #f5b400'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Settings size={22} color="#f5b400" />
          <div>
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>CCYI Admin Panel</h1>
            <span style={{ fontSize: '12px', color: '#f5b400' }}>Manage Students, Courses & System</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: 'white', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={16} /> Admin
          </span>
          <button
            onClick={handleLogout}
            style={{
              background: 'transparent',
              border: '1px solid #ef4444',
              color: '#ef4444',
              padding: '6px 16px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ef4444';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ef4444';
            }}
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* ADMIN SIDEBAR */}
        <aside style={{
          width: '220px',
          background: '#f8fafc',
          borderRight: '1px solid #e8ecf0',
          padding: '20px 0'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            <NavLink to="/admin" style={navLinkStyle} end>
              <LayoutDashboard size={20} /> Admin Dashboard
            </NavLink>
            <NavLink to="/course-control" style={navLinkStyle}>
              <BookOpen size={20} /> Course Control
            </NavLink>
            <NavLink to="/report-card" style={navLinkStyle}>
              <FileText size={20} /> Report Card
            </NavLink>
          </nav>
        </aside>

        {/* PAGE CONTENT */}
        <main style={{ flex: 1, padding: '24px 32px', background: '#f0f2f5' }}>
          {children}
        </main>

      </div>

      {/* ADMIN FOOTER */}
      <footer style={{ background: '#0a1628', color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '12px 24px' }}>
        <p style={{ margin: 0, fontSize: '13px' }}>Â© {new Date().getFullYear()} CCYI Global Academy - Admin Panel</p>
      </footer>

    </div>
  );
};

export default AdminLayout;

