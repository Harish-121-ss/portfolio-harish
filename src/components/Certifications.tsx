import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">06 - Certifications</h2>
          <div className="h-[1px] w-full max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col group relative overflow-hidden h-full"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500 -z-10"></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-white group-hover:border-purple-500/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/></svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 font-medium mb-1">{cert.organization}</p>
              <p className="text-xs font-mono text-gray-500 mb-6">{cert.date}</p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                {cert.score && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Score</span>
                    <span className="text-purple-400 font-bold text-lg">{cert.score}</span>
                  </div>
                )}
                {cert.details && (
                  <p className="text-sm text-gray-300 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                    {cert.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
