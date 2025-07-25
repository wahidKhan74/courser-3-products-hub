// create a Redux store
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { thunk } from 'redux-thunk';

//step 1: initial state
const initialState = {
    counter: { count: 0 }, // count of counter
    todos:[{ id: 1, text: 'Sample Todo', completed: false }], // list of todos
};


//step 3: create store
const store = createStore(rootReducer, applyMiddleware(thunk));
// thunk : This configures Redux to handle async actions using thunk middleware.
export default store;