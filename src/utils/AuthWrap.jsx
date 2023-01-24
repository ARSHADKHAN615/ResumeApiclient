import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrap = ({ children }) => {
  const AuthUser = useSelector((state) => state.auth.currentUser);

  return <>{AuthUser ? children : <Navigate to="/sign-in" replace />}</>;
};

export default AuthWrap;
