import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail } from 'lucide-react';

const DataConstellation: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="absolute inset-0 right-0 pointer-events-none overflow-hidden hidden lg:block opacity-60">
      <svg className="absolute w-full h-full right-[-10%]" viewBox="0 0 800 800" fill="none">
        <motion.g
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: 'center' }}
        >
          {/* Constellation lines */}
          <path d="M400 200 L500 300 L650 250 L550 400 L700 550 L500 500 L400 650 L300 500 L150 550 L250 400 L100 250 L300 300 Z" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M400 300 L450 400 L550 350 L450 500 L550 600 L400 500 L300 600 L350 500 L250 350 L350 400 Z" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1" />
          
          {/* Nodes */}
          {[
            [400, 200], [500, 300], [650, 250], [550, 400], [700, 550], [500, 500],
            [400, 650], [300, 500], [150, 550], [250, 400], [100, 250], [300, 300],
            [400, 300], [450, 400], [550, 350], [450, 500], [550, 600], [300, 600],
            [350, 500], [250, 350], [350, 400]
          ].map(([cx, cy], i) => (
            <motion.circle 
              key={i} 
              cx={cx} 
              cy={cy} 
              r={i % 3 === 0 ? 4 : 2} 
              fill={i % 2 === 0 ? "#60A5FA" : "#A855F7"}
              animate={shouldReduceMotion ? { opacity: 0.8 } : { opacity: [0.3, 1, 0.3], r: i % 3 === 0 ? [4, 6, 4] : 2 }}
              transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
          
          {/* Orbiting rings */}
          <circle cx="400" cy="400" r="250" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="400" cy="400" r="350" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      <DataConstellation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:w-2/3">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-blue-500"></span>
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">AI & Data Science</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight leading-tight"
          >
            Hi, I'm <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-200">
              Harish S S
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-8 max-w-2xl leading-snug"
          >
            Building with Data, AI & Technology.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed border-l-2 border-white/10 pl-4"
          >
            Artificial Intelligence & Data Science engineering student seeking to apply technical skills to real-world AI, machine learning, and data-driven problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 mb-12"
          >
            <a href="#projects" className="group relative px-8 py-3 rounded-full bg-white text-space-900 font-semibold overflow-hidden transition-all hover:scale-105" aria-label="View My Work">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 h-full w-0 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            </a>
            <a href="/resume.pdf" download="Harish_SS_Resume.pdf" className="px-8 py-3 rounded-full glass hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all flex items-center gap-2 group">
              <svg className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </a>
            
            <div className="flex gap-4 ml-2 border-l border-white/10 pl-6 h-10 items-center">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.a5.34 5.34 0 0 0-1.46-3.72 5.2 5.2 0 0 0-.14-3.66s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0c-2.72-1.84-3.9-1.46-3.9-1.46a5.2 5.2 0 0 0-.14 3.66A5.34 5.34 0 0 0 2 8.97c0 5.6 3.35 6.62 6.5 7A4.8 4.8 0 0 0 8 19v3"></path></svg>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-8 md:left-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest writing-vertical-rl rotate-180">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
          animate={{ scaleY: [1, 0, 1], originY: [0, 0, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
