export const timerMachineConfig = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE: {
          target: 'running'
        }
      }
    },
    running: {
      on: {
        TOGGLE: {
          target: 'paused'
        }
      }
    },
    paused: {
      on: {
        TOGGLE: {
          target: 'running'
        },
        RESET: {
          target: 'idle'
        }
      }
    },
  }
};

export const timerMachine = (state, event) => {
  return timerMachineConfig.states[state].on[event.type].target || state
};
