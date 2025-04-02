import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const Skills = ({ skillsData }) => {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-gray-50 px-6 sm:px-12 md:px-20 lg:px-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-12 text-left"
          variants={fadeInVariants}
        >
          {skillsData.title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={fadeInVariants}
        >
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={fadeInVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center space-x-3"
                    variants={fadeInVariants}
                  >
                    <div className="w-8 h-8 flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-gray-700">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.img
            src={skillsData.icon}
            alt=""
            className="mt-6"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
