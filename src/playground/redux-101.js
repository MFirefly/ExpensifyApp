import {createStore} from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

// Function given to 'creteStore' is called a Reducer.
// Actions describe the fact that something happened, but don't specify
// how the application's state changes in response. That is the job of reducers.
// They decide what to with action

// Reducers
// 1. Reducers are pure functions (pure means: output only determined by input)
// 2. Never change state or action (input args)

// Example of not-pure function (output depends also upon global variable, and not only input)
// let a = 10;
// const add = (b) => {
//     return a + b;
// };
//
// let result = 10;
// const add = (a, b) => {
//     result = a + b;
// };

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - its an object that gets sent to the store

// I'd like to increment the count

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));