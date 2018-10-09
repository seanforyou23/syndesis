import React from 'react';

import { Alert } from 'patternfly-react';
import '../scss/app.scss';

import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import { ApicurioLoader } from './vendor/apicurio/apicurio-loader';
import { BlockCopyLoader } from './vendor/pfng/block-copy-loader';

export interface Props {
  name: string;
}

const borderStyles = {
  border: '1px solid black'
};

export function App({name}: Props) {

  return (
    <div className="container">
      <h1 className="text-center">App.tsx Component for: {name}</h1>
      <div className="row">
        <div className="col-xs-6" style={borderStyles}>
          <h2>Section 1: Import Component from PF-React</h2>
          <Alert>I am an Alert imported from PF-React</Alert>
        </div>
        <div className="col-xs-6" style={borderStyles}>
          <h2>Section 2: Import Apicurio as WC</h2>
          <ApicurioLoader api="fooapi" embedded />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6" style={borderStyles}>
          <h2>Section 3: Import CopyClipboard from PFNG</h2>
          <BlockCopyLoader value="copyValue example" />
        </div>
        <div className="col-xs-6" style={borderStyles}>
          <h2>Section 4: Raw PF4 Markup</h2>
          {/* <div className="pf-c-background-image" /> */}
          {/* https://pf-next.com/components/Button/examples/ */}
          <button className="pf-c-button pf-m-primary">
            Primary
          </button>
        </div>
      </div>

    </div>
  );
}
