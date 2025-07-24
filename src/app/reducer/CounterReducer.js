const initialCounterState = { count: 0 };
//step2: reducer function
// A function that returns new state based on current state and action
function counterReducer(state=initialCounterState, action) {
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

export default counterReducer;