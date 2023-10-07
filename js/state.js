const Emitter = mitt();

const InitState = {
  count: 0,
  activeNavHover: '',
};

const validator = {
  get: function (target, key, value) {
    return target[key];
  },
  set: function (target, key, value) {
    console.log(target, key, value);
    return { [key]: value };
  },
};
let State = new Proxy(InitState, validator);
console.log(State.activeNavHover.value, 'changed');
Emitter.on('Increment', ({ count }) => {
  State.count += count;
});

Emitter.on('ACTIVE_NAV_HOVER', ({ activeNavHover }) => {
  State.activeNavHover = activeNavHover;
});

export { State, Emitter };
