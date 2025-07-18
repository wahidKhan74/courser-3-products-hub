import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
import { useState } from "react";

export default function RoutesWithTransition() { 

    const routes = [
        // Define your routes here
        { path: "/home", name:"Home" , element: <Welcome /> },
        { path: "/greetings", name:"Greetings", element: <Greetings /> },
        { path: "/counter", name:"Counter", element: <Counter /> },
        { path: "/basic", name:"Basic Form", element: <BasicForm /> },
        { path: "/login", name:"Login Form", element: <LoginForm /> },
        { path: "/timer", name:"Timer", element: <Timer /> },
        { path: "/dashboard", name:"Dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
        { path: "/dashboard/profile", name:"Profile", element: <Profile /> },
        { path: "/dashboard/settings", name:"Settings", element: <Settings /> },
        { path: "/dashboard/home", name:"Dashboard Home", element: <DashboardHome /> },
        { path: "/user/:id", name:"User Details", element: <UserDetails /> },
        { path: "*", name:"Not Found", element: <NotFound /> }
    ]

    const location = useLocation();
     const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(30);

    const handleClick = (id, name) => {
        console.log(`Clicked on item with id: ${id} and name: ${name}`);
    };

    // This component is used to wrap the Routes with a transition effect
    return (
      <div>
          <TransitionGroup >
            <CSSTransition key={location?.pathname} className="page" timeout={300}>
                <Routes location={location}>
                    {routes.map((route, index) => (
                        <Route 
                            key={index} 
                            path={route.path} 
                            element={route.element} 
                        />
                    ))}
                </Routes>
            </CSSTransition>
        </TransitionGroup>
      </div>
    );
}