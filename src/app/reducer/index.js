import { combineReducers } from "redux";
import todoListReduce from "./TodoReduce";
import counterReducer from "./CounterReducer";
import postReducer from "./PostsReducer";

const rootReducer = combineReducers({
    todos: todoListReduce,
    counter: counterReducer,
    posts: postReducer
    // other reducers can be added here
});

export default rootReducer;