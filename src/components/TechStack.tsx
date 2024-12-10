import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDocker, FaAws, FaGithub, FaJenkins, 
  FaPython, FaTerminal, FaLinux, FaGoogle, FaJava 
  } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiArgo, SiPrometheus, SiGrafana, SiElasticsearch } from 'react-icons/si';

const technologies = [
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <SiKubernetes />, name: 'Kubernetes' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <SiTerraform />, name: 'Terraform' },
  { icon: <FaJenkins />, name: 'Jenkins' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaTerminal />, name: 'Bash' },
  { icon: <FaLinux />, name: 'Linux' },
  { icon: <FaGoogle />, name: 'GCP' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiArgo />, name: 'ArgoCD' },
  { icon: <SiPrometheus />, name: 'Prometheus' },
  { icon: <SiGrafana />, name: 'Grafana' },
  { icon: <SiElasticsearch />, name: 'ElasticSearch' }
];

const TechStack: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technologies & Tools
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl text-navy-blue mb-2">
                {tech.icon}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;