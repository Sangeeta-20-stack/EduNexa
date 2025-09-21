// src/pages/LoginPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-blue-200">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
