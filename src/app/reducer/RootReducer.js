import { combineReducers } from "redux";
import todoListReduce from "./TodoReduce";
import counterReducer from "./CounterReducer";

const rootReducer = combineReducers({
    todos: todoListReduce,
    counter: counterReducer
    // other reducers can be added here
});

export default rootReducer;