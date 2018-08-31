import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import React from 'react';
import { Alert } from 'patternfly-react';
import foo from './test.json';
import '@atlasmap/atlasmap-data-mapper';

import 'bootstrap/dist/css/bootstrap.css';
import 'patternfly-react/dist/css/patternfly-react.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export class App extends React.Component<Props> {
  public componentDidMount() {
    import('./ng').then((mod => {
      mod.bootstrap();
    }));
    // bootstrap();
  }

  public render() {
    console.log('App.tsx');
    console.log(foo);

    return (
      <div>
        <Alert>I am an Alert with type="error"</Alert>
        {/* <app-atlasmap-dev-root></app-atlasmap-dev-root> */}
        {/* <div dangerouslySetInnerHTML={{__html:'<data-mapper-example-host></data-mapper-example-host>'}} /> */}
        <div dangerouslySetInnerHTML={{__html:'<test-component></test-component>'}} />
      </div>
    );
  }
}
