import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <BrowserRouter>
    <App appName="Syndesis" />
  </BrowserRouter>,
  document.getElementById('syn-root') as HTMLElement
);
