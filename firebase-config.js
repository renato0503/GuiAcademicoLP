// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiIG7-99HgOhwCF7K3WYDGf1JvdSI1dPw",
  authDomain: "guiacademicostorage.firebaseapp.com",
  projectId: "guiacademicostorage",
  storageBucket: "guiacademicostorage.firebasestorage.app",
  messagingSenderId: "1044959863898",
  appId: "1:1044959863898:web:6b3fa6600fcd827e27e463",
  measurementId: "G-DTG5H3E3CE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Configurações Sensíveis (Ignoradas pelo Git)
export const ADMIN_CPF = '05930662193';
