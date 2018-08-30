import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import 'bootstrap/dist/css/bootstrap.css';

class SyndesisUI extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `<h1>Syndesis via Web Component<h1>`;
  }

  connectedCallback() {
    console.log('mounted to DOM');
  }

  disconnectedCallback() {
    console.log('disconnected');
  }
}

window.customElements.define('syndesis-ui', SyndesisUI);
