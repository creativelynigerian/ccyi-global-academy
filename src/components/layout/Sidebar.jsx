import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../common/Icon';
import Logo from '../common/Logo';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
    { label: 'Moodle LMS', path: '/moodle', icon: 'GraduationCap' },
    { label: 'Turnitin', path: '/turnitin', icon: 'CheckSquare' },
    { label: 'Office 365', path: '/office365', icon: 'FileText' },
    { label: 'Internet Login', path: '/internet-login', icon: 'Wifi' },
    { label: 'Grammarly', path: '/grammarly', icon: 'PenTool' },
    { label: 'CU Portal', path: '/cu-portal', icon: 'Building' },
    { label: 'Certificate', path: '/certificate', icon: 'Award' },
    { label: 'Resources', path: '/resources', icon: 'Library' },
    { label: 'Support', path: '/support', icon: 'HelpCircle' },
    { label: 'AI Course Creator', path: '/ai-course-creator', icon: 'Brain' },
  ];

  const styles = {
    sidebar: {
      width: '240px',
      background: '#111827',
      color: 'white',
      height: '100vh',
      overflowY: 'auto',
      position: 'sticky',
      top: 0
    },
    header: {
      padding: '16px',
      borderBottom: '1px solid #374151'
    },
    nav: {
      padding: '16px'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 16px',
      borderRadius: '8px',
      color: '#d1d5db',
      textDecoration: 'none',
      marginBottom: '4px',
      transition: 'background 0.2s'
    },
    linkActive: {
      background: '#2563eb',
      color: 'white'
    },
    linkHover: {
      background: '#1f2937',
      color: 'white'
    }
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.header}>
        <Logo size="small" variant="text" style={{ color: 'white' }} />
      </div>
      
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.linkActive : {})
            })}
            onMouseEnter={(e) => {
              if (!e.currentTarget.classList.contains('active')) {
                e.currentTarget.style.background = '#1f2937';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.classList.contains('active')) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#d1d5db';
              }
            }}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;