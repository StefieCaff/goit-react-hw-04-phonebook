import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '300px',
  position: 'center-top',
  clickToClose: false,
  useIcon: true,
  pauseOnHover: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
