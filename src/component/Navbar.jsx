// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <a href="/">Products Hub</a>
//       </div>
//       <ul className="navbar-menu">
//         <li><a href="/products">Products</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react'
import Welcome from './welcome/Welcome';
import Greetings from './Greetings';
import Counter from './counter/Counter';
import Dashboard from './Dashboard';
import BasicForm from './forms/BasicForm';
import LoginForm from './forms/LoginForm';
import Timer from './Timer';
import DashboardHome from './DashboardHome';
import Profile from './Profile';
import Settings from './Settings';
import UserDetails from './UserDetails';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import { TheamContext } from './ThemeContext';
import ReCounter from './counter/ReCounter';
import PostDetails from './PostDetails';

const Navbar = () => {

    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(30);
    const handleClick = (id, name) => {
        console.log(`Clicked on item with id: ${id} and name: ${name}`);
    };

    //step4:  Access the theme context
    const { theme , toggleTheme } = useContext(TheamContext);

    const routes = [
        { path: '/home', name: "Welcome", element: <Welcome name={name} age={age} /> },
        { path: '/greetings', name: "Greetings", element: <Greetings name={name} age={age} /> },
        // { path: '/counter', name: "Counter", element: <Counter /> },
        // { path: '/re-counter', name: "Re Counter", element: <ReCounter /> },
        // { path: '/basic', name: "Basic", element: <BasicForm /> },
        { path: '/posts', name: "Posts", element: <PostDetails /> },
        { path: '/login', name: "Login", element: <LoginForm /> },
        { path: '/timer', name: "Timer", element: <Timer /> },
        {
            path: '/dashboard', name: "Dashboard",
            element: (<PrivateRoute>
                <Dashboard />
            </PrivateRoute>
            ),
            children: [
                { path: '/dashboard/home', name: "Dashboard Home", element: <DashboardHome /> },
                { path: '/dashboard/profile', name: "Profile", element: <Profile /> },
                { path: '/dashboard/settings', name: "Settings", element: <Settings /> }
            ]
        },
        { path: '/users', name: "All users", element: <UserDetails /> },
        { path: '/users/:userId', name: "User Details", element: <UserDetails /> },
        { path: '*', name: "Not Found", element: <NotFound /> }
    ];

    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (routePath) => {
        setOpenDropdown(openDropdown === routePath ? null : routePath);
    };

    return (
        <Router>
            <ul className="flex space-x-4 p-4 bg-gray-200 relative">
                {routes
                    .filter(route => route.path !== '*')
                    .map(route => (
                        <li key={route.path} className="relative">
                            {route.children && route.children.length > 0 ? (
                                <>
                                    {/* Button for dropdown toggle */}
                                    <button
                                        onClick={() => toggleDropdown(route.path)}
                                        className="flex items-center gap-1 px-4 py-2  hover:bg-gray-100 transition"
                                    >
                                        {route.name}
                                        <svg className="w-4 h-4 transform transition-transform" style={{ transform: openDropdown === route.path ? 'rotate(180deg)' : 'rotate(0deg)' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown content */}
                                    {openDropdown === route.path && (
                                        <ul className="absolute top-full mt-1 left-0 w-48 shadow-md z-50">
                                            {route.children.map(child => (
                                                <li key={child.path}>
                                                    <Link
                                                        to={child.path}
                                                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
                                                        onClick={() => setOpenDropdown(null)} // close dropdown after click
                                                    >
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={route.path}
                                    className="px-4 py-2 hover:bg-gray-100 transition"
                                >
                                    {route.name}
                                </Link>
                            )}
                        </li>
                    ))}

                <li className="ml-auto">
                    <button onClick={toggleTheme} className="px-4 py-2 mb-6 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Switch to { theme !== "light" ? "Light" : "Dark"} Mode
                    </button>
                </li>
            </ul>

            <AnimatePresence mode="wait">
                <Routes >
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        >
                            {route.children && route.children.map(child => (
                                <Route
                                    key={child.path}
                                    path={child.path}
                                    element={child.element}
                                />
                            ))}
                        </Route>
                    ))}
                </Routes>
            </AnimatePresence>
        </Router>
    );
};

export default Navbar;