import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import TokenService from "../containers/services/token.service";

const AdminRoutes = ({ path, component: Component, ...rest }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const user = TokenService.getUser();
    if (user && user.accessToken) {
      setUserData(user.user);
    }
  }, []);

  return userData && userData.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={(path = window.location.pathname)} />
  );
};

export default AdminRoutes;
