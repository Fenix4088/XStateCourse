import { createMachine, assign } from 'xstate';

// Parameterize the assign actions here:
// const tick = ...
// const addMinute = ...
// const reset = ...

export const timerMachine = createMachine({
  initial: 'idle',
  context: {
    duration: 60,
    elapsed: 0,
    interval: 0.1,
  },
  states: {
    idle: {
      entry: 'reset',
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      on: {
        // On the TICK event, the context.elapsed should be incremented by context.interval
        // ...
        TICK: {
          actions: 'tick'
        },
        TOGGLE: 'paused',
        ADD_MINUTE: {
          actions: 'addMinute',
        },
      },
    },
    paused: {
      on: {
        TOGGLE: 'running',
        RESET: 'idle',
      },
    },
  },
}, {
  actions: {
    addMinute: assign({
      duration: (ctx) => ctx.duration + 60,
    }),
    reset: assign({
      duration: 60,
      elapsed: 0,
    }),
    tick: assign((ctx) => {
      return {
        elapsed: ctx.elapsed + ctx.interval
      }
    })
  }
});
