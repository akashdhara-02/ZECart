import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

// Wraps pages that require the user to be logged in
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null; // wait until we know if user is logged in

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
