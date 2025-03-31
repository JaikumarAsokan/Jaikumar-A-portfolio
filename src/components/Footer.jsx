import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Footer = ({ footerData }) => {
  return (
    <motion.footer
      id="contact"
      className="bg-gray-800 text-white py-12 px-6 md:px-12 lg:px-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 justify-between">
          <motion.div
            className="flex items-start space-x-4"
            variants={fadeInUp}
          >
            <span className="material-icons text-white text-2xl mt-1">
              home
            </span>
            <div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-gray-300">
                {footerData.permanentAddress.text
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <div className="flex items-center space-x-4">
              <span className="material-icons text-white text-2xl">call</span>
              <a
                href={`tel:${footerData.phone.text.replace(/\D/g, "")}`}
                className="text-gray-300 hover:text-white"
              >
                {footerData.phone.text}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="material-icons text-white text-2xl">email</span>
              <a
                href={`mailto:${footerData.email.text}`}
                className="text-gray-300 hover:text-white"
              >
                {footerData.email.text}
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="font-bold mb-4">Professional Links</h3>
            <div className="flex flex-col gap-3">
              {footerData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 p-2 rounded transition-all duration-300 w-full justify-between text-white"
                  aria-label={link.name}
                  variants={fadeInUp}
                >
                  <span className="flex items-center gap-4">
                    <span className="material-icons text-2xl">
                      {link.name.toLowerCase() === "github"
                        ? "code"
                        : link.name.toLowerCase() === "linkedin"
                        ? "person"
                        : link.name.toLowerCase() === "figma"
                        ? "design_services"
                        : "link"}
                    </span>
                    <p>{link.name}</p>
                  </span>
                  <span className="material-icons text-white text-2xl">
                    link
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between text-center text-sm text-gray-400 mt-6 pt-6 border-t border-gray-700"
          variants={fadeInUp}
        >
          <p>© {new Date().getFullYear()} Jai Kumar A. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
