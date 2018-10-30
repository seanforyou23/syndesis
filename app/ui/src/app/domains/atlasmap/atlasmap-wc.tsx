import React from 'react';
import { Main } from '../../components/main/main';
import '@atlasmap/atlasmap-data-mapper';

export default class AtlasmapComponent extends React.Component {
  render() {
    return (
      <Main>
        <atlasmap-wc></atlasmap-wc>
      </Main>
    );
  }
}
