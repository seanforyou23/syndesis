import React from 'react';
import { Main } from '../../components/main/main';
import '@atlasmap/atlasmap-wc';

export default class AtlasmapComponent extends React.Component {
  render() {
    return (
      <Main>
        <h1>lazy loaded atlasmap</h1>
        <atlasmap-wc></atlasmap-wc>
      </Main>
    );
  }
}
