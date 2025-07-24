// create an AddTodo component
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = ({addTodo}) => {

    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };
 
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Add Todo</h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter todo text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
                >
                Add Todo
                </button>
            </form>
            </div>
    );
}

export default AddTodo;