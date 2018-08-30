import React from 'react';

import { Alert } from 'patternfly-react';

import 'bootstrap/dist/css/bootstrap.css';
import 'patternfly-react/dist/css/patternfly-react.css';

import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import { ApicurioLoader } from './vendor/apicurio/apicurio-loader';
export interface Props {
  name: string;
}

export function App({name}: Props) {

  return (
    <div>
      <h1>App.tsx Component for: {name}</h1>
      <Alert>I am an Alert imported from PF-React</Alert>
      <ApicurioLoader api="fooapi" embedded />
    </div>
  );
}
