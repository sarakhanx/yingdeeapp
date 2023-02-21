// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOJiEQCd3yvD1FFw84hCQH3JCymbZTV_g",
  authDomain: "ydss-else.firebaseapp.com",
  projectId: "ydss-else",
  storageBucket: "ydss-else.appspot.com",
  messagingSenderId: "386401295876",
  appId: "1:386401295876:web:c25f24f1a3283482545f51",
  measurementId: "G-E526WH72LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);