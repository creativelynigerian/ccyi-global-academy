// src/pages/Dashboard.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/dashboard.css";

// Platform links — adjust URLs to your real destinations
const PLATFORMS = [
  {
    icon: "📘",
    title: "CU Portal",
    description: "Course registration, results, and student records",
    href: "/platforms/cu-portal",
  },
  {
    icon: "🎓",
    title: "Moodle",
    description: "Course materials, assignments, and quizzes",
    href: "/platforms/moodle",
  },
  {
    icon: "💼",
    title: "Office 365",
    description: "Email, Word, Excel, PowerPoint, and Teams",
    href: "/platforms/office365",
  },
  {
    icon: "✍️",
    title: "Grammarly",
    description: "Writing assistant for essays and reports",
    href: "/platforms/grammarly",
  },
  {
    icon: "🌐",
    title: "Internet Login",
    description: "Campus WiFi and internet access portal",
    href: "/platforms/internet-login",
  },
  {
    icon: "📚",
    title: "Resources",
    description: "Library, past questions, and study materials",
    href: "/platforms/resources",
  },
];

export default function Dashboard() {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  const displayName = profile?.name || user?.email?.split("@")[0] || "Student";

  return (
    <div className="dashboard-wrapper">

      {/* Top bar */}
      <header className="dashboard-topbar">
        <div className="dashboard-topbar-inner">
          <Link to="/dashboard" className="dashboard-logo">
            <span className="dashboard-logo-icon">🎓</span>
            <span className="dashboard-logo-text">
              <strong>CCYI Global Academy</strong>
              <small>Student Portal</small>
            </span>
          </Link>

          <div className="dashboard-user">
            <span className="dashboard-user-email">{user?.email}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Hero welcome */}
      <section className="dashboard-hero">
        <div className="dashboard-hero-inner">
          <h1>Welcome back, {displayName} 👋</h1>
          <p>Access all your learning platforms from one place.</p>
        </div>
      </section>

      {/* Main */}
      <main className="dashboard-main pull-up">
        <div className="section-heading">
          <h2>Your Platforms</h2>
          <span className="muted">{PLATFORMS.length} available</span>
        </div>

        <div className="platform-grid">
          {PLATFORMS.map((p) => (
            <Link key={p.href} to={p.href} className="platform-card">
              <div className="platform-icon">{p.icon}</div>
              <div className="platform-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <div className="platform-arrow">→</div>
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}
