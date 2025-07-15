import { useState } from 'react';
import styles from './Counter.module.css'; 
// Assuming you have a CSS module for additional styles

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

    // 1. Inline Styles
    const containerStyle = {
        backgroundColor: '#e0f7fa',           // Soft teal background
        padding: '24px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '250px',
        margin: '40px auto',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Segoe UI, sans-serif',
    };

    const buttonStyle = {
        padding: '10px 16px',
        margin: '8px',
        fontSize: '14px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    return (
        <div style={containerStyle} className={styles.wrapper}>
            <h2 className={styles.heading} >Counter: {count}</h2>
            <button   style={buttonStyle} onClick={increment}>Increment</button>
            <button  style={{...buttonStyle, ...buttonHoverStyle}} onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;