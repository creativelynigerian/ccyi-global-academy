import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { path: '/', icon: '🏠', label: 'Dashboard' },
    { path: '/office-suite', icon: '📚', label: 'Office Suite' },
    { path: '/course-control', icon: '📚', label: 'Course Control' },
    { path: '/report-card', icon: '📊', label: 'Report Card' },
    { path: '/certificate', icon: '🎓', label: 'Certificate' },
    { path: '/resources', icon: '📁', label: 'Resources' },
    { path: '/support', icon: '🛠️', label: 'Support' },
    { path: '/admin', icon: '⚙️', label: 'Admin' },
  ];

  return (
    <aside className="app-sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
