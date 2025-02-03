import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi"; // React Icons

const Nav = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  return (
    <nav className={`py-4 sticky top-0 shadow-md z-50 transition-all duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer">
          Portfolio
        </Link>

        {/* Desktop Menu + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          {["about", "skills", "projects", "contact"].map((section) => (
            <Link 
              key={section}
              to={section} 
              smooth={true} 
              duration={500} 
              spy={true} 
              hashSpy={true} 
              offset={-70}  
              className="relative group cursor-pointer transition-all"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {/* Hover Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full transition-all duration-300 bg-gray-700 text-white dark:bg-gray-200 dark:text-black"
          >
            {theme === "dark" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden py-2 transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        } ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
      >
        <ul className="flex flex-col space-y-4 text-center">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="group">
              <Link 
                to={section} 
                smooth={true} 
                duration={500} 
                spy={true} 
                hashSpy={true} 
                offset={-70} 
                className="block py-2 relative cursor-pointer transition-all"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          {/* Mobile Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full transition-all duration-300 bg-gray-700 text-white dark:bg-gray-200 dark:text-black mx-auto"
          >
            {theme === "dark" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
