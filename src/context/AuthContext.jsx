// src/context/AuthContext.jsx
// Global auth state for the app

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut as fbSignOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (!fbUser) {
        setUser(null);
        setProfile(null);
        setLoading(false);
        return;
      }
      setUser(fbUser);
      try {
        const snap = await getDoc(doc(db, "users", fbUser.uid));
        setProfile(
          snap.exists()
            ? { uid: fbUser.uid, ...snap.data() }
            : { uid: fbUser.uid, role: "student" }
        );
      } catch (err) {
        console.warn("Profile load failed:", err.message);
        setProfile({ uid: fbUser.uid, role: "student" });
      } finally {
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  const logout = () => fbSignOut(auth);

  return (
    <AuthContext.Provider value={{ user, profile, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
