import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  children,
  isAuthenticated,
  setIsAuthenticated,
}) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}
