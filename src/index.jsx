import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import "./index.css";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const root = document.getElementById('root')
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
)
