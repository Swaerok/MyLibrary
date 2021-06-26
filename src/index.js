import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import App from './app.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,

  document.getElementById('root'),
);
