// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import "./Login.css";

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [busy, setBusy]         = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      // 1. Sign in
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);

      // 2. Fetch user profile to determine role
      let role = "student";
      try {
        const snap = await getDoc(doc(db, "users", cred.user.uid));
        if (snap.exists()) role = snap.data().role || "student";
      } catch (err) {
        console.warn("Could not read role:", err.message);
      }

      // 3. Route by role, unless we came from a specific protected page
      const from = location.state?.from?.pathname;
      if (from) {
        navigate(from, { replace: true });
      } else if (role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      const map = {
        "auth/invalid-email":          "That email address isn't valid.",
        "auth/user-not-found":         "No account found with that email.",
        "auth/wrong-password":         "Incorrect password.",
        "auth/invalid-credential":     "Incorrect email or password.",
        "auth/too-many-requests":      "Too many attempts. Try again in a few minutes.",
        "auth/network-request-failed": "Network error. Check your connection.",
      };
      setError(map[err.code] || err.message || "Login failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="login-header">
          <span className="login-icon">🎓</span>
          <h1>CCYI Global Academy</h1>
          <p>Student Onboarding Portal</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              disabled={busy}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              disabled={busy}
            />
          </div>

          <button type="submit" className="login-btn" disabled={busy}>
            {busy ? "Signing in…" : "Login"}
          </button>
        </form>

        <div className="login-footer">
          <a href="/forgot-password">Forgot password?</a>
          <span>•</span>
          <a href="/help">Need help?</a>
        </div>

      </div>
    </div>
  );
}
