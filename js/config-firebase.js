// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbdsgeDLaTXZRNWNfBrD9VMH6x5QS6qNE",
  authDomain: "projetotarefa-6f0f0.firebaseapp.com",
  projectId: "projetotarefa-6f0f0",
  storageBucket: "projetotarefa-6f0f0.appspot.com",
  messagingSenderId: "341818565899",
  appId: "1:341818565899:web:466430c2c81339584f2e0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)