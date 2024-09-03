import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Ensure the correct filename and path
import './slide'; // Import any global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
