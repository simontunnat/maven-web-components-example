class MyParagraph extends HTMLElement {
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
    <p>${this.text}</p>
    `;
  }
}

customElements.define('my-paragraph', MyParagraph);
