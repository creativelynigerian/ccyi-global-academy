// src/firebase.js
// Hardcoded config — Firebase web config is PUBLIC by design.
// Security is enforced by Firestore rules + Auth authorized domains.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey:            "AIzaSyBPsFqqSK7lFqfqjOzC9uBlAXCAl2IrAWE",
  authDomain:        "ccyi-global-academy-portal.firebaseapp.com",
  projectId:         "ccyi-global-academy-portal",
  storageBucket:     "ccyi-global-academy-portal.firebasestorage.app",
  messagingSenderId: "162104058034",
  appId:             "1:162104058034:web:759a709dce915d1c9d69ab",
};

console.log("🔥 firebase.js loaded — projectId:", firebaseConfig.projectId);

export const app     = initializeApp(firebaseConfig);
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);

export let analytics = null;
isSupported().then((yes) => {
  if (yes) analytics = getAnalytics(app);
});