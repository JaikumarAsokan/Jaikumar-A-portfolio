import React from "react";
import { motion } from "framer-motion";

const Hero = ({ personalInfo }) => {
  return (
    <section
      id="home"
      className="px-6 md:px-12 lg:px-20 xl:px-40 bg-white m-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16 container w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
    > 
    {/* px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 2xl:px-48 */}
      {/* Left Section */}
      <motion.div
        className="text-left flex flex-col justify-center w-full md:basis-3/5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="whitespace-nowrap md:whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-2 sm:mb-3 md:mb-4 lg:mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi, I'm {personalInfo.name}!
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-7"
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
          className="inline-block w-full sm:w-auto md:w-min bg-[#1e3a8a] text-white border font-bold py-3 sm:py-3 px-4 sm:px-6 rounded transition duration-300 hover:bg-white hover:text-[#1e3a8a] hover:border hover:border-[#1e3a8a] hover:shadow-lg   text-center text-sm sm:text-base md:text-lg"
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
        className="flex items-center justify-center w-full sm:w-4/5 md:w-2/5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src={`${import.meta.env.BASE_URL}${personalInfo.image}`}
          alt="Profile"
          className="rounded-lg w-98 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
