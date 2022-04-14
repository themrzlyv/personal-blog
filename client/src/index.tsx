import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './Themes/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './infrastructure/Contexts/ThemeContext';
import queryClient from './infrastructure/global/rQueryConfig/rQueryContig';
import AppProvider from './infrastructure/Contexts/AppContext/AppContext';
import SearchBox from './components/SearchBox';

const container = document.getElementById('root') as HTMLElement;
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider initialTheme="light">
        <App />
        <SearchBox />
        <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
      </ThemeProvider>
    </QueryClientProvider>
  </AppProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
