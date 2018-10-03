import React from 'react';
import { Link, Route } from 'react-router-dom';

export class Main extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <main role="main" className="pf-l-page__main">

        {/* the top section */}
        <section className="pf-l-page__main-section pf-m-light">
          <div className="pf-c-content">
            <h1>Syndesis Reacts</h1>
            <p>
              Body text should be Overpass Regular at 16px. It should have leading of 24px because
              <br /> of it’s relative line height of 1.5.
            </p>
          </div>
        </section>

        {/* the main content area */}
        <section className="pf-l-page__main-section">

          <div className="pf-l-gallery pf-m-gutter">

            {/* a card */}
            <div className="pf-l-gallery__item">
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  Top 5 Integrations
                </div>
              </div>
            </div>

            <div className="pf-l-gallery__item">
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  Integration Board
                </div>
              </div>
            </div>

            <div className="pf-l-gallery__item">
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  Recent Updates
                </div>
              </div>
            </div>

            <div className="pf-l-gallery__item">
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  Uptime
                </div>
              </div>
            </div>

          </div>

        </section>

      </main>
    );
  }
}
