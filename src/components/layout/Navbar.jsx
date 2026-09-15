import { Link } from 'react-router-dom';

function Header() {
  // Get the user role from localStorage
  const userRole = localStorage.getItem('userRole') || 'student';

  return (
    <header className="top-header">
      {/* Your header content... (The CCYI Global Academy Portal text and logo code) */}
      
      {/* The Right-side Navigation Links */}
      <nav className="header-nav">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/course-control" className="nav-link">Course Control</Link>
        <Link to="/report-card" className="nav-link">Report Card</Link>
        
        {/* --- THE FIX IS RIGHT HERE --- */}
        {(userRole === 'superadmin' || userRole === 'manager') && (
          <Link to="/admin" className="nav-link">⚙️ Admin</Link>
        )}
        {/* --------------------------- */}
        
        <div className="user-button">User</div>
      </nav>
    </header>
  );
}

export default Header;