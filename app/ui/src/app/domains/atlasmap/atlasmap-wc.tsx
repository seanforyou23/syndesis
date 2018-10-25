import React from 'react';
import { Main } from '../../components/main/main';
// import '@atlasmap/atlasmap-data-mapper/atlasmap-wc';

export default class AtlasmapComponent extends React.Component {
  render() {
    // return <atlasmap-wc></atlasmap-wc>
    return (
      <Main>
        <h1>lazy loaded atlasmap</h1>
      </Main>
    );
  }
}
