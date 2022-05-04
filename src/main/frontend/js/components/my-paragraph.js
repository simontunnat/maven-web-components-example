class MyParagraph extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});

    const template = document.getElementById('my-paragraph');
    const templateClone = template.content.cloneNode(true);

    this.shadowRoot.appendChild(templateClone);
  }
}

customElements.define('my-paragraph', MyParagraph);
