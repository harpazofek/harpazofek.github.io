import React from 'react';
import { motion } from 'framer-motion';

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
  index: number;
}

const TechItem: React.FC<TechItemProps> = ({ icon, name, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <div className="text-4xl mb-3 text-indigo-600 dark:text-amber-400">
        {icon}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default TechItem;