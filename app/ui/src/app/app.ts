import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import 'bootstrap/dist/css/bootstrap.css';

import { ApicurioLoader } from './apicurio-loader';

class SyndesisUI extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `<h1>Syndesis via Web Component <apicurio-loader></apicurio-loader><h1>`;
  }

  connectedCallback() {
    console.log('syndesis mounted to DOM');
  }

  disconnectedCallback() {
    console.log('syndesis disconnected');
  }
}

window.customElements.define('syndesis-ui', SyndesisUI);
window.customElements.define('apicurio-loader', ApicurioLoader);
