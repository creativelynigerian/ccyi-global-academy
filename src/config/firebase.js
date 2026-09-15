// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyCGtfRPr7b7Z8am9Yngxbq12QPHxS_GWbw",
  authDomain: "ccyi-global-academy-b2a61.firebaseapp.com",
  projectId: "ccyi-global-academy-b2a61",
  storageBucket: "ccyi-global-academy-b2a61.firebasestorage.app",
  messagingSenderId: "107826065546",
  appId: "1:107826065546:web:990c4ed486bc274b9f7d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
