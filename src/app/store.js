// create a Redux store
import { createStore } from 'redux';
import rootReducer from './reducer/RootReducer';

//step 1: initial state
const initialState = {
    counter: { count: 0 }, // count of counter
    todos:[{ id: 1, text: 'Sample Todo', completed: false }] // list of todos
};


//step 3: create store
const store = createStore(rootReducer, initialState);

export default store;