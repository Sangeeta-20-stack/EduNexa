import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    const sections = ["home", "about", "testimonials"];
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActive(section);
        }
      }
    });
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") setActive(""); // reset on other pages
  }, [location.pathname]);

  // Function to handle section clicks
  const handleSectionClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/"); // go to landing page first
      // scroll after short delay to allow DOM to render
      setTimeout(() => {
        const el = document.getElementById(section);
        el?.scrollIntoView({ behavior: "smooth" });
        setActive(section);
      }, 50);
    } else {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: "smooth" });
      setActive(section);
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0f4b4a] text-white fixed w-full z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <span className="bg-white text-[#0f4b4a] px-2 py-1 rounded-full">🎓</span>
        <span>
          <span className="text-[#3bb19f]">Edu</span>
          <span className="text-white">Nexa</span>
        </span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 font-medium relative">
        {["home", "about", "testimonials"].map((link) => (
          <li key={link} className="relative">
            <button
              onClick={() => handleSectionClick(link)}
              className={`cursor-pointer hover:text-[#1bbf9d] transition-colors duration-300 ${
                active === link ? "text-[#1bbf9d]" : ""
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
            {active === link && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#1bbf9d] rounded-full transition-all duration-300"></span>
            )}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link to="/signup">
          <button className="bg-[#1bbf9d] px-4 py-2 rounded-full font-semibold hover:opacity-90">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-[#a53f2b] px-4 py-2 rounded-full font-semibold hover:opacity-90">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
