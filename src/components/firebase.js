// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "../components/firebase";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCszYezGe9vp3bPbQq7B6KCeoD9q5QeS7U",
  authDomain: "clone-fc049.firebaseapp.com",
  projectId: "clone-fc049",
  storageBucket: "clone-fc049.appspot.com",
  messagingSenderId: "306169683861",
  appId: "1:306169683861:web:e69c4ffd3471258df0609c",
  measurementId: "G-D7LN963623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };