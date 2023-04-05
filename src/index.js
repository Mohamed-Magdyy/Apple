import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'jquery/dist/jquery.min'
import { BrowserRouter } from 'react-router-dom';
// import Aos from "aos"
// import "aos/dist/aos.css"



  // Aos.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.Fragment>
    <App />
  </React.Fragment>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
