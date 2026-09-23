import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CertificationsBook } from './components/CertificationsBook';
import { Experience } from './components/Experience';
import { Formation } from './components/Formation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#0F172A] selection:bg-[#4A90E2]/20 selection:text-[#3B7DD8]">
        
        {/* Accessible Skip to Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#4A90E2] text-white font-semibold rounded-lg shadow-lg focus:outline-none"
        >
          Passer au contenu principal
        </a>

        {/* Global Navigation Bar */}
        <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-grow">
          {/* Hero Section */}
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Flagship Projects */}
          <Projects />

          {/* Technical & Creative Skills */}
          <Skills />

          {/* ⭐ 3D Interactive Certifications Book ⭐ */}
          <CertificationsBook />

          {/* Professional Work Experience */}
          <Experience />

          {/* Academic Formations & Degrees */}
          <Formation />

          {/* Contact & Hire Section */}
          <Contact onOpenCV={() => setIsCVModalOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive CV Modal */}
        <CVModal 
          isOpen={isCVModalOpen} 
          onClose={() => setIsCVModalOpen(false)} 
        />

      </div>
    </LanguageProvider>
  );
}
