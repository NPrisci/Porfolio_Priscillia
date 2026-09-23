import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiX, FiDownload, FiMapPin, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_Priscillia_NOUDOFININ.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div 
        id="cv-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-sky-100"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sky-100 bg-[#F0F7FF]/50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4A90E2]" />
            <h2 id="cv-modal-title" className="font-display font-bold text-base sm:text-lg text-[#0F172A]">
              Curriculum Vitae — Priscillia NOUDOFININ
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="cv-download-btn"
              type="button"
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-[#4A90E2] hover:bg-[#3B7DD8] text-white shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
              aria-label="Télécharger le CV en PDF"
              title="Télécharger le CV en PDF"
            >
              <FiDownload className="w-4 h-4" />
            </button>

            <button
              id="cv-close-btn"
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-sky-100 transition-colors"
              aria-label="Fermer la modal"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:space-y-6 text-[#0F172A]">
          
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b-2 border-sky-200">
            <div>
              <h1 className="font-display font-extrabold text-3xl text-[#0F172A] tracking-tight">
                Priscillia NOUDOFININ
              </h1>
              <p className="text-lg font-semibold text-[#3B7DD8] mt-1">
                Développeuse Full-Stack & Analyste
              </p>
              <p className="text-xs sm:text-sm text-[#475569] mt-2 max-w-xl">
                Passionnée par la transformation de problématiques concrètes en produits numériques fiables et performants. Alliant rigueur algorithmique, compétences full-stack (Laravel, React, PHP, MySQL, Tailwind) et maîtrise des technologies d'IA générative.
              </p>
            </div>

            <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-100 text-xs text-[#475569] space-y-1.5 shrink-0 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <FiMapPin className="w-3.5 h-3.5 text-[#4A90E2]" />
                <span>Cotonou, Bénin</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="w-3.5 h-3.5 text-[#4A90E2]" />
                <a href="mailto:priscilialauress@gmail.com" className="text-[#3B7DD8] hover:underline">
                  priscilialauress@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiLinkedin className="w-3.5 h-3.5 text-[#4A90E2]" />
                <span>linkedin.com/in/priscilia-noudofinin</span>
              </div>
              <div className="flex items-center gap-2">
                <FiGithub className="w-3.5 h-3.5 text-[#4A90E2]" />
                <span>github.com/priscilia-noudofinin</span>
              </div>
            </div>
          </div>

          {/* Education / Formation */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#0F172A] border-b border-sky-100 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A90E2]" />
              <span>FORMATION & DIPLÔMES</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-[#0F172A]">Licence en Informatique de Gestion (3ème année)</p>
                  <p className="text-[#3B7DD8]">ENEAM / UAC (École Nationale d'Économie Appliquée et de Management) — Cotonou</p>
                </div>
                <span className="font-mono text-xs text-[#475569] shrink-0">2023 — 2026</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-[#0F172A]">Licence 1 — Mathématiques & Informatique Appliquées</p>
                  <p className="text-[#3B7DD8]">FAST / UAC (Faculté des Sciences et Techniques) — Abomey-Calavi</p>
                </div>
                <span className="font-mono text-xs text-[#475569] shrink-0">2022 — 2023</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-[#0F172A]">Baccalauréat Scientifique — Série D</p>
                  <p className="text-[#3B7DD8]">Obtenu avec Mention</p>
                </div>
                <span className="font-mono text-xs text-[#475569] shrink-0">2022</span>
              </div>
            </div>
          </div>

          {/* Work Experiences */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#0F172A] border-b border-sky-100 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A90E2]" />
              <span>EXPÉRIENCES PROFESSIONNELLES</span>
            </h3>

            <div className="space-y-5 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#0F172A]">Designer IA & Créatrice de Contenu Visuel — Neutraderm</p>
                    <p className="text-xs text-[#3B7DD8]">Mission Freelance</p>
                  </div>
                  <span className="font-mono text-xs text-[#475569]">2026</span>
                </div>
                <p className="text-[#475569] mt-1">Génération de visuels publicitaires haute fidélité via Midjourney, RunwayML et CapCut.</p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#0F172A]">Stagiaire Développeuse Full-Stack — CLIFFA Services</p>
                    <p className="text-xs text-[#3B7DD8]">Stage d'immersion technique</p>
                  </div>
                  <span className="font-mono text-xs text-[#475569]">Fév 2026</span>
                </div>
                <p className="text-[#475569] mt-1">Intégration React, conception d'APIs Node.js et requêtes MySQL optimisées.</p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#0F172A]">Stagiaire Développeuse Web — MARKTECH</p>
                    <p className="text-xs text-[#3B7DD8]">Stage pratique en entreprise</p>
                  </div>
                  <span className="font-mono text-xs text-[#475569]">Août — Sept 2025</span>
                </div>
                <p className="text-[#475569] mt-1">Création de solutions web responsives pour clients PME en PHP, JavaScript et MySQL.</p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#0F172A]">Stagiaire Full-Stack — Ministère de la Défense Nationale</p>
                    <p className="text-xs text-[#3B7DD8]">Stage institutionnel (Prytanée Militaire)</p>
                  </div>
                  <span className="font-mono text-xs text-[#475569]">Juin — Août 2025</span>
                </div>
                <p className="text-[#475569] mt-1">Conception et automatisation du système de gestion des notes et bulletins trimestriels officiels en PDF.</p>
              </div>
            </div>
          </div>

          {/* Certifications Highlights */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#0F172A] border-b border-sky-100 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A90E2]" />
              <span>CERTIFICATIONS & RECONNAISSANCES (9)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                <span className="font-bold text-[#0F172A]">EEIA (Fondation Vallet)</span> — IA & Machine Learning (2023)
              </div>
              <div className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                <span className="font-bold text-[#0F172A]">Piscine C (Epitech Bénin)</span> — Algorithmique & C (2025)
              </div>
              <div className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                <span className="font-bold text-[#0F172A]">IndabaX Bénin</span> — Conférence & Workshops IA (2026)
              </div>
              <div className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                <span className="font-bold text-[#0F172A]">LinkedIn Learning</span> — Vibe Coding & AI Software (2026)
              </div>
              <div className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                <span className="font-bold text-[#0F172A]">Skills Academy</span> — React & Tailwind Moderne (2025)
              </div>
              <div className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                <span className="font-bold text-[#0F172A]">DataCamp / Akieni</span> — Data Analysis & Full-Stack (En cours 2026)
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#0F172A] border-b border-sky-100 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A90E2]" />
              <span>COMPÉTENCES TECHNIQUES</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <p className="font-bold text-[#0F172A]">Front-End :</p>
                <p className="text-[#475569]">React, JavaScript (ES6+), Tailwind CSS, Vue.js, HTML5, CSS3, Responsive Design</p>
              </div>
              <div>
                <p className="font-bold text-[#0F172A]">Back-End & Données :</p>
                <p className="text-[#475569]">PHP, Laravel, Node.js, MySQL, Modélisation relationnelle (Merise, UML), REST APIs</p>
              </div>
              <div>
                <p className="font-bold text-[#0F172A]">IA & Outils Créatifs :</p>
                <p className="text-[#475569]">Midjourney, DALL-E, RunwayML, Kling AI, Canva, CapCut, Prompt Engineering</p>
              </div>
              <div>
                <p className="font-bold text-[#0F172A]">Méthodes & Outils :</p>
                <p className="text-[#475569]">Git / GitHub, Agile / Scrum, VS Code, Postman, Microsoft Excel avancé</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F0F7FF]/50 border-t border-sky-100 flex items-center justify-between shrink-0">
          <p className="text-xs text-[#475569]">
            Disponible pour un recrutement immédiat à Cotonou ou en télétravail international.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white border border-sky-200 text-xs font-semibold text-[#0F172A] hover:bg-sky-50 transition-colors"
          >
            {t.cvModal.close}
          </button>
        </div>

      </div>
    </div>
  );
};