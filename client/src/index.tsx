import React from 'react';
import ReactDOM from 'react-dom/client';
import './Themes/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './infrastructure/Contexts/ThemeContext';

const container = document.getElementById('root') as HTMLElement;
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
  <ThemeProvider initialTheme="light">
    <App />
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
