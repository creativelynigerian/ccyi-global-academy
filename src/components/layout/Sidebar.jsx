// src/components/layout/Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "180px",
      height: "100vh",
      backgroundColor: "#002147",
      color: "white",
      padding: "30px",
      position: "fixed",
      left: 0,
      top: 0
    }}>
      <h2 style={{ marginBottom: "30px" }}>Covenant University Faculty Onboarding</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/moodle" style={{ color: "white", textDecoration: "none" }}>Moodle</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/office365" style={{ color: "white", textDecoration: "none" }}>Office 365</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/grammarly" style={{ color: "white", textDecoration: "none" }}>Grammarly</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/turnitin" style={{ color: "white", textDecoration: "none" }}>Turnitin</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/certificate" style={{ color: "white", textDecoration: "none" }}>Certificate</Link>
          </li>
          <li style={{ marginBottom: "25px" }}>
            <Link to="/support" style={{ color: "white", textDecoration: "none" }}>Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}