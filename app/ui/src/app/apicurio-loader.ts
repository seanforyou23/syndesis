export class ApicurioLoader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `<button>Will eventually be apicurio web component</button>`
  }

  connectedCallback() {
    console.log('apicurio mounted to DOM');
  }

  disconnectedCallback() {
    console.log('apicurio disconnected');
  }
}
