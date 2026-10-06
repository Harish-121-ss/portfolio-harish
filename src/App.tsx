
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import TechConstellation from './components/TechConstellation';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="relative min-h-screen text-gray-200 selection:bg-blue-500/30 font-sans">
      <SpaceBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <TechConstellation />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
