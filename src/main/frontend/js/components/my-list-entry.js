class MyListEntry extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.render();
  }

  get text() {
    return this.getAttribute("text");
  }

  render() {
    this.shadowRoot.innerHTML = `
    <li>${this.text}</li>
    `;
  }
}

customElements.define('my-list-entry', MyListEntry);
