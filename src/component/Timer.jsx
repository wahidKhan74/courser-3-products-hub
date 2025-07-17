import React, { useState, useEffect } from 'react';
const Timer = () => { 
    // State to hold the time in seconds and whether the timer is running
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    // Effect to handle the timer logic
    // It sets an interval to update the time every second when the timer is running
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
            <h1 className="text-2xl font-bold mb-6 text-blue-600">
            Timer: {time} seconds
            </h1>
            <div className="flex justify-center space-x-4">
            <button
                onClick={() => setIsRunning(!isRunning)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
                {isRunning ? "Pause" : "Start"}
            </button>
            <button
                onClick={() => setTime(0)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
            >
                Reset
            </button>
            </div>
        </div>
        </div>
    );
}

export default Timer;