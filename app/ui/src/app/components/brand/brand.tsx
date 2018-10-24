import React from 'react';
import logoSymbol from '../../../assets/images/glasses_logo.svg';
import logoText from '../../../assets/images/syndesis-logo-svg-white.svg';

export class Brand extends React.Component {

  toggleNav(): void {
    (() => {
      const mq = window.matchMedia('(min-width: 768px)');
      let page = document.getElementById('primary-nav');
      page = page.parentElement;
      if (mq.matches) {
          page.classList.remove('pf-m-expanded');
          page.classList.toggle('pf-m-collapsed');
      } else {
          page.classList.remove('pf-m-collapsed');
          page.classList.toggle('pf-m-expanded');
      }
      return false;
    })();
  }

  render() {
    return (
      <div className="pf-l-page__header-brand">
        <div className="pf-l-page__header-brand-toggle">
          <button
            className="pf-c-button pf-m-plain"
            id="nav-toggle"
            aria-label="Toggle primary navigation"
            onClick={() => { this.toggleNav(); }} // tslint:disable-line
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>
        </div>
        <a className="pf-l-page__header-brand-link">
          <img className="pf-c-brand pf-m-sm" src={logoSymbol} alt="Syndesis Logo Symbol" />
          <img className="pf-c-brand pf-m-sm" src={logoText} alt="Syndesis Logo Text" />
        </a>
      </div>
    );
  }
}
