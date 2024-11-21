import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ redirectPath = "/login" }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
