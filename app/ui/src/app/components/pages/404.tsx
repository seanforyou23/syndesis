import React from 'react';
import { Alert } from 'patternfly-react';
import { Main } from '../../components/main/main';
export function NotFound() {
  return (
    <Main>
      <h1>404!</h1>
      <Alert>I am an Alert imported from PF-React</Alert>
      <p className="pf-c-content">
        <a href="#">link</a>
        <br />
        <button className="pf-c-button pf-m-link">button</button>
      </p>
    </Main>
  );
}
