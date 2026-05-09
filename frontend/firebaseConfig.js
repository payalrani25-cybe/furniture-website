import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5KzPCJbXgG3LWrtSfhRpI186iASLjOgo",
    authDomain: "furniture-website-kashish.firebaseapp.com",
    projectId: "furniture-website-kashish",
    storageBucket: "furniture-website-kashish.firebasestorage.app",
    messagingSenderId: "102396288348",
    appId: "1:102396288348:web:80ca9c93a4984db68d3599",
    measurementId: "G-VJ5JR4NELH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);