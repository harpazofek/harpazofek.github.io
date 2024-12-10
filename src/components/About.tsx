import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-6 text-lg text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>An accomplished Technical Lead with a successful six-year track record in a start-up company developing Robotics solution.</p>
          <p>Over the past year, I have expanded my expertise into DevOps, specializing in researching and integrating DevOps tools across large-scale kubernetes clusters in multi-cloud environments (GCP, AWS).</p>
          <p>Feel free to explore my projects and hope to hear your thoughts!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;