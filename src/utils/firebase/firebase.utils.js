import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBoQPwdDWphvGDzsZGNxkrVlgPNqHn_l3Q",
    authDomain: "ramadan-kareem2023.firebaseapp.com",
    projectId: "ramadan-kareem2023",
    storageBucket: "ramadan-kareem2023.appspot.com",
    messagingSenderId: "1083547443726",
    appId: "1:1083547443726:web:7709551c593a80cc91525f",
    measurementId: "G-7CP0WXMR36"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();