import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Resume: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>
        
        <motion.div 
          className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <img 
              src="/images/resume.png" 
              alt="Resume Preview" 
              className="w-full rounded-lg shadow-md mb-4"
            />
            <p className="text-center text-gray-600 dark:text-gray-300">Want to know more about me?</p>
          </div>
          
          <div className="text-center">
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Download my resume to learn more about my experience and qualifications.
            </p>
            <motion.a
              href="OfekHarpazCV.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-indigo-600 dark:bg-amber-500 text-white rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-amber-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;