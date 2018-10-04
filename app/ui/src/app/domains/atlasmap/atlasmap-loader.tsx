import React from 'react';
export class AtlasmapComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<h1 style="color:#fff">Atlasmap Web Component Container</h1>`;
  }

  connectedCallback() {
    console.log('atlasmap connected');
    this.render();
  }

  disconnectedCallback() {
    console.log('atlasmap disconnected');
  }
}
window.customElements.define('atlasmap-component', AtlasmapComponent);

export interface Props {
  onCommandExecuted?: string;
  onSelectionChanged?: string;
  api: any;
  embedded: boolean;
}

export function AtlasmapLoader({api, embedded}: Props) {
  return <atlasmap-component />
}
