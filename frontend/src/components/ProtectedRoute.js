import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn }) => {
  return loggedIn ? <Component /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
