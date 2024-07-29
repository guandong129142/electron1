import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// String.prototype.replaceAll = function(s1: string, s2: string) {
//   return this.replace(new RegExp(s1, "gm"), s2);
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
