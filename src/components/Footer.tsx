import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.p 
            className="text-black dark:text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; All Rights Reserved. Ofek Harpaz 2024
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <FaGithub />, href: "https://github.com/harpazofek" },
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/ofek-harpaz" },
              { icon: <FaEnvelope />, href: "mailto:oharpaz1@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-600 dark:text-gray-400 text-2xl hover:text-indigo-600 dark:hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;