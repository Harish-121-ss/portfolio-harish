import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-space-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white font-bold text-xl mb-1">{personalInfo.name}</p>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">{personalInfo.role}</p>
        </div>
        
        <div className="flex space-x-8">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-400 hover:text-blue-400 transition-colors tracking-widest uppercase">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-400 hover:text-blue-400 transition-colors tracking-widest uppercase">
            GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-sm font-mono text-gray-400 hover:text-blue-400 transition-colors tracking-widest uppercase">
            Email
          </a>
        </div>
        
        <p className="text-gray-600 text-sm font-mono">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
