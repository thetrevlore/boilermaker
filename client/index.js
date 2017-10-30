'use strict'
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

render(
  <div>
    <Provider store={store}>
      <Router>
        <h1>HI</h1>
      </Router>
    </Provider>
  </div>,
  document.getElementById("app")
)
