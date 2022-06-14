// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoOFcHB9YCai1C-LRCtYmjwqYaOq3rmCw",
  authDomain: "practice-5c7b8.firebaseapp.com",
  projectId: "practice-5c7b8",
  storageBucket: "practice-5c7b8.appspot.com",
  messagingSenderId: "282009351683",
  appId: "1:282009351683:web:f627f92e4123ac83c40036",
  measurementId: "G-YK1G7TRMX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

