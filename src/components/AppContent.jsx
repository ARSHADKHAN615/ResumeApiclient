import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GetApi from "../pages/GetApi";
import AuthWrap from "../utils/AuthWrap";

const AppContent = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <AuthWrap>
              <Home />
            </AuthWrap>
          }
        />
        <Route
          path="/get-api"
          element={
            <AuthWrap>
              <GetApi />
            </AuthWrap>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </>
  );
};

export default AppContent;
