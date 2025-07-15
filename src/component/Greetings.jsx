const Greetings = ({ name, age }) => {
    return (
        <div className="greetings">
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
        </div>
    );
}

export default Greetings;