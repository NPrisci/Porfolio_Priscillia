import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { formationsData } from '../data/formations';
import { FiAward, FiCalendar, FiMapPin, FiBookOpen } from 'react-icons/fi';

export const Formation: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="formation" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#3B7DD8] uppercase tracking-wider mb-3">
            {t.formation.sectionTag}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            {t.formation.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            {t.formation.subtitle}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-200 space-y-12 sm:space-y-16">
          {formationsData.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#3B7DD8] flex items-center justify-center text-[#3B7DD8] shadow-sm group-hover:scale-110 group-hover:bg-[#3B7DD8] group-hover:text-white transition-all">
                <FiBookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>

              {/* Formation Card */}
              <div className="bg-[#F0F7FF]/30 rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-[#10B981] border border-emerald-200 mb-2">
                      {item.status[language]}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0F172A]">
                      {item.diploma[language]}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#3B7DD8]">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#475569] font-medium sm:text-right">
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar className="w-3.5 h-3.5 text-[#4A90E2]" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin className="w-3.5 h-3.5 text-[#4A90E2]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#475569] mb-4 leading-relaxed">
                  {item.description[language]}
                </p>

                {/* Key Subjects */}
                <div className="pt-2">
                  <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FiAward className="w-3.5 h-3.5 text-[#4A90E2]" />
                    <span>Matières & Domaines clés</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keySubjects[language].map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-[#0F172A] border border-sky-100 shadow-2xs"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
