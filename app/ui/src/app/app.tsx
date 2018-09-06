import React from 'react';

import { Alert } from 'patternfly-react';

import 'patternfly/dist/css/patternfly.css';
import 'patternfly-react/dist/css/patternfly-react.css';

import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import { ApicurioLoader } from './vendor/apicurio/apicurio-loader';
import { BlockCopyLoader } from './vendor/pfng/block-copy-loader';
import { AtlasmapLoader } from './vendor/atlasmap/atlasmap-loader';
export interface Props {
  name: string;
}

export function App({name}: Props) {

  return (
    <div className="container-fluid">
      <h1 className="text-center">{name} Application</h1>
      <div className="row">
        <div className="col-md-3">
          <h2>Native Patternfly React Component Support</h2>
          <Alert type="success">Alert Component imported from pf-react</Alert>
        </div>
        <div className="col-md-3">
          <ApicurioLoader name="Embedded Apicurio" embedded />
        </div>
        <div className="col-md-3">
          <BlockCopyLoader value="abc123" name="Embedded PFNG Component" />
        </div>
        <div className="col-md-3">
          <AtlasmapLoader name="Embedded Atlasmap" />
        </div>

      </div>

    </div>

  );
}
