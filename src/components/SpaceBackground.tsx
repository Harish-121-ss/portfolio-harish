import React from 'react';
import { motion } from 'framer-motion';

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#05050A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#05050A] to-[#05050A]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Subtle stars / particles */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}
      ></div>
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: '30px 30px' }}
      ></div>

      {/* Ambient Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>
      
      {/* Subtle vertical connection line spanning the page */}
      <div className="fixed left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
    </div>
  );
};

export default SpaceBackground;
