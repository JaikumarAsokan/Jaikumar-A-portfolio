import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackToHome from "./components/BackToHome";

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem("scrollPosition");
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.BASE_URL}portfolio.json`);
        setPortfolioData(response.data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchData();

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  if (!portfolioData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#1e3a8a] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="font-sans bg-white">
      <Navbar navItems={portfolioData.navigation} />
      <Hero personalInfo={portfolioData.personalInfo} />
      <About aboutData={portfolioData.about} />
      <Experience experiences={portfolioData.experience} />
      <Skills skillsData={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Footer footerData={portfolioData.footer} />
      <BackToHome />
    </div>
  );
};

export default App;
