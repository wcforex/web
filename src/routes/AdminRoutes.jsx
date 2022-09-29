import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserState } from "../containers/state/store";

export default function AdminRoutes({ path, component: Component, ...rest }) {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);
  const user = useUserState((state) => state.user);

  return isLoggedIn && user.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={(path = window.location.pathname)} />
  );
}
