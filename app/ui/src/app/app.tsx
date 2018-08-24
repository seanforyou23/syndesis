import React from 'react';
import { Alert } from 'patternfly-react';
import foo from './test.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'patternfly-react/dist/css/patternfly-react.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export function App({name, enthusiasmLevel = 1}: Props) {
  console.log('App.tsx');
  console.log(foo);

  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div>
      <h1>{name + getExclamationMarks(enthusiasmLevel)}</h1>
      <Alert>I am an Alert with type="error"</Alert>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
