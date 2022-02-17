import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCqylqF7brhwHgzkn06UGDZo0uWpd9ZpgI",
  authDomain: "house-marketplace-app-a746e.firebaseapp.com",
  projectId: "house-marketplace-app-a746e",
  storageBucket: "house-marketplace-app-a746e.appspot.com",
  messagingSenderId: "976557948995",
  appId: "1:976557948995:web:e8ba57829d87a54ba854f6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
