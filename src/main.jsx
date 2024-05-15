import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS996gK4mwzbLYlace1CnAYxn8zde12ew",
  authDomain: "proyecto-react-68396.firebaseapp.com",
  projectId: "proyecto-react-68396",
  storageBucket: "proyecto-react-68396.appspot.com",
  messagingSenderId: "871072883220",
  appId: "1:871072883220:web:57c9252c339bc1f607bd01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
