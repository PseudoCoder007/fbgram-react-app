import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './components';
import {ToastProvider} from 'react-toast-notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider >
    <App />
    </ToastProvider>
  </React.StrictMode>
);
