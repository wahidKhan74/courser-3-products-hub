import React from "react";

// function Dashboard() {
//     const [isloggedIn, setIsLoggedIn] = React.useState(false);
//     // This component will render the dashboard for the products hub

//     if (isloggedIn) {
//         return (
//             <div>
//                 <h1>Dashboard</h1>
//                 <p>Welcome to the products hub dashboard!</p>
//                 <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <h1>Please log in to access the dashboard</h1>
//                 <button onClick={() => setIsLoggedIn(true)}>Log In</button>
//             </div>
//         )
//     }
// }

function Dashboard() {
    const [isloggedIn, setIsLoggedIn] = React.useState(false);
    // This component will render the dashboard for the products hub
    return (
        <div>
            {isloggedIn ? (
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome to the products hub dashboard!</p>
                </div>
            ) : (
                <div>
                    <h1>Please log in to access the dashboard</h1>
                </div>
            )}
            <button onClick={() => setIsLoggedIn(!isloggedIn)}>
                {isloggedIn ? "Log Out" : "Log In"}
            </button>
        </div>
    );
}

export default Dashboard;