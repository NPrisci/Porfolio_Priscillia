import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiMapPin, FiMail, FiBookOpen, FiCheckCircle, FiLinkedin, FiGithub } from 'react-icons/fi';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#3B7DD8] uppercase tracking-wider mb-3">
            {t.about.sectionTag}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight max-w-2xl">
            {t.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stylized Photo with inclined sky-blue decorative frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              
              {/* Inclined decorative sky-blue background frame */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#4A90E2] to-[#E1EFFE] transform rotate-3 sm:rotate-6 scale-95 opacity-80 transition-transform hover:rotate-2 duration-300"
              />
              
              {/* Secondary offset frame border */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl border-2 border-[#4A90E2]/30 transform -rotate-2 sm:-rotate-3 scale-100 pointer-events-none"
              />

              {/* Main Photo Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white border border-sky-100 z-10 flex flex-col">
                <img 
                  src="face.jfif" 
                  alt="Priscillia NOUDOFININ" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay Badge on image */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-sky-100 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#0F172A]">Priscillia NOUDOFININ</p>
                      <p className="text-[11px] text-[#3B7DD8] font-medium">Bénin • Full-Stack</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#4A90E2]">
                      <a 
                        href="https://www.linkedin.com/in/priscilia-noudofinin-3b4735275/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1.5 hover:bg-sky-50 rounded-lg transition-colors"
                        aria-label="Profil LinkedIn de Priscillia"
                      >
                        <FiLinkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href="https://github.com/priscilia-noudofinin" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1.5 hover:bg-sky-50 rounded-lg transition-colors"
                        aria-label="Profil GitHub de Priscillia"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio in 3 Paragraphs & Quick Facts */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed">
            
            <p className="text-[#0F172A] font-medium text-lg sm:text-xl leading-relaxed">
              {t.about.p1}
            </p>

            <p>
              {t.about.p2}
            </p>

            <p>
              {t.about.p3}
            </p>

            {/* Structured Info Chips */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0F7FF] border border-sky-100">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#4A90E2] shadow-xs">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#475569] font-medium">Localisation</div>
                  <div className="text-sm font-semibold text-[#0F172A]">{t.about.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0F7FF] border border-sky-100">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#4A90E2] shadow-xs">
                  <FiBookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#475569] font-medium">Cursus</div>
                  <div className="text-sm font-semibold text-[#0F172A]">ENEAM / UAC (2023-2026)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0F7FF] border border-sky-100">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#4A90E2] shadow-xs">
                  <FiMail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-[#475569] font-medium">Email direct</div>
                  <a 
                    href={`mailto:${t.about.email}`} 
                    className="text-sm font-semibold text-[#3B7DD8] hover:underline truncate block"
                  >
                    {t.about.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0F7FF] border border-sky-100">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#10B981] shadow-xs">
                  <FiCheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#475569] font-medium">Statut</div>
                  <div className="text-sm font-semibold text-[#10B981]">Prête pour embauche</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
