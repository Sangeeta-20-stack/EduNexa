import React, { useState } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa"; // import icons
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import signUp from "../assets/signup.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // <-- initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl flex w-11/12 max-w-5xl overflow-hidden">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={signUp} 
            alt="Sign Up"
            className="h-full w-full object-cover rounded-l-3xl"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Create Your Account</h2>
          <p className="text-gray-600 mb-6">Join EduNexa and unlock smarter learning</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/70"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/70"
            />
            <div className="flex gap-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-1/2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/70"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-1/2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/70"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-colors shadow-md"
            >
              Sign Up
            </button>

            <div className="flex flex-col gap-2 mt-4">
              <button className="w-full border border-gray-300 p-3 rounded-xl hover:bg-gray-100 flex items-center justify-center gap-2 transition-colors">
                <FaEnvelope /> Sign up with Email
              </button>
              <button className="w-full border border-gray-800 text-gray-800 p-3 rounded-xl hover:bg-gray-100 flex items-center justify-center gap-2 transition-colors">
                <FaGithub /> Sign up with GitHub
              </button>
            </div>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <span
                className="text-teal-600 hover:underline cursor-pointer"
                onClick={() => navigate("/login")} // <-- navigate to login page
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
