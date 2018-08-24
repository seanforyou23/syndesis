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
    import('./ng').then((mod=>{
      mod.bootstrap();
    }));
    // bootstrap();
  }

  public render () {
    console.log('App.tsx');
    console.log(foo);


    return (
      <div>
        <Alert>I am an Alert with type="error"</Alert>
        {/* <app-atlasmap-dev-root></app-atlasmap-dev-root> */}
        {/* <div dangerouslySetInnerHTML={{__html:'<data-mapper></data-mapper>'}} /> */}
        <div dangerouslySetInnerHTML={{__html:'<test-component></test-component>'}} />
      </div>
    );
  }
}

// export function App({name, enthusiasmLevel = 1}: Props) {
//   console.log('App.tsx');
//   console.log(foo);

//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }

//   return (
//     <div>
//       <h1>{name + getExclamationMarks(enthusiasmLevel)}</h1>
//       <Alert>I am an Alert with type="error"</Alert>
//       {/* <app-atlasmap-dev-root></app-atlasmap-dev-root> */}
//       {/* <div dangerouslySetInnerHTML={{__html:'<data-mapper-error></data-mapper-error>'}} /> */}
//       <div dangerouslySetInnerHTML={{__html:'<test-component></test-component>'}} />
//     </div>
//   );
// }

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }
