const form = document.getElementById("symptom-form");
const symptomList = document.getElementById("symptom-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const symptom = document.getElementById("symptom").value;
  const severity = document.getElementById("severity").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;

  const card = document.createElement("div");
  card.className = "symptom-card";

  const heading = document.createElement("h3");
  heading.textContent = symptom;

  const details = document.createElement("p");
  details.textContent =
    `Severity: ${severity} | Date: ${date}`;

  const description = document.createElement("p");
  description.textContent = notes || "No additional notes.";

  card.append(heading, details, description);

  symptomList.prepend(card);
  form.reset();
});

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