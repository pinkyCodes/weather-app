/* The following line can be included in your src/index.js or App.js file */
/* SEEMS TO BE WORKING WITHOUT IT FOR NOW; FOR PURE BS WILL MOST DEF NEED IT */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
