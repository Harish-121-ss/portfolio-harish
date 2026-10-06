import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { X, FileText, ArrowRight } from 'lucide-react';

const ProjectVisual1 = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" viewBox="0 0 400 300" fill="none">
    <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M150 250 C150 150, 250 50, 300 100 C300 200, 200 280, 150 250 Z" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M150 250 C120 200, 150 100, 200 80 C230 150, 180 220, 150 250 Z" stroke="#22C55E" strokeWidth="1" />
      <motion.line 
        x1="100" y1="50" x2="350" y2="50" 
        stroke="rgba(74, 222, 128, 0.5)" strokeWidth="4"
        animate={{ y: [50, 270, 50] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      {[...Array(5)].map((_, i) => (
        <circle key={i} cx={180 + i * 30} cy={120 + (i % 2) * 40} r="3" fill="#4ADE80" />
      ))}
    </motion.g>
  </svg>
);

const ProjectVisual2 = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700" viewBox="0 0 400 300" fill="none">
    <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "200px 150px" }}>
      <circle cx="200" cy="150" r="100" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="150" r="60" stroke="#3B82F6" strokeWidth="1" />
      <circle cx="200" cy="150" r="20" fill="#2563EB" opacity="0.5" />
      <path d="M200 150 L200 50 A100 100 0 0 1 300 150 Z" fill="url(#radarSweep)" opacity="0.3" />
      <defs>
        <linearGradient id="radarSweep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </motion.g>
    <circle cx="260" cy="110" r="4" fill="#EF4444" />
    <circle cx="140" cy="190" r="3" fill="#FCD34D" />
    <circle cx="230" cy="220" r="2" fill="#60A5FA" />
  </svg>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Stop scrolling when modal is open and handle Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">04 - Projects</h2>
          <div className="h-[1px] w-full max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-blue-500/30 transition-colors duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-space-800/90 to-space-900/95 z-10 pointer-events-none"></div>
              
              <div className="absolute inset-0 z-0 overflow-hidden mix-blend-screen pointer-events-none">
                {index === 0 ? <ProjectVisual1 /> : <ProjectVisual2 />}
              </div>
              
              <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-light text-white/10 group-hover:text-blue-500/20 transition-colors duration-500 select-none">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:text-blue-400 transition-colors group/btn cursor-pointer bg-transparent border-none p-0"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Project Details
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-space-900/80 backdrop-blur-sm"
              aria-hidden="true"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl shadow-2xl border border-white/10 flex flex-col bg-space-800"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="sticky top-0 bg-space-800/90 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-center z-10">
                <div>
                  <span className="inline-block px-3 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-mono mb-2 border border-blue-500/30">
                    {selectedProject.modalDetails?.type}
                  </span>
                  <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-2">Objective</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.modalDetails?.objective}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-2">Approach</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.modalDetails?.approach}</p>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">Workflow</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.modalDetails?.workflow.map((step, i) => (
                      <div key={i} className="flex items-center">
                        <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                          {step}
                        </span>
                        {i < (selectedProject.modalDetails?.workflow.length || 0) - 1 && (
                          <ArrowRight className="w-4 h-4 text-gray-500 mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-2">Key Learning</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.modalDetails?.learning}</p>
                </div>
              </div>
              
              <div className="sticky bottom-0 bg-space-800/90 backdrop-blur-md border-t border-white/10 p-6 flex flex-wrap justify-between items-center gap-4 z-10">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-gray-400 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={selectedProject.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-wide transition-colors flex items-center gap-2"
                >
                  <FileText size={18} />
                  Project Documentation
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
