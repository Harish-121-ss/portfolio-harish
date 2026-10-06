import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">02 - Skills</h2>
          <div className="h-[1px] w-full max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative h-full glass-card rounded-2xl p-8 lg:p-10 flex flex-col items-start hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center mb-8 shadow-inner">
                    <Icon className="text-blue-400" size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{skillGroup.category.toUpperCase()}</h3>
                  
                  <div className="flex flex-wrap gap-3 mt-auto w-full">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors flex-grow text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Subtle decorative grid in background of card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-grid-pattern opacity-[0.03] rounded-tr-2xl pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
