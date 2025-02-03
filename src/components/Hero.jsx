import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const images = [
    'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/234527/pexels-photo-234527.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/16129705/pexels-photo-16129705/free-photo-of-man-sitting-at-desk-working-on-computers.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6193389/pexels-photo-6193389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      
      <motion.div 
        className="relative z-10 text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold drop-shadow-lg">Hi, I'm Manjum Sheikh</h1>
        <p className="mt-4 text-xl drop-shadow-md">MERN Stack Developer | Passionate about building scalable applications</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">View My Work</a>
      </motion.div>
    </section>
  );
};

export default Hero;
