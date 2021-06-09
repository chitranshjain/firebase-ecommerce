import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAe2U4tXT2RPhl0f56WqzMrOysDYimq410",
  authDomain: "fir-react-ecommerce.firebaseapp.com",
  projectId: "fir-react-ecommerce",
  storageBucket: "fir-react-ecommerce.appspot.com",
  messagingSenderId: "65708148259",
  appId: "1:65708148259:web:90cec9fefcce0c34c31396",
  measurementId: "G-E2BXHDHJL2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
