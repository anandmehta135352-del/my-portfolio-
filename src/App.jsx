import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('portfolio_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {!isAuthenticated ? (
        <LoginModal onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <>
          {/* Fixed Sticky Header Navigation */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
