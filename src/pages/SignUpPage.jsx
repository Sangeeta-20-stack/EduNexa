// src/pages/SignUp.jsx
import React from "react";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500">
      {/* Navbar */}
      <Navbar />

      {/* SignUp component */}
      <SignUp />
    </div>
  );
};

export default SignUpPage;
