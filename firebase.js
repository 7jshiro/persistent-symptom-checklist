import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjBN-yEdelcQ-b4d5A230SkMUUnAi2DNg",
  authDomain: "persistent-symptom-cheeker.firebaseapp.com",
  projectId: "persistent-symptom-cheeker",
  storageBucket: "persistent-symptom-cheeker.firebasestorage.app",
  messagingSenderId: "52967050473",
  appId: "1:52967050473:web:5aed163d323943bb03b478",
  measurementId: "G-JF0RNG88EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);