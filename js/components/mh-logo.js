class MhLogo extends HTMLElement {
  constructor() {
    super();
    this.el = document.querySelector('.hp-logo-inner');
    this.elVideo = document.querySelector('.hp-logo-video');
    this._init();
  }

  connectedCallback() {}

  _init() {
    const isNotPortrait = window?.innerWidth / window?.innerHeight >= 1;
    const rotateZValue = isNotPortrait
      ? -((Math.atan(window?.innerHeight / window?.innerWidth) * 180) / Math.PI)
      : -30;

    anime({
      targets: this.el,
      transformOrigin: ['0 50%', '50% 50%'],
      scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1000 },
      ],
      rotateZ: [
        { value: 0, duration: 0, delay: 800 },
        {
          value: rotateZValue,
          duration: 2000,
          delay: 800,
          easing: 'spring(1, 100, 5, 5)',
        },
      ],
      duration: 4000,
      easing: 'easeInOutSine',
    });
  }
}

export { MhLogo };
