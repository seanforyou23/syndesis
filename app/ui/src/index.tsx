import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';

ReactDOM.render(
  <App name="Syndesis" />,
  document.getElementById('syn-root') as HTMLElement
);
