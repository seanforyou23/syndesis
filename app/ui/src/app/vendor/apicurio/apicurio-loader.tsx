import React from 'react';
// import { Route } from 'react-router-dom';
export class ApicurioComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<button class="apirucio-wc-btn">web component content</button>`;
  }

  connectedCallback() {
    console.log('apicurio mounted to DOM');
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

  return (
    <div>
      <h1>apicurio-loader.tsx Component for: {api}</h1>
      <div>
        Apicurio Props:
        <ul>
          <li>embedded: {embedded.toString()}</li>
          <li>api: {api}</li>
        </ul>
        <apicurio-component />
      </div>
    </div>
  );
}
