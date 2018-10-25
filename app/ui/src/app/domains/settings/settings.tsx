import React from 'react';
import { Main } from '../../components/main/main';

export const SettingsSubHeader = (props: any) => {
  return (
    <section className="pf-l-page__main-section pf-m-light">
      <div className="pf-c-content">
      <h1>OAuth Application Management</h1>
        <p>
        To connect to an application that uses the OAuth protocol, obtain
        a client ID and a client secret from the application. See the
        documentation for help.</p>
        <p>During registration, enter this callback URL:
          <code>https://syndesis-staging.b6ff.rh-idev.openshiftapps.com/api/v1/credentials/callback</code>
        </p>
      </div>
    </section>
  );
};

export function Settings() {
  return (
  <Main subHeader={<SettingsSubHeader />}>
    <button className="pf-c-button pf-m-primary">pf3 primary button</button>
    <button className="pf-c-button pf-m-link">pf3 link button</button>
  </Main>
  );
}
