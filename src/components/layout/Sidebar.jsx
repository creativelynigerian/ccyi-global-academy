import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  
  // Get the user role to hide Admin from students
  const userRole = localStorage.getItem('userRole') || 'student';

  // Define all menu items
  const allMenuItems = [
    { path: '/', icon: '🏠', label: 'Dashboard' },
    { path: '/office-suite', icon: '📚', label: 'Office Suite' },
    { path: '/course-control', icon: '📚', label: 'Course Control' },
    { path: '/report-card', icon: '📊', label: 'Report Card' },
    { path: '/certificate', icon: '🎓', label: 'Certificate' },
    { path: '/resources', icon: '📁', label: 'Resources' },
    { path: '/support', icon: '🛠️', label: 'Support' },
    { path: '/admin', icon: '⚙️', label: 'Admin' },
  ];

  // Filter out Admin for students
  const menuItems = allMenuItems.filter(item => {
    if (item.path === '/admin') {
      return userRole === 'superadmin' || userRole === 'manager';
    }
    return true;
  });

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <aside className="app-sidebar" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
      <nav className="sidebar-nav" style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* --- LOGOUT BUTTON SECTION --- */}
      <div style={{ padding: '16px 0', borderTop: '1px solid #e8ecf0', margin: '0 16px' }}>
        <button 
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: '12px 20px',
            background: 'transparent',
            border: 'none',
            borderRadius: '8px',
            color: '#dc2626', // Red color
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#fef2f2'; // Light red background on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
          }}
        >
          <span className="icon" style={{ fontSize: '20px' }}>🚪</span>
          <span className="label">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;