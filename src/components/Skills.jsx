import React, { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    name: "HTML",
    level: "95%",
    details: [
      "Semantic HTML for better SEO and accessibility.",
      "Forms, input validation, and interactive elements.",
      "HTML5 features like video, audio, and canvas.",
      "Building structured layouts with proper tags.",
      "Best practices for performance optimization.",
    ],
  },
  {
    name: "CSS",
    level: "90%",
    details: [
      "Advanced Flexbox and Grid layouts.",
      "Creating fully responsive web pages.",
      "Animations, transitions, and keyframes.",
      "Custom themes using SASS/SCSS.",
      "Dark mode & theming strategies.",
    ],
  },
  {
    name: "Bootstrap",
    level: "85%",
    details: [
      "Bootstrap grid system and layout techniques.",
      "Using pre-built components like modals & tooltips.",
      "Customization with SCSS variables.",
      "Building mobile-first designs efficiently.",
      "Integrating Bootstrap with React projects.",
    ],
  },
  {
    name: "Tailwind CSS",
    level: "90%",
    details: [
      "Utility-first CSS for faster development.",
      "Custom configurations and theming.",
      "Optimizing Tailwind for performance.",
      "Integrating Tailwind with React and Next.js.",
      "Using Tailwind for complex UI designs.",
    ],
  },
  {
    name: "JavaScript",
    level: "85%",
    details: [
      "Deep understanding of ES6+ features.",
      "Working with the DOM efficiently.",
      "Asynchronous programming (Promises, async/await).",
      "APIs, fetch requests, and AJAX calls.",
      "Building reusable JavaScript components.",
    ],
  },
  {
    name: "React.js",
    level: "90%",
    details: [
      "Component-based architecture and state management.",
      "React Hooks (useState, useEffect, useContext).",
      "Optimizing performance with memoization.",
      "React Router for seamless navigation.",
      "Integrating APIs and third-party libraries.",
    ],
  },
  {
    name: "Node.js",
    level: "80%",
    details: [
      "Building RESTful APIs with Express.js.",
      "Working with databases (MongoDB, MySQL).",
      "Authentication using JWT and OAuth.",
      "Server-side rendering techniques.",
      "Handling real-time data with WebSockets.",
    ],
  },
  {
    name: "MongoDB",
    level: "80%",
    details: [
      "Designing scalable NoSQL databases.",
      "CRUD operations and aggregation pipeline.",
      "Indexing and performance optimization.",
      "MongoDB Atlas for cloud-based storage.",
      "Integrating MongoDB with Node.js.",
    ],
  },
];

const Skills = ({ theme }) => {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]); // Default: HTML selected

  return (
    <div id="skills" className={`flex flex-col lg:flex-row h-screen p-6 lg:p-10 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      
      {/* Left Sidebar */}
      <div className={`lg:w-1/3 w-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} shadow-lg rounded-lg p-6 mb-6 lg:mb-0`}>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-500 mb-4">Technologies I work with:</p>
        <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3">
          {skillsData.map((skill) => (
            <motion.button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 lg:px-6 lg:py-3 rounded-md text-sm lg:text-lg transition-all ${selectedSkill.name === skill.name ? "bg-blue-500" : theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-500"}`}
            >
              {skill.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <motion.div
        key={selectedSkill.name}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`lg:w-2/3 w-full shadow-lg md:mx-2 rounded-lg p-6 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
      >
        <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>{selectedSkill.name}</h3>
        <p className="mt-2">Proficiency Level:</p>
        <div className={`w-full bg-gray-700 rounded-full h-4 mt-2 ${theme === "dark" ? "bg-gray-500" : "bg-gray-300"}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: selectedSkill.level }}
            transition={{ duration: 1 }}
            className="bg-blue-500 h-full rounded-full"
          ></motion.div>
        </div>
        <p className="mt-4">Key Skills:</p>
        <ul className="list-disc list-inside mt-2">
          {selectedSkill.details.map((detail, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mt-1"
            >
              {detail}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
    </div>
  );
};

export default Skills;
