import React from 'react';
import 'zone.js/dist/zone';

export class SynAtlasmapComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    import('./atlasmap-initializer').then(mod => {
      mod.bootstrap();
    });
  }

  disconnectedCallback() {
    console.log('atlasmap disconnected');
  }
}
window.customElements.define('atlasmap-component', SynAtlasmapComponent);

export interface Props {
  name?: string;
}

export function AtlasmapLoader({name}: Props) {

  return (
    <div>
      <h2>Wrapper React Component for {name}</h2>
      <atlasmap-component dangerouslySetInnerHTML={{__html: '<data-mapper-loader></data-mapper-loader>'}} />
    </div>
  );
}
