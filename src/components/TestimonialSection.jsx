import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Student",
    message:
      "EduNexa has transformed my learning experience! The AI-powered tools make studying engaging and effective.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Professional",
    message:
      "The platform is intuitive and personalized. I can focus on what I need to improve and achieve my goals faster.",
    rating: 4,
  },
  {
    name: "Sneha Kapoor",
    role: "Student",
    message:
      "The interactive tools and curated resources make learning so much easier. Highly recommend EduNexa!",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-8 md:px-16 bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#14b8a6] text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold">What Our Learners Say</h2>
        <p className="mt-4">
          Hear from students and professionals who have improved their learning with EduNexa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              background: "rgba(27, 191, 157, 0.85)",
            }}
            className="bg-gradient-to-br from-[#1bbf9d]/80 via-[#0d9488]/80 to-[#14b8a6]/80 p-6 rounded-xl shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300"
          >
            <div className="mb-4">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm">{testimonial.role}</p>
            </div>

            <p className="mb-4">"{testimonial.message}"</p>

            <div className="flex mt-auto text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
