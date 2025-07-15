import  { useState } from 'react';

function Counter() {
    // State to keep track of the count
    // count is the state variable, initialized to 0.
    // setCount is the function to update the count.
    // setCount(newValue) updates the value and re-renders the component.
    // useState is a React hook that allows you to add state to functional components.
    const [count, setCount] = useState(0);
    
    // Functions to increment and decrement the count
    // increment increases the count by 1
    const increment = () => {
        setCount(count + 1);
    };
    
    // decrement decreases the count by 1
    const decrement = () => {
        setCount(count - 1);
    };
    
    return (
        <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;