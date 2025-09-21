import React from "react";
import { BookOpen, TrendingUp, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-white" />,
    title: "Personalized Learning",
    desc: "AI tailors content, quizzes and resources to your unique goals.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-white" />,
    title: "Track Your Progress",
    desc: "Visual dashboards show your growth and time invested.",
  },
  {
    icon: <Target className="w-10 h-10 text-white" />,
    title: "Reach Milestones",
    desc: "Set goals and hit them with smart study plans.",
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Join the Community",
    desc: "Connect with peers, share notes, and learn together.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100"
    >
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
        >
          Why <span className="text-teal-600">EduNexa?</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 mt-4 text-lg"
        >
          Unlock your learning potential with AI-powered tools designed to make
          studying more engaging, structured, and effective.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {features.map((feature, index) => (
         <motion.div
  key={index}
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  whileHover={{
    scale: 1.08,                             // Slight pop
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)", // Stronger shadow
    backgroundColor: "rgba(31, 139, 130, 0.85)", // Subtle teal shade
  }}
  className="bg-teal-600 rounded-2xl shadow-lg p-6 text-white cursor-pointer transition-all duration-300"
>

            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-teal-500 shadow-md">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-teal-100">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
