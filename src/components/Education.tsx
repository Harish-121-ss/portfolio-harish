import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">05 - Education</h2>
          <div className="h-[1px] w-full max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => {
            const isPrimary = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                  isPrimary 
                    ? 'glass border border-blue-500/30 p-8 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]' 
                    : 'bg-white/5 border border-white/5 p-6 hover:bg-white/10'
                }`}
              >
                {isPrimary && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                )}
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className={`${isPrimary ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} font-bold text-white mb-2`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-gray-300 mb-3 ${isPrimary ? 'text-lg' : 'text-base'}`}>
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-sm font-mono text-gray-500 space-x-4">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{edu.duration}</span>
                      {edu.status && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                          <span className="text-blue-400 font-medium">{edu.status}</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className={`text-left md:text-right w-full md:w-auto p-4 md:p-0 rounded-xl ${isPrimary ? 'bg-white/5 md:bg-transparent border border-white/10 md:border-transparent' : ''}`}>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{edu.scoreLabel}</p>
                    <p className={`${isPrimary ? 'text-4xl text-blue-400' : 'text-2xl text-gray-300'} font-bold`}>
                      {edu.score}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
