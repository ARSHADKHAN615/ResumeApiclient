import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrap = ({ children }) => {
  const AuthUser = useSelector((state) => state.auth.currentUser);

  return <>{AuthUser ? children : window.location.replace("/sign-in")}</>;
};

export default AuthWrap;
