// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYYXIr08150u8_f1N4xbNt6ZYX81S2aSI",
  authDomain: "bookstore-d86ec.firebaseapp.com",
  projectId: "bookstore-d86ec",
  storageBucket: "bookstore-d86ec.appspot.com",
  messagingSenderId: "1082772773322",
  appId: "1:1082772773322:web:e122f07b4e811b908a9733",
  measurementId: "G-D2FD93H5WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;