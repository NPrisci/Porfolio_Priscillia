import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skills';
import { 
  SiPhp, 
  SiLaravel, 
  SiJavascript, 
  SiReact, 
  SiVuedotjs, 
  SiHtml5, 
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiPostman
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandSpeedtest, TbBrandCss3, TbBrandOpenai, TbBrandMysql } from 'react-icons/tb';
import { BsCameraVideoFill, BsLightningChargeFill } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';
import { BiMoviePlay } from 'react-icons/bi';
import { VscCheckAll, VscCode } from 'react-icons/vsc';
import { RiFileExcel2Fill, RiFileWord2Fill, RiFilePpt2Fill } from 'react-icons/ri';
import { FiLayout } from 'react-icons/fi';

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const renderIcon = (name: string, fallbackColor: string = '#4A90E2') => {
    switch (name) {
      case 'SiPhp': return <SiPhp className="w-6 h-6" style={{ color: '#777BB4' }} />;
      case 'SiLaravel': return <SiLaravel className="w-6 h-6" style={{ color: '#FF2D20' }} />;
      case 'SiJavascript': return <SiJavascript className="w-6 h-6" style={{ color: '#F7DF1E' }} />;
      case 'SiReact': return <SiReact className="w-6 h-6" style={{ color: '#61DAFB' }} />;
      case 'SiVuedotjs': return <SiVuedotjs className="w-6 h-6" style={{ color: '#4FC08D' }} />;
      case 'TbBrandReactNative': return <TbBrandReactNative className="w-6 h-6" style={{ color: '#61DAFB' }} />;
      case 'SiHtml5': return <SiHtml5 className="w-6 h-6" style={{ color: '#E34F26' }} />;
      case 'SiCss3': return <TbBrandCss3 className="w-6 h-6" style={{ color: '#1572B6' }} />;
      case 'SiTailwindcss': return <SiTailwindcss className="w-6 h-6" style={{ color: '#06B6D4' }} />;
      case 'SiMidjourney': return <BsLightningChargeFill className="w-6 h-6 text-[#3B82F6]" />;
      case 'SiOpenai': return <TbBrandOpenai className="w-6 h-6 text-[#10A37F]" />;
      case 'BsCameraVideoFill': return <BsCameraVideoFill className="w-6 h-6 text-[#8B5CF6]" />;
      case 'HiSparkles': return <HiSparkles className="w-6 h-6 text-[#F59E0B]" />;
      case 'SiCanva': return <FiLayout className="w-6 h-6 text-[#00C4CC]" />;
      case 'BiMoviePlay': return <BiMoviePlay className="w-6 h-6 text-[#EC4899]" />;
      case 'TbBrandSpeedtest': return <TbBrandSpeedtest className="w-6 h-6 text-[#3B7DD8]" />;
      case 'SiFigma': return <SiFigma className="w-6 h-6 text-[#F24E1E]" />;
      case 'SiGithub': return <SiGithub className="w-6 h-6 text-[#181717]" />;
      case 'VscCheckAll': return <VscCheckAll className="w-6 h-6 text-[#10B981]" />;
      case 'SiMysql': return <TbBrandMysql className="w-6 h-6 text-[#4479A1]" />;
      case 'SiMicrosoftexcel': return <RiFileExcel2Fill className="w-6 h-6 text-[#107C41]" />;
      case 'SiMicrosoftword': return <RiFileWord2Fill className="w-6 h-6 text-[#2B579A]" />;
      case 'SiMicrosoftpowerpoint': return <RiFilePpt2Fill className="w-6 h-6 text-[#D24726]" />;
      case 'VscCode': return <VscCode className="w-6 h-6 text-[#007ACC]" />;
      case 'SiPostman': return <SiPostman className="w-6 h-6 text-[#FF6C37]" />;
      default: return <HiSparkles className="w-6 h-6" style={{ color: fallbackColor }} />;
    }
  };

  const filteredCategories = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#3B7DD8] uppercase tracking-wider mb-3">
            {t.skills.sectionTag}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2] ${
              activeCategory === 'all'
                ? 'bg-[#4A90E2] text-white shadow-sm'
                : 'bg-sky-50/70 text-[#475569] hover:bg-sky-100 hover:text-[#0F172A]'
            }`}
          >
            {language === 'fr' ? 'Toutes les compétences' : 'All Skillsets'}
          </button>

          {skillsData.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#4A90E2] ${
                activeCategory === cat.id
                  ? 'bg-[#4A90E2] text-white shadow-sm'
                  : 'bg-sky-50/70 text-[#475569] hover:bg-sky-100 hover:text-[#0F172A]'
              }`}
            >
              {cat.title[language]}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#F0F7FF]/40 border border-sky-100 rounded-2xl p-6 sm:p-8 hover:border-sky-300 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-5">
                <h3 className="font-display font-bold text-xl text-[#0F172A] tracking-tight mb-1">
                  {category.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569]">
                  {category.description[language]}
                </p>
              </div>

              {/* Grid of skill pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-sky-100/90 shadow-2xs hover:border-[#4A90E2]/40 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-50/70 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {renderIcon(skill.iconName, skill.color)}
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A] group-hover:text-[#3B7DD8] transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
