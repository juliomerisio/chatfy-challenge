import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

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
      </Router>
    </BrowserRouter>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
