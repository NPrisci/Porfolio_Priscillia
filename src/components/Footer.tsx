import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiArrowUp, FiHeart, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-[#0B1120] text-slate-400 py-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#3B7DD8] text-white flex items-center justify-center font-display font-bold text-lg shadow-md shadow-[#4A90E2]/20">
              PN
            </div>
            <div>
              <p className="font-display font-bold text-white text-base">
                Priscillia NOUDOFININ
              </p>
              <p className="text-xs text-slate-400">
                Développeuse Full-Stack & Analyste
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/priscilia-noudofinin-3b4735275/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#4A90E2] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/priscilia-noudofinin"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#4A90E2] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:priscilialauress@gmail.com"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#4A90E2] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <FiArrowUp className="w-3.5 h-3.5 text-[#4A90E2]" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p className="flex items-center justify-center gap-1">
            <span>Fait avec</span>
            <FiHeart className="w-3.5 h-3.5 text-[#EF4444] fill-[#EF4444]" />
            <span>à Cotonou, Bénin.</span>
          </p>
          <p>
            © {new Date().getFullYear()} Priscillia NOUDOFININ. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
};
