import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//--static data source--
import STORE_DATA from './data/store_data.json';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM20yCn9IWBghwuFU0coQDXylpS3-sPAg",
  authDomain: "apoio-20245.firebaseapp.com",
  projectId: "apoio-20245",
  storageBucket: "apoio-20245.appspot.com",
  messagingSenderId: "1017955324090",
  appId: "1:1017955324090:web:e6bd95c6af62972ec2f283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App stores={STORE_DATA}/>
  </BrowserRouter>
);

