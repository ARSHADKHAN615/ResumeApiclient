import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestWrap = ({children}) => {
  const AuthUser = useSelector((state) => state.auth.currentUser);

  return <>{AuthUser ? <Navigate to="/dashboard" replace /> : children}</>;
};

export default GuestWrap;
