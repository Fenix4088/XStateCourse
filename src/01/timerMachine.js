import { createMachine } from 'xstate';

// Use the machine you created in Exercise 00
// export const timerMachine = // ...

export const timerMachine = createMachine({
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
})