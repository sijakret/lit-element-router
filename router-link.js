import { LitElement, html } from 'lit-element'

export class RouterLink extends LitElement {
    constructor() {
        super()
        this.addEventListener('click', this.clickHandler.bind(this))

    }
    clickHandler(event) {
        window.history.pushState({}, null, event.target.href + window.location.search)
        window.dispatchEvent(new CustomEvent('route'))
    }
    static get properties() {
        return {
            href: { type: String }
        }
    }
    render() {
        return html`
            <style>
                ::slotted(*) {
                    pointer-events: none;
                }
            </style>
            <slot></slot>
        `
    }
}

customElements.define('router-link', RouterLink)
