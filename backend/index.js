import {initializeApp} from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseApp = initializeApp({

// })

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  apiKey: "AIzaSyA5KzPCJbXgG3LWrtSfhRpI186iASLjOgo",
  authDomain: "furniture-website-kashish.firebaseapp.com",
  projectId: "furniture-website-kashish",
  storageBucket: "furniture-website-kashish.firebasestorage.app",
  messagingSenderId: "102396288348",
  appId: "1:102396288348:web:80ca9c93a4984db68d3599",
  measurementId: "G-VJ5JR4NELH"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user !== null){
        console.log("logged in!");
    }else{
        console.log("No User");
        
    }
})

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);