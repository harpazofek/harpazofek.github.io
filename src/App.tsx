import React from 'react';
import Header from './components/Header';
import TechStack from './components/TechStack/TechStack';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <Header />
      <TechStack />
    </div>
  );
};

export default App;