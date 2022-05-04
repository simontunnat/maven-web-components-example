class MyList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.render();
  }

  get entry1() {
    return this.getAttribute("entry1");
  }

  get entry2() {
    return this.getAttribute("entry2");
  }

  render() {
    this.shadowRoot.innerHTML = `
    <ul>
    <my-list-entry text="${this.entry1}"></my-list-entry>
    <my-list-entry text="${this.entry2}"></my-list-entry>
    </ul>
    `;
  }
}

customElements.define('my-list', MyList);
