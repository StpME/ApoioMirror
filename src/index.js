import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import ResultPage from './components/ResultPage.js';
import './style.css';

//--static data source :D--
//import data from 'hi.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // pass in the data as a prop
  <React.StrictMode>
    <ResultPage />
    {/* <App /> */}
  </React.StrictMode>
);

