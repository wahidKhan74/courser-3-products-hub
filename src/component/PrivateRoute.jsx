import { Navigate } from "react-router-dom";
import { Auth } from "./auth/auth";

export default function PrivateRoute({ children}) {
     return Auth.checkAuth() ? children : <Navigate to="/login" />;
}