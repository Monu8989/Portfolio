import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = ({ theme }) => {
  return (
    <footer className={theme === "dark" ? "bg-gray-900 text-white py-10" : "bg-white text-black py-10"}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4 text-gray-400">Let's connect and build something amazing together!</p>

        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/manjum-sheikh-888ba5272/"
            className="text-blue-400 hover:text-blue-500 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Monu8989"
            className="text-blue-400 hover:text-blue-500 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sheikhmanjum0@gmail.com"
            className="text-red-400 hover:text-red-500 text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Developed By Manjum Sheikh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
