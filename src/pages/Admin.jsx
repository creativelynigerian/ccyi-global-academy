// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/admin.css";

const ADMIN_ACTIONS = [
  { icon: "👥", title: "Manage Users",      description: "View, approve, or deactivate student accounts", href: "/admin/users" },
  { icon: "📚", title: "Manage Courses",    description: "Create and edit courses",                       href: "/admin/courses" },
  { icon: "🎓", title: "Enrollments",       description: "Assign students to courses and platforms",      href: "/admin/enrollments" },
  { icon: "🔗", title: "Platform Links",    description: "Update URLs for Moodle, Office 365, etc.",      href: "/admin/platform-links" },
  { icon: "📢", title: "Announcements",     description: "Send notifications to students",                href: "/admin/announcements" },
  { icon: "📊", title: "Reports",           description: "Usage stats and platform activity",             href: "/admin/reports" },
];

export default function Admin() {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    students: null,
    courses: null,
    activeToday: null,
    pending: null,
  });
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  // Load stats from Firestore
  useEffect(() => {
    let cancelled = false;

    async function loadStats() {
      try {
        // Fetch users
        const usersSnap = await getDocs(collection(db, "users"));
        const users = usersSnap.docs.map((d) => d.data());

        const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

        const students = users.filter((u) => u.role === "student").length;
        const pending  = users.filter((u) => u.role === "pending").length;
        const activeToday = users.filter((u) => {
          if (!u.lastLogin) return false;
          const d = u.lastLogin.toDate ? u.lastLogin.toDate() : new Date(u.lastLogin);
          return d.toISOString().slice(0, 10) === today;
        }).length;

        // Courses — best-effort, will be 0 until we add courses
        let courses = 0;
        try {
          const coursesSnap = await getDocs(collection(db, "courses"));
          courses = coursesSnap.size;
        } catch (err) {
          console.warn("courses collection not yet created:", err.message);
        }

        if (!cancelled) {
          setStats({ students, courses, activeToday, pending });
        }
      } catch (err) {
        console.error("Failed to load admin stats:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadStats();
    return () => { cancelled = true; };
  }, []);

  const displayName = profile?.name || user?.email?.split("@")[0] || "Admin";
  const v = (val) => (loading ? "…" : val ?? "—");

  return (
    <div className="admin-wrapper">

      <header className="admin-topbar">
        <div className="admin-topbar-inner">
          <Link to="/admin" className="admin-logo">
            <span className="admin-logo-icon">🎓</span>
            <span className="admin-logo-text">
              <strong>CCYI Global Academy</strong>
              <small>Admin Panel</small>
            </span>
          </Link>

          <div className="admin-topbar-user">
            <span className="admin-badge">Admin</span>
            <span>{user?.email}</span>
            <button className="btn-admin-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-hero">
          <h1>Admin Dashboard</h1>
          <p>Welcome back, {displayName}. Manage users, content, and platform access.</p>
        </div>

        <div className="admin-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div>
              <p className="stat-label">Total Students</p>
              <p className="stat-value">{v(stats.students)}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div>
              <p className="stat-label">Courses</p>
              <p className="stat-value">{v(stats.courses)}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div>
              <p className="stat-label">Active Today</p>
              <p className="stat-value">{v(stats.activeToday)}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div>
              <p className="stat-label">Pending Actions</p>
              <p className="stat-value">{v(stats.pending)}</p>
            </div>
          </div>
        </div>

        <div className="admin-actions">
          {ADMIN_ACTIONS.map((a) => (
            <Link key={a.href} to={a.href} className="admin-action">
              <div className="admin-action-icon">{a.icon}</div>
              <div className="admin-action-body">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}
