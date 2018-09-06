import React from 'react';

export class ApicurioComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <p>Embedded within a shadowRoot context (inspect with dev tools)</p>
    `;
  }

  connectedCallback() {
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
  api?: any;
  name: string;
  embedded: boolean;
}

export function ApicurioLoader({name}: Props) {

  return (
    <div>
      <h2>Wrapper React Component for {name}</h2>
      <apicurio-component />
    </div>
  );
}
