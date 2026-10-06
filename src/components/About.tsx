import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">01 - About</h2>
          <div className="h-[1px] w-full max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Am</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am an <strong className="text-gray-200 font-medium">Artificial Intelligence & Data Science</strong> engineering student with a strong foundation in <strong className="text-blue-400 font-medium">Python</strong>, <strong className="text-blue-400 font-medium">SQL</strong>, and <strong className="text-blue-400 font-medium">AI/ML</strong> architectures.
              </p>
              <p>
                I have gained practical experience through hands-on internships in data analysis, Java programming, and intensive AI/ML training programs. This complements my academic focus on solving real-world challenges, such as crop disease prediction and radar-based data analysis.
              </p>
              <p>
                Currently, I am seeking opportunities to apply my technical skills, analytical thinking, and problem-solving abilities to impactful data-driven environments while continuing to grow as a professional engineer.
              </p>
            </div>
          </motion.div>

          {/* Right Futuristic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-2xl blur-lg"></div>
            
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div>
                  <h4 className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">Profile</h4>
                  <p className="text-white font-medium text-lg">AI & Data Science Student</p>
                </div>
                
                <div className="h-[1px] w-full bg-white/5"></div>
                
                <div>
                  <h4 className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">What I Focus On</h4>
                  <p className="text-blue-300 font-medium">AI &bull; ML &bull; Data Science &bull; Data Analysis</p>
                </div>
                
                <div className="h-[1px] w-full bg-white/5"></div>
                
                <div>
                  <h4 className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">Location</h4>
                  <p className="text-gray-300">Coimbatore, Tamil Nadu, India</p>
                </div>
                
                <div className="h-[1px] w-full bg-white/5"></div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                  <div>
                    <h4 className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">Current Education</h4>
                    <p className="text-gray-300 text-sm font-medium">B.Tech AI & Data Science</p>
                  </div>
                  <div className="sm:text-right">
                    <h4 className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">Academic Performance</h4>
                    <p className="text-white font-bold text-xl">8.38 <span className="text-gray-500 text-sm font-normal">/ 10 CGPA</span></p>
                  </div>
                </div>
              </div>
              
              {/* Decorative abstract lines */}
              <svg className="absolute bottom-0 right-0 w-24 h-24 text-white/5 z-0" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path d="M100 100 L0 100 L100 0 Z" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
