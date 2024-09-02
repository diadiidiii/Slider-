import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // Assuming your App component is in App.js
import './slide'; // Import any global styles
import { createRoot } from 'react-dom/client';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);