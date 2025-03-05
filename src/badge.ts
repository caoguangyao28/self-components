import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { css } from 'lit';

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

@customElement('my-badge')
export class MyBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .badge {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 20px;
      height: 20px;
      padding: 0 4px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 500;
      background-color: var(--badge-bg, #2563eb);
      color: var(--badge-text, #fff);
    }

    .primary {
      --badge-bg: #2563eb;
      --badge-text: #fff;
    }

    .secondary {
      --badge-bg: #6b7280;
      --badge-text: #fff;
    }

    .success {
      --badge-bg: #22c55e;
      --badge-text: #fff;
    }

    .warning {
      --badge-bg: #eab308;
      --badge-text: #000;
    }

    .danger {
      --badge-bg: #ef4444;
      --badge-text: #fff;
    }

    .top-right {
      top: 0;
      right: 0;
      transform: translate(50%, -60%);
    }

    .top-left {
      top: 0;
      left: 0;
      transform: translate(-50%, -60%);
    }

    .bottom-right {
      bottom: 0;
      right: 0;
      transform: translate(50%, 60%);
    }

    .bottom-left {
      bottom: 0;
      left: 0;
      transform: translate(-50%, 60%);
    }
  `;
  @property({ type: String }) variant: Variant = 'primary';
  @property({ type: String }) position: Position = 'top-right';

  render() {
    return html`
      <slot></slot>
      <div class="badge ${this.position} ${this.variant}">
        <slot name="content"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-badge': MyBadge;
  }
}