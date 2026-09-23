import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FiMail, 
  FiLinkedin, 
  FiGithub, 
  FiMapPin, 
  FiCopy, 
  FiCheck, 
  FiDownload, 
  FiArrowUpRight,
  FiSend
} from 'react-icons/fi';

interface ContactProps {
  onOpenCV: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCV }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "priscilialauress@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#4A90E2]/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-[#4A90E2] uppercase tracking-wider mb-3">
            <FiSend className="w-3.5 h-3.5" />
            <span>{t.contact.sectionTag}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          
          {/* Email Card with Copy Feature */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 hover:border-[#4A90E2] transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/15 border border-[#4A90E2]/30 flex items-center justify-center text-[#4A90E2] mb-4 group-hover:scale-110 transition-transform">
                <FiMail className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1">
                {t.contact.emailCard}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {t.contact.emailSub}
              </p>
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/60 font-mono text-xs sm:text-sm text-sky-200 flex items-center justify-between gap-2 overflow-hidden">
                <span className="truncate">{email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copier l'adresse email"
                  title="Copier"
                >
                  {copied ? <FiCheck className="w-4 h-4 text-[#10B981]" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-700/50">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A90E2] hover:text-sky-300 transition-colors"
              >
                <span>Ouvrir dans votre messagerie</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
              {copied && (
                <span className="text-xs text-[#10B981] font-medium animate-fadeIn">
                  {t.contact.copied}
                </span>
              )}
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/priscilia-noudofinin-3b4735275/"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 hover:border-[#4A90E2] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0077B5] mb-4 group-hover:scale-110 transition-transform">
                <FiLinkedin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1">
                {t.contact.linkedInCard}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {t.contact.linkedInSub}
              </p>
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/60 font-mono text-xs text-sky-200 truncate">
                linkedin.com/in/priscilia-noudofinin-3b4735275
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-700/50 text-xs font-semibold text-[#4A90E2] group-hover:text-sky-300 transition-colors">
              <span>Consulter mon profil complet</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/priscilia-noudofinin"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 hover:border-[#4A90E2] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <FiGithub className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1">
                {t.contact.githubCard}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {t.contact.githubSub}
              </p>
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/60 font-mono text-xs text-sky-200 truncate">
                github.com/priscilia-noudofinin
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-700/50 text-xs font-semibold text-[#4A90E2] group-hover:text-sky-300 transition-colors">
              <span>Voir mes dépôts et commits</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Location & Availability Card */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 hover:border-[#4A90E2] transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4 group-hover:scale-110 transition-transform">
                <FiMapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1">
                {t.contact.locationCard}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {t.contact.locationSub}
              </p>
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/60 font-mono text-xs text-emerald-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Disponible pour opportunités à l'international & local</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-700/50 text-xs font-semibold text-slate-300">
              <span>Fuseau horaire : GMT+1 (WAT)</span>
              <span>Cotonou, Bénin</span>
            </div>
          </div>

        </div>

        {/* Big Download Resume Action Bar */}
        <div className="text-center bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#4A90E2] font-semibold mb-2">
            Curriculum Vitae Officiel
          </p>
          <h3 className="font-display font-bold text-2xl text-white mb-4">
            Envie d'examiner mon parcours en détail ?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Consultez ou téléchargez mon CV au format PDF récapitulant mes compétences full-stack, mes stages et mon cursus.
          </p>
          
          <button
            id="contact-download-cv-btn"
            type="button"
            onClick={onOpenCV}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#4A90E2] hover:bg-[#3B7DD8] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#4A90E2]/30 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <FiDownload className="w-5 h-5" />
            <span>{t.contact.downloadCV}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
