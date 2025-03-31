import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 py-3 md:py-6 px-6 md:px-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-[#1e3a8a]">
          JK
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none bg-[#f9f9f9]"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation with Smooth Transition */}
      <div
        ref={menuRef}
        className={`md:hidden h-lvh bg-white shadow-md absolute w-48 right-0 top-16 py-4 px-6 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item, index) => (
          <>
            <a
              key={index}
              href={item.href}
              className="flex flex-col py-2 text-gray-600 bg-[#f9f9f9] rounded"
            >
              {item.name}
            </a>
            <hr />
          </>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
