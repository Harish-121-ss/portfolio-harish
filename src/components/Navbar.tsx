import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 font-mono text-sm">H</span>
                </span>
                HARISH<span className="text-blue-400">.SS</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a href="/resume.pdf" download="Harish_SS_Resume.pdf" className="ml-4 px-4 py-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 text-white text-sm font-medium transition-all">
                Resume
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-300 hover:text-white focus:outline-none p-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 shadow-xl border-t border-white/5"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-base text-gray-300 hover:text-white px-2 py-1"
              >
                {item.name}
              </a>
            ))}
            <a href="/resume.pdf" download="Harish_SS_Resume.pdf" className="px-4 py-2 rounded bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-medium transition-all text-center">
              Download Resume
            </a>
          </motion.div>
        )}
      </nav>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-500 z-[60] origin-left"
        style={{ scaleX }}
      />
    </>
  );
};

export default Navbar;
