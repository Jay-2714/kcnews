// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnJdZsUbVH2fCT-5wJxJh22mGqiT62EQs",
  authDomain: "kaliyug-chakra.firebaseapp.com",
  projectId: "kaliyug-chakra",
  storageBucket: "kaliyug-chakra.appspot.com",
  messagingSenderId: "778395804995",
  appId: "1:778395804995:web:fd45f585702c7ee0ebbbf6",
  measurementId: "G-YHVT6DKCNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };