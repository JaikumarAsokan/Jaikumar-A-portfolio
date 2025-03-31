import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = ({ experiences = [] }) => {
  if (!Array.isArray(experiences) || experiences.length === 0) {
    return (
      <motion.section
        id="experience"
        className="py-16 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8">
            Experience
          </h2>
          <p className="text-gray-600">No experience data available.</p>
        </div>
      </motion.section>
    );
  }

  const groupedExperiences = experiences.reduce((acc, experience) => {
    if (!acc[experience.type]) {
      acc[experience.type] = [];
    }
    acc[experience.type].push(experience);
    return acc;
  }, {});

  return (
    <section id="experience" className="py-16 px-6 md:px-12 lg:px-20 xl:px-40 bg-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Experience
        </motion.h2>

        {Object.entries(groupedExperiences).map(([type, typeExperiences]) => (
          <motion.div
            key={type}
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 border-b pb-2">
              {type}
            </h3>

            <div className="space-y-8">
              {typeExperiences.map((exp) => (
                <motion.article
                  key={exp.id}
                  className="bg-gray-50 p-6 shadow-sm flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="basis-2/3">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                      {exp.company && <p className="text-gray-600">{exp.company}</p>}
                      {exp.duration && <p className="text-gray-500 text-sm mt-1"><strong>{exp.duration}</strong></p>}
                      {exp.location && <p className="text-gray-500 text-sm">{exp.location}</p>}
                    </div>
                    {Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 && (
                      <ul className="space-y-2 mt-4 pl-5">
                        {exp.responsibilities.map((item, index) => (
                          <li key={index} className="text-gray-700 list-disc">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {Array.isArray(exp.logos) && exp.logos.length > 0 && (
                    <div className="flex justify-center md:justify-end items-center basis-1/3">
                      <div className="flex space-x-4">
                        {exp.logos.map((logo, index) => (
                          <img key={index} src={logo} alt={exp.company ? `${exp.company} logo` : "Company logo"} className="object-contain" />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
