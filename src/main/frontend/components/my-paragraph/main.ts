import "./main.scss";

class MyParagraph extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  get text() {
    return this.getAttribute("text");
  }

  render() {
    this.innerHTML = `
    <div class="my-paragraph">
      <p>${this.text}</p>
    </div>
    `;
  }
}

customElements.define('my-paragraph', MyParagraph);
