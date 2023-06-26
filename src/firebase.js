// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr7y_4r1Bw_6aA4ybrXq8lSi60TpfbEQ0",
  authDomain: "chat-28fb1.firebaseapp.com",
  projectId: "chat-28fb1",
  storageBucket: "chat-28fb1.appspot.com",
  messagingSenderId: "437004720528",
  appId: "1:437004720528:web:ffd40b5e8a7cecd69d3b15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();