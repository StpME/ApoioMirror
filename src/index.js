import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import ResultPage from './components/ResultPage.js';
import './style.css';

//--static data source--
import STORE_DATA from './data/store_data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<ResultPage />*/}
    <App stores={STORE_DATA}/>
  </React.StrictMode>
);

