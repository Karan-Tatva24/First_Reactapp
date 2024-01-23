import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = { isLogin: true };
  return auth.isLogin ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
