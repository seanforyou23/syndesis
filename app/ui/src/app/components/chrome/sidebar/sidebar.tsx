import React from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends React.Component {

  render() {
    return (
      <aside className="pf-l-page__sidebar">
        <nav className="pf-c-nav" id="primary-nav" aria-label="Primary Nav Default Example">
          <ul className="pf-c-nav__list">
            <li className="pf-c-nav__item">
              {/* TODO: add aria-current="true for active view */}
              <Link to="/" className="pf-c-nav__link">Home</Link>
            </li>
            <li className="pf-c-nav__item">
              <Link to="/integrations" className="pf-c-nav__link">Integrations</Link>
            </li>
            <li className="pf-c-nav__item">
              <Link to="/connections" className="pf-c-nav__link">Connections</Link>
            </li>
            <li className="pf-c-nav__item">
              <Link to="/customizations" className="pf-c-nav__link">Customizations</Link>
            </li>
            <li className="pf-c-nav__item">
              <Link to="/settings" className="pf-c-nav__link">Settings</Link>
            </li>
            <li className="pf-c-nav__item">
              <Link to="/atlasmap" className="pf-c-nav__link">Atlasmap</Link>
            </li>
            <li className="pf-c-nav__item">
              <Link to="/apicurio" className="pf-c-nav__link">Apicurio</Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
