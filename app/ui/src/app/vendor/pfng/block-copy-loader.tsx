import React from 'react';
import 'patternfly-ng/dist/css/patternfly-ng.css';

export class SynBlockCopyComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    import('./block-copy-initializer').then(mod => {
      mod.bootstrap();
    });
  }

  disconnectedCallback() {
    console.log('pfng block copy disconnected');
  }
}
window.customElements.define('block-copy-component', SynBlockCopyComponent);

export interface Props {
  value?: string;
  name: string;
}

export function BlockCopyLoader({value, name}: Props) {

  return (
    <div>
      <h2>Wrapper React Component for {name}</h2>
      <block-copy-component dangerouslySetInnerHTML={{__html: `<pfng-block-copy-loader></pfng-block-copy-loader>`}} />
    </div>
  );
}
