// src/components/Login.jsx
import React, { useState } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add API login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl flex w-11/12 max-w-5xl overflow-hidden">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/login-image.jpg" // Replace with your image path
            alt="Login"
            className="h-full w-full object-cover rounded-l-3xl"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mb-6">Sign in to continue learning</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/70"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/70"
            />

            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              → Login
            </button>

            <div className="flex flex-col gap-2 mt-4">
              <button className="w-full border border-gray-300 p-3 rounded-xl hover:bg-gray-100 flex items-center justify-center gap-2 transition-colors">
                <FaEnvelope /> Login with Email link
              </button>
              <button className="w-full border border-gray-800 text-gray-800 p-3 rounded-xl hover:bg-gray-100 flex items-center justify-center gap-2 transition-colors">
                <FaGithub /> Login with GitHub
              </button>
            </div>

            <div className="flex justify-between text-sm mt-4 text-gray-600">
              <span className="hover:underline cursor-pointer">Forgot Password?</span>
              <span
                className="hover:underline cursor-pointer text-teal-600"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
