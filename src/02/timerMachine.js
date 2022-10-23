import { createMachine, assign } from 'xstate';

export const timerMachine = createMachine({
  initial: 'idle',
  context: {
    duration: 60,
    elapsed: 0,
    interval: 0.1
  },
  states: {
    idle: {
      // Reset duration and elapsed on entry
      // ...
      entry: assign((ctx) => ({duration: 60, elapsed: 0})),
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      on: {
        TOGGLE: 'paused',
        ADD_MINUTE: {
          actions: assign((ctx) => {
            return {duration: ctx.duration + 60}
          })
        }
      },
    },
    paused: {
      on: {
        TOGGLE: 'running',
        RESET: 'idle',
      },
    },
  },
});
