import React from 'react';

export class SubHeader extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section className="pf-l-page__main-section pf-m-light">
        <div className="pf-c-content">
          <h1>Syndesis Reacts</h1>
          <p className="syn-italic syn-smaller">
            [sin′dəsis] Etymology: Gk, syn, together, dein, to bind.
            surgical fixation of a joint. Also called arthrodesis.</p>
          <p><a href="//syndesis.io/">Syndesis</a> is a flexible,
          customizable platform that provides core integration capabilities
          as a service. It can be run on the cloud or on premises with OpenShift
          or Kubernetes, is fully extensible and, best of all, is open source.</p>
        </div>
      </section>
    );
  }
}
