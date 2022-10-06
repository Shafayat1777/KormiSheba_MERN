import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { ServiceContextProvider } from './context/ServiceContext'
import { GlobalStyles } from './Styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <ServiceContextProvider>
        <App/>
      </ServiceContextProvider>
    </React.StrictMode>
  </>
);

