import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FiGlobe, 
  FiMenu, 
  FiX, 
  FiArrowUpRight, 
  FiDownload 
} from 'react-icons/fi';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#experience', label: t.nav.experience },
    { href: '#formation', label: t.nav.formation },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-sky-100/80 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          id="navbar-brand"
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#4A90E2] rounded-lg p-1"
          aria-label="Retour au sommet"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#3B7DD8] text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-[#4A90E2]/25 group-hover:scale-105 transition-transform">
            PN
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-[#0F172A] group-hover:text-[#4A90E2] transition-colors">
              Priscillia <span className="text-[#4A90E2]">N.</span>
            </span>
            <span className="text-xs text-[#475569] font-medium hidden sm:inline-block">
              Full-Stack & Analyste
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav" aria-label="Navigation principale" className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-[#475569] hover:text-[#3B7DD8] transition-colors relative py-1 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Lang Toggle & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Bilingual Toggle Button */}
          <button
            id="lang-toggle-btn"
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-sky-200 bg-sky-50/70 hover:bg-sky-100 text-[#0F172A] transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            aria-label={`Changer de langue : actuel ${language.toUpperCase()}`}
            title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            <FiGlobe className="w-3.5 h-3.5 text-[#4A90E2]" />
            <span className={language === 'fr' ? 'text-[#3B7DD8] font-bold' : 'text-[#475569]'}>FR</span>
            <span className="text-sky-300">/</span>
            <span className={language === 'en' ? 'text-[#3B7DD8] font-bold' : 'text-[#475569]'}>EN</span>
          </button>

          {/* CV CTA Button */}
          <button
            id="nav-resume-btn"
            type="button"
            onClick={onOpenCV}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#4A90E2] hover:bg-[#3B7DD8] rounded-xl shadow-sm hover:shadow-md shadow-[#4A90E2]/25 transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
            aria-label={t.nav.ctaResume}
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>{t.nav.ctaResume}</span>
          </button>
        </div>

        {/* Mobile Controls (Lang + Hamburger) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-lang-toggle"
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg border border-sky-200 bg-sky-50 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            aria-label={`Langue : ${language.toUpperCase()}`}
          >
            <FiGlobe className="w-3 h-3 text-[#4A90E2]" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0F172A] hover:text-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2] rounded-lg"
            aria-label={mobileMenuOpen ? 'Fermer le menu mobile' : 'Ouvrir le menu mobile'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-xl px-4 pt-3 pb-6 animate-fadeIn"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-sky-50 hover:text-[#3B7DD8] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-sky-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#4A90E2] text-white text-sm font-semibold rounded-xl shadow-sm"
              >
                <FiDownload className="w-4 h-4" />
                <span>{t.nav.ctaResume}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
