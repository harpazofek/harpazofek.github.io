import React from 'react';
import { motion } from 'framer-motion';
import TechItem from './TechItem';
import { technologies } from './technologies';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-indigo-600 dark:text-amber-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technologies & Tools
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <TechItem
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;