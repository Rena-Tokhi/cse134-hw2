// Custom Element #2 (<hello-console>) logs a message to the console only.
class HelloConsole extends HTMLElement {
  connectedCallback() {
    console.log('Hello World!');
  }
}

customElements.define('hello-console', HelloConsole);
