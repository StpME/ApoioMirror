import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import './style.css';

//static data source
//import data from 'hi.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // pass in the data as a prop
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

