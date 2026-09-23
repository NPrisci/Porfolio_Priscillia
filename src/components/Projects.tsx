import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F0F7FF]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-xs font-semibold text-[#3B7DD8] uppercase tracking-wider mb-3">
            {t.projects.sectionTag}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            {t.projects.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects List (Alternating left/right) */}
        <div className="space-y-16 sm:space-y-24">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div 
                key={project.id}
                id={`project-card-${project.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual / Screenshot Column */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group rounded-2xl overflow-hidden border border-sky-200/80 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    
                    {/* Browser top-bar mockup */}
                    <div className="bg-[#0F172A] px-4 py-2.5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <div className="mx-auto text-[11px] font-mono text-slate-400 bg-slate-800/80 px-3 py-0.5 rounded-md border border-slate-700 max-w-[200px] sm:max-w-xs truncate">
                        https://{project.id}.app.benin
                      </div>
                    </div>

                    {/* Screenshot container */}
                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-100">
                      <img 
                        src={project.image} 
                        alt={project.title[language]} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                          {project.category[language]}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Content / Info Column */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#3B7DD8] bg-sky-100/80 px-2.5 py-0.5 rounded-md">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                      {project.category[language]}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0F172A] tracking-tight mb-2">
                    {project.title[language]}
                  </h3>

                  <p className="text-sm font-medium text-[#3B7DD8] mb-4">
                    {project.subtitle[language]}
                  </p>

                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                    {project.description[language]}
                  </p>

                  {/* 4 Features List */}
                  <div className="mb-6 space-y-2.5 bg-white/70 backdrop-blur-xs p-4 rounded-xl border border-sky-100">
                    <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                      {t.projects.featuresTitle}
                    </p>
                    {project.features[language].map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                        <FiCheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white text-[#0F172A] border border-sky-200/80 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.demoUrl || "#"}
                      onClick={(e) => {
                        if (!project.demoUrl || project.demoUrl.includes("example.com")) {
                          e.preventDefault();
                          alert(`${project.title[language]} — Démo interactive en cours de déploiement.`);
                        }
                      }}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4A90E2] hover:bg-[#3B7DD8] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                      aria-label={`${t.projects.demoBtn} — ${project.title[language]}`}
                    >
                      <span>{t.projects.demoBtn}</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl || "https://github.com/priscilia-noudofinin"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-sky-50 text-[#0F172A] text-xs sm:text-sm font-semibold border border-sky-200 shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                      aria-label={`${t.projects.codeBtn} — ${project.title[language]}`}
                    >
                      <FiGithub className="w-3.5 h-3.5 text-[#0F172A]" />
                      <span>{t.projects.codeBtn}</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
