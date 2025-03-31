import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToHome}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-20 right-8 bg-white text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white p-1 drop-shadow-xl rounded flex items-center justify-center z-50 transition-all duration-500"
          aria-label="Back to Home"
        >
          <span className="material-icons text-[32px]">keyboard_arrow_up</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToHome;
