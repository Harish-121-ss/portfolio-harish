import React from 'react';
import { motion } from 'framer-motion';

const TechConstellation: React.FC = () => {
  const nodes = [
    { name: "AI", x: 20, y: 20, color: "text-blue-400" },
    { name: "ML", x: 80, y: 25, color: "text-purple-400" },
    { name: "DATA", x: 15, y: 70, color: "text-blue-300" },
    { name: "PYTHON", x: 50, y: 15, color: "text-blue-500" },
    { name: "SQL", x: 85, y: 75, color: "text-gray-300" },
    { name: "POWER BI", x: 50, y: 85, color: "text-yellow-400" },
    { name: "JAVA", x: 30, y: 45, color: "text-red-400" }
  ];

  return (
    <section className="py-16 relative z-10 overflow-hidden hidden md:block">
      <div className="max-w-4xl mx-auto px-4 relative h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center z-20 bg-space-900/50 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/5">
            <h3 className="text-xs font-mono text-gray-500 tracking-[0.3em] uppercase mb-2">What I Work With</h3>
            <p className="text-2xl font-bold text-white tracking-widest">HARISH S S</p>
          </div>
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.3))' }}>
            {/* Draw lines from center to nodes */}
            {nodes.map((node, i) => (
              <motion.line
                key={`line-${i}`}
                x1="50%"
                y1="50%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
            {/* Draw lines between some nodes to form a constellation */}
            <motion.line x1="20%" y1="20%" x2="50%" y2="15%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.line x1="50%" y1="15%" x2="80%" y2="25%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.line x1="80%" y1="25%" x2="85%" y2="75%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.line x1="85%" y1="75%" x2="50%" y2="85%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.line x1="50%" y1="85%" x2="15%" y2="70%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.line x1="15%" y1="70%" x2="20%" y2="20%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.line x1="20%" y1="20%" x2="30%" y2="45%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.line x1="30%" y1="45%" x2="15%" y2="70%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </svg>

          {nodes.map((node, i) => (
            <motion.div
              key={`node-${i}`}
              className={`absolute text-sm font-bold tracking-wider px-3 py-1.5 rounded-md glass-card ${node.color}`}
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, zIndex: 30 }}
            >
              {node.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechConstellation;
