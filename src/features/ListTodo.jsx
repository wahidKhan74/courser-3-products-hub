// create a ListTodo component

const ListTodo = ({todos, removeTodo}) => {

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Todo List</h2>
            <ul className="space-y-3">
                {todos.map((todo, index) => (
                <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm"
                >
                    <span className="text-gray-800">{todo.text}</span>
                    <button
                    onClick={() => removeTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium transition"
                    >
                    Remove
                    </button>
                </li>
                ))}
            </ul>
            </div>
    );
}

export default ListTodo;