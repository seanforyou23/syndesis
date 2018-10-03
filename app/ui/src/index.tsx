import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';

// ReactDOM.render(
//   <App name="Syndesis" />,
//   document.getElementById('syn-root') as HTMLElement
// );

// ReactDOM.render((
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// ), el)

ReactDOM.render(
  <BrowserRouter>
    <App name="Syndesis" />
  </BrowserRouter>,
  document.getElementById('syn-root') as HTMLElement
);
