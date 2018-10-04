

export class ApicurioComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `<h1 style="color:#fff" class="foo">Apicurio Web Component Container</h1>`;
  }

  connectedCallback() {
    console.log('apicurio connected');
    this.render();
  }

  disconnectedCallback() {
    console.log('apicurio disconnected');
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
    console.log(attrName, oldVal, newVal);
  }
}
window.customElements.define('apicurio-component', ApicurioComponent);
