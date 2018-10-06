import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/app.scss';
import { MetadataState } from './domains/platform/types/platform.models';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import { Chrome } from './components/chrome/chrome';
import { Header } from './components/chrome/header/header';
import { Sidebar } from './components/chrome/sidebar/sidebar';
import { Routes } from './routes';
var axe = require('react-axe');
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}
export class App extends React.Component<MetadataState> {

  constructor(props: MetadataState) {
    super(props);
  }

  render() {
    return (
      <Chrome header={<Header />} sidebar={<Sidebar />}>
        <Routes />
      </Chrome>
    );
  }
}
