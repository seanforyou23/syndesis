import React from 'react';
import { NavLink } from 'react-router-dom';

export class Sidebar extends React.Component {

  render() {
    return (
      <aside className="pf-l-page__sidebar">
        <nav className="pf-c-nav" id="primary-nav" aria-label="Primary Nav Default Example">
          <ul className="pf-c-nav__list">
            <li className="pf-c-nav__item">
              {/* TODO: add aria-current="true for active view */}
              <NavLink to="/" className="pf-c-nav__link">Home</NavLink>
            </li>
            <li className="pf-c-nav__item">
              <NavLink to="/integrations" className="pf-c-nav__link">Integrations</NavLink>
            </li>
            <li className="pf-c-nav__item">
              <NavLink to="/connections" className="pf-c-nav__link">Connections</NavLink>
            </li>
            <li className="pf-c-nav__item">
              <NavLink to="/customizations" className="pf-c-nav__link">Customizations</NavLink>
            </li>
            <li className="pf-c-nav__item">
              <NavLink to="/settings" className="pf-c-nav__link">Settings</NavLink>
            </li>
            <li className="pf-c-nav__item">
              <NavLink to="/atlasmap" className="pf-c-nav__link">Atlasmap</NavLink>
            </li>
            <li className="pf-c-nav__item">
              <NavLink to="/apicurio" className="pf-c-nav__link">Apicurio</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
