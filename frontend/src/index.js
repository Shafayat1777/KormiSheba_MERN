import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import componenets
import { ServiceContextProvider } from './context/ServiceContext'
import { AuthContextProvider } from './context/AuthContext'

import { GlobalStyles } from './Styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <AuthContextProvider>
        <ServiceContextProvider>
          <App/>
        </ServiceContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  </>
);

