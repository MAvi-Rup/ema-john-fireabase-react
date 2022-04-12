// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcSVPQnTx9R84UdiuQsyBQKNLm0mJno_c",
  authDomain: "simple-ema-john-6e3a8.firebaseapp.com",
  projectId: "simple-ema-john-6e3a8",
  storageBucket: "simple-ema-john-6e3a8.appspot.com",
  messagingSenderId: "668263830810",
  appId: "1:668263830810:web:203a64830c88415a75c8a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
