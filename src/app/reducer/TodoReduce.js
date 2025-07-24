
const initialListState = [];
// create a reduce function for managing todos
const todoListReduce = (state =initialListState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'REMOVE_TODO':
            return state.filter(todo=> todo.id !== action.payload);
        default:
            return state;
    }
}

export default todoListReduce;