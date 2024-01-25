// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApV0aZSd9qJqxQ1XyGo8BPJ7u0xDWXHtg",
  authDomain: "hh-ecommerce.firebaseapp.com",
  projectId: "hh-ecommerce",
  storageBucket: "hh-ecommerce.appspot.com",
  messagingSenderId: "713134179062",
  appId: "1:713134179062:web:76ea7f4865a717d2ee22d7",
  measurementId: "G-Y3Y8BXY282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);