// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// function Auth(flag) {
//   const user = { loggedIn: true };
//   return user && user.loggedIn;
// }

// function ProtectedRoutes() {
//   const isAuth = Auth();
//   return isAuth ? <Outlet /> : <Navigate to="/" />;
// }

// export { Auth, ProtectedRoutes };

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ProtectedRoutes = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("auth->", auth);

  return auth?.role?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
