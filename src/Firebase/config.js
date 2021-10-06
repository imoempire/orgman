import firebase from "firebase/app";
import 'firebase/firestore';
import { initializeApp } from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyBIBIPtZFjbSxs-4_6JRaC9oqMKRopPKmQ",
    authDomain: "orgman-924de.firebaseapp.com",
    projectId: "orgman-924de",
    storageBucket: "orgman-924de.appspot.com",
    messagingSenderId: "699115897411",
    appId: "1:699115897411:web:e98a3710b834c307ab4af6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase;