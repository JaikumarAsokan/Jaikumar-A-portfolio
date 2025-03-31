import React from "react";
import { motion } from "framer-motion";

const Hero = ({ personalInfo }) => {
  return (
    <section
      id="home"
      className="bg-white pt-32 pb-16 container mx-auto px-4 sm:px-8 lg:px-40 flex flex-col-reverse md:flex-row items-center justify-between"
    >
      {/* Left Section */}
      <motion.div
        className="text-left flex flex-col justify-center w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-2 sm:mb-0 md:mb-2 lg:mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi, I'm {personalInfo.name}!
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl text-gray-600 mb-2 sm:mb-0 md:mb-2 lg:mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I'm a {personalInfo.role}
        </motion.h2>
        <motion.a
          href={`${
            import.meta.env.BASE_URL
          }resume/Jaikumar_A_Frontend_Developer.pdf`}
          download="Jaikumar_A_Frontend_Developer.pdf"
          className="inline-block bg-[#1e3a8a] text-white border font-bold py-3 px-6 rounded transition duration-300 hover:bg-white hover:text-[#1e3a8a] hover:border hover:border-[#1e3a8a] hover:shadow-lg w-full md:w-min text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.a>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="flex items-center justify-center md:justify-end w-full md:w-3/5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src={`${import.meta.env.BASE_URL}${personalInfo.image}`}
          alt="Profile"
          className="rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
