import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';

ReactDOM.render(
  <BrowserRouter>
    <App appName="Syndesis" />
  </BrowserRouter>,
  document.getElementById('syn-root') as HTMLElement
);
