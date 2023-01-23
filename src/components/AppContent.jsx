import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GetApi from "../pages/GetApi";

const AppContent = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/get-api" element={<GetApi />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </>
  );
};

export default AppContent;
