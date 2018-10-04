import React from 'react';
export class ApicurioComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<h1 style="color:#fff">Apicurio Web Component Container</h1>`;
  }

  connectedCallback() {
    console.log('apicurio connected');
    this.render();
  }

  disconnectedCallback() {
    console.log('apicurio disconnected');
  }
}
window.customElements.define('apicurio-component', ApicurioComponent);

export interface Props {
  onCommandExecuted?: string;
  onSelectionChanged?: string;
  api: any;
  embedded: boolean;
}

export function ApicurioLoader({api, embedded}: Props) {
  return <apicurio-component />;
}
