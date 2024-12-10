import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header 
      className="bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-gray-800 dark:to-gray-900 text-white py-20 text-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 dark:from-amber-400 dark:to-orange-500"
          variants={itemVariants}
        >
          Ofek Harpaz
        </motion.h1>
        <motion.span 
          className="text-2xl block font-medium text-purple-200 dark:text-amber-400"
          variants={itemVariants}
        >
          DevOps Engineer
        </motion.span>
        <motion.div 
          className="flex justify-center gap-6 mt-8"
          variants={containerVariants}
        >
          {[
            { icon: <FaGithub />, href: "https://github.com/harpazofek" },
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/ofek-harpaz" },
            { icon: <FaEnvelope />, href: "mailto:oharpaz1@gmail.com" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-purple-200 dark:text-amber-400 text-2xl border-2 border-purple-200 dark:border-amber-400 rounded-full p-3 hover:bg-white hover:text-indigo-600 dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;