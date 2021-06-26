import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import store from './redux/store';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root'),
);
