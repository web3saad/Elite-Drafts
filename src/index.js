import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './font-awesome/css/font-awesome.min.css';
import './animations.css';
import './style.css';

// Google tag (gtag.js) for Google Ads tracking
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17392560340');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
