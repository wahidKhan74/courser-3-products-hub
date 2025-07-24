// create counter with reduct store

function ReduxCounter({ count, increment, decrement, reset }) {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center space-y-4 border border-purple-100">
            <h1 className="text-2xl font-bold text-purple-700">Redux Counter</h1>
            <p className="text-xl text-gray-800">
                Count: <span className="font-semibold text-purple-600">{count}</span>
            </p>
            <div className="flex justify-center gap-4">
                <button onClick={increment} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                    Increment
                </button>
                <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition" >
                    Decrement
                </button>
                <button onClick={reset} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
                    Reset
                </button>
            </div>
        </div>
    );

}

export default ReduxCounter;