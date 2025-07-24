// create a Redux store
import { createStore } from 'redux';

//step 1: initial state
const initialState = {
    count: 0, // count of counter
    products: [] // list of products
};

//step2: reducer function
// A function that returns new state based on current state and action
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1 };
        case 'DECREMENT':
            return {...state, count: state.count - 1 };
        case 'RESET_COUNTER':
            return {...state, count: 0 };
        default:
            return state;
    }
}

//step 3: create store
const store = createStore(reducer);

export default store;