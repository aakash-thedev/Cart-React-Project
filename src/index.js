import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDB4FKC0k0rScbPN-Uqh6tSJwyhOhVsR9g",
  authDomain: "shopping-cart-a820e.firebaseapp.com",
  projectId: "shopping-cart-a820e",
  storageBucket: "shopping-cart-a820e.appspot.com",
  messagingSenderId: "411114465225",
  appId: "1:411114465225:web:5eea38c047f8d2ea07ea18"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
