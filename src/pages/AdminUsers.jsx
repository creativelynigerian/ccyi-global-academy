// src/pages/AdminUsers.jsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection, getDocs, doc, updateDoc, deleteDoc, serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import "../styles/admin.css";

export default function AdminUsers() {
  const [users, setUsers]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [busyId, setBusyId]     = useState(null);
  const [error, setError]       = useState("");
  const [success, setSuccess]   = useState("");

  // ---------- Load users ----------
  async function loadUsers() {
    setLoading(true);
    setError("");
    try {
      const snap = await getDocs(collection(db, "users"));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Sort: pending first, then by createdAt desc
      list.sort((a, b) => {
        if (a.role === "pending" && b.role !== "pending") return -1;
        if (b.role === "pending" && a.role !== "pending") return 1;
        const at = a.createdAt?.seconds || 0;
        const bt = b.createdAt?.seconds || 0;
        return bt - at;
      });
      setUsers(list);
    } catch (err) {
      console.error("Failed to load users:", err);
      setError("Failed to load users: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadUsers(); }, []);

  // ---------- Actions ----------
  async function setRole(uid, role) {
    if (!confirm(`Change this user's role to "${role}"?`)) return;
    setBusyId(uid);
    setError(""); setSuccess("");
    try {
      await updateDoc(doc(db, "users", uid), { role, updatedAt: serverTimestamp() });
      setSuccess(`Role updated to "${role}".`);
      await loadUsers();
    } catch (err) {
      console.error(err);
      setError("Failed to update role: " + err.message);
    } finally {
      setBusyId(null);
    }
  }

  async function deleteUser(uid, email) {
    if (!confirm(`Delete this user's profile?\n\n${email}\n\nThis removes their Firestore doc but NOT their Firebase Auth account.`)) return;
    setBusyId(uid);
    setError(""); setSuccess("");
    try {
      await deleteDoc(doc(db, "users", uid));
      setSuccess("User profile deleted.");
      await loadUsers();
    } catch (err) {
      console.error(err);
      setError("Failed to delete: " + err.message);
    } finally {
      setBusyId(null);
    }
  }

  // ---------- Filtered + searched list ----------
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return users.filter((u) => {
      if (roleFilter !== "all" && u.role !== roleFilter) return false;
      if (!q) return true;
      return (
        (u.email || "").toLowerCase().includes(q) ||
        (u.name || "").toLowerCase().includes(q)
      );
    });
  }, [users, search, roleFilter]);

  // ---------- Counts ----------
  const counts = useMemo(() => {
    return users.reduce(
      (acc, u) => {
        acc.total++;
        acc[u.role || "unknown"] = (acc[u.role || "unknown"] || 0) + 1;
        return acc;
      },
      { total: 0 }
    );
  }, [users]);

  // ---------- Helpers ----------
  const fmtDate = (ts) => {
    if (!ts) return "—";
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  };

  const roleBadgeClass = (role) => {
    if (role === "admin")   return "role-badge role-admin";
    if (role === "pending") return "role-badge role-pending";
    return "role-badge role-student";
  };

  // ---------- Render ----------
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
            <Link to="/admin" className="btn-admin-back">← Dashboard</Link>
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-hero">
          <h1>Manage Users</h1>
          <p>
            {loading ? "Loading…" : `${counts.total || 0} total • ${counts.student || 0} students • ${counts.pending || 0} pending • ${counts.admin || 0} admins`}
          </p>
        </div>

        {error && <div className="admin-alert admin-alert-error">{error}</div>}
        {success && <div className="admin-alert admin-alert-success">{success}</div>}

        <div className="users-toolbar">
          <input
            type="text"
            className="users-search"
            placeholder="🔍 Search by email or name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="users-filter"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">All roles</option>
            <option value="student">Students</option>
            <option value="pending">Pending</option>
            <option value="admin">Admins</option>
          </select>
          <button className="btn-admin-refresh" onClick={loadUsers} disabled={loading}>
            {loading ? "…" : "Refresh"}
          </button>
        </div>

        <div className="users-table-wrap">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!loading && filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="users-empty">
                    No users match your filters.
                  </td>
                </tr>
              )}
              {filtered.map((u) => (
                <tr key={u.id}>
                  <td>{u.name || "—"}</td>
                  <td className="users-email">{u.email || "—"}</td>
                  <td>
                    <span className={roleBadgeClass(u.role)}>
                      {u.role || "unknown"}
                    </span>
                  </td>
                  <td className="users-date">{fmtDate(u.createdAt)}</td>
                  <td>
                    <div className="users-actions">
                      {u.role === "pending" && (
                        <button
                          className="btn-row btn-approve"
                          onClick={() => setRole(u.id, "student")}
                          disabled={busyId === u.id}
                        >
                          ✓ Approve
                        </button>
                      )}
                      {u.role === "student" && (
                        <button
                          className="btn-row btn-promote"
                          onClick={() => setRole(u.id, "admin")}
                          disabled={busyId === u.id}
                        >
                          ↑ Make Admin
                        </button>
                      )}
                      {u.role === "admin" && (
                        <button
                          className="btn-row btn-demote"
                          onClick={() => setRole(u.id, "student")}
                          disabled={busyId === u.id}
                        >
                          ↓ Remove Admin
                        </button>
                      )}
                      <button
                        className="btn-row btn-delete"
                        onClick={() => deleteUser(u.id, u.email)}
                        disabled={busyId === u.id}
                      >
                        ✕ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
