import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  @property() variant: 'primary' | 'secondary' = 'primary';

  render() {
    return html`
      <button class="btn-${this.variant}">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton
  }
}