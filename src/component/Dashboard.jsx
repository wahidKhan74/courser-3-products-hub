import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Auth } from "./auth/auth";

export default function Dashboard() {
    const location = useLocation();
    const email = location.state?.email || "Guest";
     const navigate = useNavigate();

    const handleLogout = () => {
        Auth.logout(); // Clear authentication state
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="p-4">
           <h1 className="text-2xl font-bold mb-4">Dashboard for {email}</h1>

              <p className="mb-4">Welcome to your dashboard! Here you can manage your account and settings.</p>

                <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                    Logout
                </button>

            {/* Sub Navigation links for the dashboard */}
           <nav className="mb-4">
               <NavLink to="" end className="text-blue-600 hover:underline">Home</NavLink>
               <NavLink to="profile" className="text-blue-600 hover:underline">Profile</NavLink>
               <NavLink to="settings" className="text-blue-600 hover:underline">Settings</NavLink>
            </nav>

            {/* Outlet for nested routes */}
            {/* This is where the nested components will be rendered */}
            <Outlet />
        </div>
    );
}