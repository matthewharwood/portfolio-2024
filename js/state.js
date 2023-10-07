import { signal } from '../../node_modules/@preact/signals-core/dist/signals-core.mjs';

const Emitter = mitt();

const State = {
  count: 0,
  activeNavHover: signal(''),
};

Emitter.on('Increment', ({ count }) => {
  State.count += count;
});

Emitter.on('ACTIVE_NAV_HOVER', ({ activeNavHover }) => {
  State.activeNavHover = activeNavHover;
});

export { State, Emitter };
