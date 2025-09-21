import React from "react";
import { FaShieldAlt, FaBolt, FaUserFriends, FaPlay } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import HeroImg from "../assets/hero.png"; // replace with your image

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-36 md:pt-40 pb-20
        bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#14b8a6] text-white relative overflow-hidden"
    >
      {/* Decorative soft glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-teal-200/5 to-white/10 blur-3xl opacity-40"></div>

      {/* Left Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-xl space-y-8 z-10"
      >
        {/* White pill with Sparkles icon */}
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-1 text-sm bg-white text-[#0f766e] rounded-full font-medium shadow-md"
        >
          <HiSparkles className="text-[#0f766e]" /> Smarter learning with AI
        </motion.span>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold leading-snug"
        >
          Unlock Smarter <br /> Learning with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-200 leading-relaxed"
        >
          Personalized resources, interactive tools, and a smarter way to prepare.
          Learn faster, stay motivated, and achieve your goals with the power of AI.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex gap-5 mt-6 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#1bbf9d] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90"
          >
            Explore Courses
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#e0f7f4" }}
            className="flex items-center gap-2 bg-white text-[#0f766e] px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            <FaPlay /> Watch Demo
          </motion.button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-8">
          <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-[#b94c3d] px-3 py-1 rounded-full text-sm">
            <FaShieldAlt /> Trusted by 1,000+ learners
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-[#34d399] px-3 py-1 rounded-full text-sm">
            <FaBolt /> AI-powered learning experience
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-[#0d9488] px-3 py-1 rounded-full text-sm">
            <FaUserFriends /> Built for students & professionals
          </motion.span>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 md:mt-0 md:flex-1 flex justify-center relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-xl blur-3xl"></div>

        <motion.img
          src={HeroImg}
          alt="Students learning with AI"
          className="relative rounded-xl shadow-2xl w-full max-w-lg md:max-w-xl lg:max-w-2xl z-10"
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
