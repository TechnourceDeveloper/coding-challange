import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from '../libs/reportWebVitals';

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
