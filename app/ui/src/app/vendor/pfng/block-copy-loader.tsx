import React from 'react';

export class BlockCopyComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<button class="pfng-wc-btn">pfng block copy goes here</button>`;
  }

  connectedCallback() {
    console.log('pfng block copy mounted to DOM');
    this.render();
  }

  disconnectedCallback() {
    console.log('pfng block copy disconnected');
  }
}
window.customElements.define('block-copy-component', BlockCopyComponent);

export interface Props {
  value?: string;
}

export function BlockCopyLoader({value}: Props) {

  return (
    <div>
      <h1>block-copy-loader.tsx Component for: {value}</h1>
      <div>
        BlockCopy Props:
        <ul>
          <li>embedded: {value}</li>
        </ul>
        <block-copy-component />
      </div>
    </div>
  );
}
