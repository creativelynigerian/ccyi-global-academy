import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <h1>🏛️ CCYI GLOBAL ACADEMY PORTAL</h1>
            <span>Student Learning and Registration Platform</span>
          </Link>
        </div>
        <div className="header-right">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/office-suite" className="nav-link">Office Suite</Link>
          <Link to="/course-control" className="nav-link">📚 Course Control</Link>
          <Link to="/report-card" className="nav-link">📊 Report Card</Link>
          <Link to="/admin" className="nav-link">⚙️ Admin</Link>
          <button className="user-btn">👤 User</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
