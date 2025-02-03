import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image from '../assets/image3.png';

const About = ({ theme }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      id: 1,
      title: "About Me",
      content: "I'm Manjum Sheikh, a passionate MERN stack developer with a BCA degree. Currently, I am enhancing my skills through a MERN stack course and interning at eSkills Indore. I have strong expertise in HTML, CSS, JavaScript, and React, and I enjoy building dynamic and responsive web applications.",
    },
    {
      id: 2,
      title: "BCA",
      content: "I hold a Bachelor's degree in Computer Applications (BCA), which has provided me with a solid foundation in programming and computer science. During my studies, I gained proficiency in multiple programming languages, including Java, C++, and Python. I also developed a strong understanding of data structures, algorithms, and database management systems. This knowledge has been instrumental in enhancing my problem-solving skills.",
    },
    {
      id: 3,
      title: "MERN Stack",
      content: "I am currently learning the MERN stack, which includes MongoDB, Express.js, React, and Node.js. So far, I have completed the frontend portion using React, focusing on building dynamic user interfaces with reusable components. I am now working on the backend with Node.js and Express.js to build server-side applications and APIs. Additionally, I am integrating MongoDB to handle data storage. The course spans 8 months, and I’m excited to master full-stack development, enabling me to create end-to-end applications and further improve my skills in web development",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section id="about" className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-white"} flex flex-col items-center justify-center px-4 py-12`}>
      {/* Unified Slider for About Me, BCA, and MERN Stack */}
      <motion.div 
        className={`w-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} shadow-2xl rounded-3xl p-10 max-w-4xl`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[currentCard].id}
            className="w-full text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* For About Me Card */}
            {currentCard === 0 && (
              <div className="md:flex justify-between items-center min-h-[400px]">
                {/* Left Side - Text for About Me */}
                <motion.div 
                  className={`md:w-1/2 text-left ${theme === "dark" ? "text-white" : "text-black"}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                  <h2 className={`text-4xl font-extrabold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>{cards[currentCard].title}</h2>
                  <p className={`mt-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} max-w-lg text-lg md:text-2xl leading-relaxed`}>
                    {cards[currentCard].content}
                  </p>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div 
                  className="md:w-1/2 flex justify-center mt-8 md:mt-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                >
                  <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
                    <motion.img 
                      src={image} 
                      alt="Profile"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            )}

            {/* For BCA and MERN Stack Cards */}
            {currentCard !== 0 && (
              <div className="min-h-[400px] px-4">
                <h2 className={`text-4xl font-extrabold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>{cards[currentCard].title}</h2>
                <p className={`mt-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg leading-relaxed md:text-xl lg:text-2xl max-w-full text-justify`}>
                  {cards[currentCard].content}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default About;
