// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f4b4a] text-white py-10 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand & Description */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            <span className="text-[#3bb19f]">Edu</span>Nexa
          </h1>
          <p className="text-gray-200 text-sm">
            EduNexa is your AI-powered learning companion. Learn smarter, track
            your progress, and join a community of learners worldwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#1bbf9d]">
              <FaGithub size={22} />
            </a>
            <a href="#" className="hover:text-[#1bbf9d]">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:text-[#1bbf9d]">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="hover:text-[#1bbf9d]">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-1 text-gray-200">
            <li className="hover:text-[#1bbf9d] cursor-pointer">Home</li>
            <li className="hover:text-[#1bbf9d] cursor-pointer">About</li>
            <li className="hover:text-[#1bbf9d] cursor-pointer">Courses</li>
            <li className="hover:text-[#1bbf9d] cursor-pointer">Testimonials</li>
            <li className="hover:text-[#1bbf9d] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Get in the Loop</h2>
          <p className="text-gray-200 mb-3 text-sm">
            Subscribe to get updates, tips, and latest courses from EduNexa.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-full text-gray-800 focus:outline-none text-sm"
            />
            <button className="bg-[#1bbf9d] px-5 py-2 rounded-full font-semibold hover:opacity-90 text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-[#1bbf9d]/30 pt-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} EduNexa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
