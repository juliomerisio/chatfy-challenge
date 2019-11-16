import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';
import './config/reactotronConfig';

setConfig({
  showReactDomPatchNotification: false,
});

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </BrowserRouter>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
