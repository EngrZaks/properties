// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkXmsXwYTpQqZ9TErDOJv7m5csnMCMtnI",
  authDomain: "properties-10227.firebaseapp.com",
  projectId: "properties-10227",
  storageBucket: "properties-10227.appspot.com",
  messagingSenderId: "1004052901514",
  appId: "1:1004052901514:web:f89e607445e306b0300773",
  measurementId: "G-ZQS29VY2YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
