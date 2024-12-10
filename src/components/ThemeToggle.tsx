import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-amber-400 dark:to-orange-500 text-white dark:text-navy-blue shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </motion.button>
  );
};

export default ThemeToggle;