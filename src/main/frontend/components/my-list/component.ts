import "../../core/core.ts";
import "./component.scss";

class MyList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  get entry1() {
    return this.getAttribute("entry1");
  }

  get entry2() {
    return this.getAttribute("entry2");
  }

  render() {
    this.innerHTML = `
    <div class="my-list">
      <my-paragraph text="${this.entry1}"></my-paragraph>
      <my-paragraph text="${this.entry2}"></my-paragraph>
    </div>
    `;
  }
}

customElements.define('my-list', MyList);
