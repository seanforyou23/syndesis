// import '@atlasmap/atlasmap-data-mapper';
export class AtlasmapComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `<h1 style="color:#fff">Atlasmap Web Component Container</h1>`;
    // shadowRoot.innerHTML = `<data-mapper-example-host>`;
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
