import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <AnimatePresence mode='wait'>
          <App />
        </AnimatePresence>
      </HelmetProvider>
    </Router>
  </React.StrictMode >
);

reportWebVitals();