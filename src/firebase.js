// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkIp6VL6TkTLsC3VI1JOrMY8759I1gYMA",
  authDomain: "lets-know-zim.firebaseapp.com",
  projectId: "lets-know-zim",
  storageBucket: "lets-know-zim.appspot.com",  // 🔧 fixed typo here (.app → .com)
  messagingSenderId: "439741638218",
  appId: "1:439741638218:web:873abc5e2d328e6d59e8b3",
  measurementId: "G-DVQCPCNKVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth };
