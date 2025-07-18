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
import { useState } from 'react'
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

const Navbar = ({ items }) => {

    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(30);
    const handleClick = (id, name) => {
        console.log(`Clicked on item with id: ${id} and name: ${name}`);
    };

    return (
        <Router>
            <ul className="flex space-x-4 p-4 bg-gray-200">
                {items.map(item => (
                    <li className="cursor-pointer hover:text-blue-500 px-2 py-1 rounded hover:bg-gray-300 transition-colors duration-200"
                        key={item.id} >
                        <Link to={item.name.toLowerCase()} > {item.name} </Link>
                    </li>
                ))}
            </ul>

            <AnimatePresence mode="wait">
                <Routes >
                    {/*  Define the routes for the application */}
                    <Route path="/home" element={<Welcome />} />
                    <Route path="/greetings" element={<Greetings name={name} age={age} />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/basic" element={<BasicForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/timer" element={<Timer />} />

                    {/* Nested routing */}
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }>
                        <Route index element={<DashboardHome />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>

                    {/* Route with parameter */}
                    <Route path="/users/:userId" element={<UserDetails />} />

                    {/* Catch-all route */}
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </AnimatePresence>
        </Router>
    );
};

export default Navbar;