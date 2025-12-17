import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPKwi4E8sB3c3qegpj7mIZYnX4n9hiRws",
    authDomain: "ma-voie-af718.firebaseapp.com",
    projectId: "ma-voie-af718",
    storageBucket: "ma-voie-af718.firebasestorage.app",
    messagingSenderId: "1078192162458",
    appId: "1:1078192162458:web:a7e1917e4e3185da94c123"
};

initializeApp(firebaseConfig);
export const db = getFirestore();