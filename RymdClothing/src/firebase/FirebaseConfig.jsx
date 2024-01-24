// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW6EVgb1M_FAdSqBV1Z2xo45HPg0HZ978",
  authDomain: "rymdclothing-dbb2b.firebaseapp.com",
  projectId: "rymdclothing-dbb2b",
  storageBucket: "rymdclothing-dbb2b.appspot.com",
  messagingSenderId: "697728763008",
  appId: "1:697728763008:web:e0f24cbbb27e1fa9b35265",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
