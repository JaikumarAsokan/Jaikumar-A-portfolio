import React from "react";
import { motion } from "framer-motion";

const About = ({ aboutData }) => {
  const formatText = (text) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    return text
      .split(boldRegex)
      .map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
      );
  };

  return (
    <motion.section
      id="about"
      className="py-24 px-6 sm:px-12 md:px-20 lg:px-40 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutData.image}
            alt="About me"
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-left">
            {aboutData.title}
          </h2>
          {aboutData.description.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-700 mb-4 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {formatText(paragraph)}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
