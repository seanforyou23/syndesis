import React from 'react';
import { Brand } from '../../brand/brand';
import { HeaderTools } from '../header/header-tools/header-tools';

export class Header extends React.Component {

  render() {
    return (
      <header role="banner" className="pf-l-page__header">
        <Brand />
        <HeaderTools />
      </header>
    );
  }
}
