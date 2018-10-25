import React from 'react';
import { Main } from '../../components/main/main';
import { SubHeader } from '../../components/chrome/subHeader/subHeader';
export function Dashboard() {
  return (
    <Main subHeader={<SubHeader />}>
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
    </Main>
  );
}
