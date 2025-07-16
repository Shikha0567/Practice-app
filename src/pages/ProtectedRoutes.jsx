import React from "react";
import { Navigate, Outlet } from "react-router";
import Login from "./Login";

const ProtectedRoutes = () => {
  //write logic for authentication inside this wrapper component, it will render the children routes
  //if condition is valid otherwise redirect to login page or any fallback page based on the requirement
  //use Navigate component instead of directly rendering the Login component, otherwise the path won't
  //get changed.

  const isAuthenticated = false;

  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoutes;
