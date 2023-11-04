// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfv8FoL3agDtvYa2q8dGL5ALuBX4ToX88",
  authDomain: "pincode-fe6fe.firebaseapp.com",
  projectId: "pincode-fe6fe",
  storageBucket: "pincode-fe6fe.appspot.com",
  messagingSenderId: "318826125411",
  appId: "1:318826125411:web:0e56bf0a5adee3831c0056",
  measurementId: "G-10Q67985D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);