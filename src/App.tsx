import React from 'react';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack/TechStack';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <Header />
      <About />
      <TechStack />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;