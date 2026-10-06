import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">07 - Contact</h2>
          <div className="h-[1px] w-full max-w-xs bg-white/10"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto items-center">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Meaningful.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              I'm always open to discussing new opportunities, creative ideas, or opportunities to be part of your visions. Feel free to reach out directly.
            </p>

            <div className="space-y-8">
              <div className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-lg text-white hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-lg text-white hover:text-blue-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10"></div>
            <div className="glass-card rounded-3xl p-10 md:p-14 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mb-6"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>

              <h3 className="text-2xl font-bold text-white mb-4">Start a Conversation</h3>
              <p className="text-gray-400 mb-8 max-w-sm">
                Whether you have an internship opportunity or a technical question, my inbox is always open.
              </p>

              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto px-8 py-4 bg-white text-space-900 rounded-xl font-bold tracking-wide hover:bg-blue-400 transition-colors flex items-center justify-center gap-3 group"
              >
                Send an Email 
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </a>

              <div className="mt-8 flex gap-6">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-lg" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-lg" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.a5.34 5.34 0 0 0-1.46-3.72 5.2 5.2 0 0 0-.14-3.66s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0c-2.72-1.84-3.9-1.46-3.9-1.46a5.2 5.2 0 0 0-.14 3.66A5.34 5.34 0 0 0 2 8.97c0 5.6 3.35 6.62 6.5 7A4.8 4.8 0 0 0 8 19v3"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
