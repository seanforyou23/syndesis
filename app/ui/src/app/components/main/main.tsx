import React from 'react';
import { SubHeader } from '../chrome/subHeader/subHeader';
import './main.scss';

interface MainProps {
  subHeader?: React.ReactNode;
}

export class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    let subHeader;

    if (this.props.subHeader) {
      subHeader = this.props.subHeader;
    } else if (this.props.subHeader === false) {
      subHeader = null;
    }

    return (
      <main role="main" className="pf-l-page__main">

        {subHeader}

        <section className="pf-l-page__main-section">
          {this.props.children}
        </section>

      </main>
    );
  }
}
