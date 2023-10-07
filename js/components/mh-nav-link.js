import { Emitter } from '../state.js';

class MhNavLink extends HTMLElement {
  constructor() {
    super();
  }

  enterHandler() {
    Emitter.emit('ACTIVE_NAV_HOVER', {
      activeNavHover: this.getAttribute('route'),
    });
  }

  leaveHandler() {}

  connectedCallback() {
    this.addEventListener('mouseenter', this.enterHandler);
    this.addEventListener('mouseleave', this.leaveHandler);
  }
}

export { MhNavLink };
