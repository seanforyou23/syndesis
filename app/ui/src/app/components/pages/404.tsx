import React from 'react';
import { NavLink } from 'react-router-dom';
import { Alert } from 'patternfly-react';
import { Main } from '../../components/main/main';
export function NotFound() {
  return (
    <Main subHeader={false}>
      <h1></h1>
      <Alert>404! This view hasn't been created yet.</Alert>
      <NavLink to="/" className="pf-c-nav__link">Back to Dashboard</NavLink>
    </Main>
  );
}
