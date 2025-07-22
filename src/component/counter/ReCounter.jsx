import React, { useReducer } from 'react';

// create function reduceer for counter
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count : state.count + 1 };
        case 'DECREMENT':
            return  { count : state.count - 1 };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

// Counter component using useReducer
function ReCounter() {
    // useReducer hook to manage state
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    // Inline styles for the component
    const containerStyle = {
        backgroundColor: '#e0f7fa',
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
        <div style={containerStyle}>
            <h2>Counter: {state.count}</h2>
            <button style={buttonStyle} onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button style={{ ...buttonStyle, ...buttonHoverStyle }} onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}

export default ReCounter;