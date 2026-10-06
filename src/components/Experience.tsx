import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex items-center gap-4"
        >
          <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">03 - Experience</h2>
          <div className="h-[1px] w-full max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glowing timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent"></div>

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 mt-6 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)] z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
                
                <div className="ml-16 md:ml-0 md:w-1/2 w-full group">
                  <div className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                    
                    <div className="mb-4 relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-4">
                        {exp.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                      <p className="text-blue-300 font-medium">{exp.company}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6 relative z-10">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-400 text-sm md:text-base flex items-start">
                          <span className="text-blue-500 mr-3 mt-1.5 opacity-60 flex-shrink-0">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded bg-white/5 text-gray-300 text-xs font-medium border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
