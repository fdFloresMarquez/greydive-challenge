import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Layout from './app/layout';
import AppTheme from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <Layout>
          <App />
        </Layout>
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>,
);
