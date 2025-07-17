const Greetings = ({ name, age }) => {
    console.log("Greetings component rendered with name:", name, "and age:", age);
    return (
    <div className="greetings bg-white p-6 rounded-xl shadow-md text-center max-w-sm mx-auto mt-10">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Hello, {name}!</h1>
        <p className="text-gray-700 text-lg">You are {age} years old.</p>
    </div>
    );
}

export default Greetings;