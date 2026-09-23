import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';
import { SubtleDotGridBackground } from './SubtleDotGridBackground';
import { 
  FiExternalLink, 
  FiAward, 
  FiBookOpen, 
  FiCheckCircle, 
  FiClock, 
  FiCompass,
  FiSend,
  FiShield,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiBookmark,
  FiCheck
} from 'react-icons/fi';

export const CertificationsBook: React.FC = () => {
  const { language, t } = useLanguage();
  
  // Total spreads:
  // 0: Closed Cover
  // 1 to 9: Certifications 1 to 9 (Two-page spread: Left details, Right credential)
  // 10: Final conclusion & contact
  const totalSpreads = certificationsData.length + 2; // 11 spreads (indices 0..10)
  
  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const [targetSpread, setTargetSpread] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  const [flipProgress, setFlipProgress] = useState<number>(0); // 0 to 1

  const animationRef = useRef<number | null>(null);

  // Trigger 3D page flip animation to target spread
  const turnToSpread = (dest: number) => {
    if (dest === currentSpread || isFlipping || dest < 0 || dest >= totalSpreads) return;

    const dir = dest > currentSpread ? 'forward' : 'backward';
    setFlipDirection(dir);
    setTargetSpread(dest);
    setIsFlipping(true);
    setFlipProgress(0);

    const startTime = performance.now();
    const duration = 650; // ms for a realistic page turn

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth cubic bezier easing for realistic paper flip physics
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setFlipProgress(easeProgress);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentSpread(dest);
        setIsFlipping(false);
        setFlipProgress(0);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handlePrev = () => {
    if (currentSpread > 0 && !isFlipping) {
      turnToSpread(currentSpread - 1);
    }
  };

  const handleNext = () => {
    if (currentSpread < totalSpreads - 1 && !isFlipping) {
      turnToSpread(currentSpread + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('certifications');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Calculate 3D rotation angles for flipping sheet
  // Forward turn: 0deg -> -180deg
  // Backward turn: -180deg -> 0deg
  const flipAngle = flipDirection === 'forward' 
    ? -180 * flipProgress 
    : -180 + 180 * flipProgress;

  // Active certification for current display
  const activeCert = currentSpread >= 1 && currentSpread <= certificationsData.length 
    ? certificationsData[currentSpread - 1] 
    : null;

  // Helper renderers for Left and Right pages of any spread
  const renderLeftPage = (spreadIndex: number) => {
    if (spreadIndex === 0) {
      return (
        <div className="w-full h-full p-8 flex flex-col justify-between bg-slate-900 text-white select-none">
          <div className="border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
              Introduction
            </span>
          </div>
          <div className="my-auto py-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-2xl mb-3">
              📖
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">
              Recueil d'Accréditations
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ce recueil présente 9 programmes d'excellence en intelligence artificielle, modélisation prédictive, algorithmique de pointe et développement web.
            </p>
          </div>
          <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400">
            Priscillia NOUDOFININ
          </div>
        </div>
      );
    }

    if (spreadIndex >= 1 && spreadIndex <= certificationsData.length) {
      const cert = certificationsData[spreadIndex - 1];
      const isObtained = cert.status === 'obtained';

      return (
        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-white text-[#0F172A] select-none relative overflow-hidden">
          {/* Inner shadow near spine */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900/10 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between pb-3 border-b border-sky-100">
            <span className="text-xs font-mono text-[#3B7DD8] font-bold">
              N° 0{cert.id} / 09
            </span>
            {isObtained ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-[#10B981] border border-emerald-200">
                <FiCheckCircle className="w-3.5 h-3.5" />
                <span>{t.book.statusObtained}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-[#F59E0B] border border-amber-200">
                <FiClock className="w-3.5 h-3.5" />
                <span>{t.book.statusInProgress}</span>
              </span>
            )}
          </div>

          <div className="my-auto py-3">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-13 h-13 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-3xl shrink-0 shadow-xs">
                {cert.emoji}
              </div>
              <div>
                <p className="text-xs font-bold text-[#3B7DD8] uppercase tracking-wider">{cert.issuer}</p>
                <p className="text-xs text-[#475569] font-medium mt-0.5">{cert.date[language]}</p>
              </div>
            </div>

            <h4 className="font-display font-bold text-base sm:text-lg text-[#0F172A] leading-snug mb-2.5">
              {cert.title[language]}
            </h4>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
              {cert.description[language]}
            </p>

            <div className="bg-[#F0F7FF] p-3 rounded-xl border border-sky-100">
              <p className="text-[10px] font-bold text-[#3B7DD8] uppercase tracking-wider mb-1">
                {t.book.keySkill}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#0F172A] leading-snug">
                {cert.keySkill[language]}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-xs">
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-semibold text-[#3B7DD8] hover:text-[#4A90E2] transition-colors p-1"
            >
              <span>{t.book.viewCert}</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="font-mono text-slate-400">Page {spreadIndex * 2 - 1}</span>
          </div>
        </div>
      );
    }

    // Final spread left page
    return (
      <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-slate-900 text-white select-none">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            Bilan des Accréditations
          </span>
          <h4 className="font-display font-bold text-xl text-white mt-2 mb-4 leading-tight">
            9 Certifications Clés
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-lg">🧠</span>
              <span>Machine Learning & Réseaux de neurones</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-lg">⚡</span>
              <span>Rigueur C, Pointeurs & Algorithmique (Epitech)</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-lg">💻</span>
              <span>Développement Full-Stack (React, TypeScript)</span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
          Priscillia NOUDOFININ • Profil Analyste & Ingénierie
        </div>
      </div>
    );
  };

  const renderRightPage = (spreadIndex: number) => {
    if (spreadIndex === 0) {
      // Front cover
      return (
        <div 
          onClick={handleNext}
          className="w-full h-full p-6 sm:p-9 flex flex-col justify-between text-white select-none relative overflow-hidden cursor-pointer group"
          style={{
            background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 40%, #3B82F6 75%, #60A5FA 100%)',
          }}
        >
          {/* Subtle spine binding shadow on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/35 via-black/15 to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-md">
              <FiBookOpen className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full border border-white/30 font-semibold backdrop-blur-sm">
              Official Credentials
            </span>
          </div>

          <div className="relative z-10 my-auto text-center py-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl sm:text-4xl border border-white/30 shadow-xl group-hover:scale-105 transition-transform duration-300">
              ⭐
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight text-white mb-2 drop-shadow-md">
              {t.book.coverTitle}
            </h3>
            <div className="w-14 h-1 bg-white/90 rounded-full mx-auto mb-3 shadow-sm" />
            <p className="text-xs sm:text-sm text-sky-100 max-w-xs mx-auto leading-relaxed font-medium">
              {t.book.coverSubtitle}
            </p>

            <div className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#1E40AF] font-bold text-xs shadow-lg group-hover:bg-sky-50 group-hover:scale-105 transition-all">
              <span>Ouvrir le livre</span>
              <FiChevronRight className="w-3.5 h-3.5 text-[#2563EB]" />
            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
            <div>
              <p className="text-[10px] text-sky-200 uppercase tracking-wider font-semibold">Candidat</p>
              <p className="font-display font-bold text-white text-xs sm:text-sm">{t.book.coverAuthor}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-sky-200 uppercase tracking-wider font-semibold">Volume</p>
              <p className="font-mono text-xs text-white font-semibold">9 Formations</p>
            </div>
          </div>
        </div>
      );
    }

    if (spreadIndex >= 1 && spreadIndex <= certificationsData.length) {
      const cert = certificationsData[spreadIndex - 1];

      return (
        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#0B1329] text-white select-none relative overflow-hidden">
          {/* Inner shadow near spine */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950/40 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-300 font-bold uppercase tracking-wide">
              <FiShield className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.book.certificateImageLabel}</span>
            </span>
            <span className="text-xs font-mono text-slate-400">Page {spreadIndex * 2}</span>
          </div>

          {/* Credential High-Fidelity Card */}
          <div className="my-auto py-2">
            <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-5 sm:p-6 shadow-xl relative overflow-hidden">
              {/* Corner guilloche accents */}
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-sky-400/50" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400/50" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400/50" />
              <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-sky-400/50" />

              <div className="text-center pt-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400/20 to-blue-600/30 border border-sky-400/40 flex items-center justify-center text-2xl mx-auto mb-2 text-sky-200 shadow-md">
                  {cert.emoji}
                </div>
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold">
                  {cert.issuer}
                </span>
                <h5 className="font-display font-bold text-xs sm:text-sm text-white mt-1 leading-tight line-clamp-2">
                  {cert.title[language]}
                </h5>
              </div>

              <div className="my-3 py-2 border-y border-white/10 text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold">
                  <FiCheck className="w-3 h-3" />
                  <span>Accréditation Certifiée</span>
                </div>
                <p className="text-xs text-slate-300 font-mono tracking-wider">
                  ID : <strong className="text-white font-bold">{cert.credentialId ?? `CERT-BJ-${cert.id}`}</strong>
                </p>
                <p className="text-[10px] text-slate-400">
                  Titulaire : <span className="text-slate-200 font-semibold">Priscillia NOUDOFININ</span>
                </p>
              </div>

              <div className="pt-1 text-center">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3.5 rounded-xl bg-[#4A90E2] hover:bg-[#3B7DD8] text-white text-xs font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-95"
                >
                  <span>{t.book.openOriginal}</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-xs">{cert.date[language]}</span>
            <span className="text-sky-300 font-semibold text-xs">Vérifiable en ligne ↗</span>
          </div>
        </div>
      );
    }

    // Final spread right page (CTA)
    return (
      <div className="w-full h-full p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold">Next Step</span>
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sky-300">
            <FiSend className="w-4 h-4" />
          </div>
        </div>

        <div className="my-auto text-center py-4">
          <div className="text-4xl mb-3">🤝</div>
          <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 leading-tight">
            {t.book.thankYouTitle}
          </h3>
          <div className="w-12 h-1 bg-[#4A90E2] rounded-full mx-auto mb-3" />
          <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto mb-5">
            {t.book.thankYouText}
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4A90E2] hover:bg-[#3B7DD8] text-white text-xs font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <span>{t.book.thankYouBtn}</span>
            <FiSend className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
          Cotonou, Bénin • Ouverte aux opportunités
        </div>
      </div>
    );
  };

  return (
    <section 
      id="certifications" 
      className="py-20 sm:py-28 relative overflow-hidden min-h-[900px] flex flex-col justify-center"
    >
      {/* Dynamic Animated Background: Grid of tiny soft-blue dots + drifting dots */}
      <SubtleDotGridBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-xs font-semibold text-[#3B7DD8] uppercase tracking-wider mb-3 shadow-xs">
            <FiAward className="w-3.5 h-3.5" />
            <span>{t.book.sectionTag}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            {t.book.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            {t.book.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3B7DD8] bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
              <FiCompass className="w-3.5 h-3.5 text-[#4A90E2]" />
              <span>{t.book.dragHint}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>9 Certifications d'excellence vérifiées</span>
            </span>
          </div>
        </div>

        {/* 3D Realistic Book Stage with Perspective */}
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          
          <div className="relative w-full flex items-center justify-center">
            
            {/* Floating Previous Arrow Button (Desktop) */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentSpread === 0 || isFlipping}
              aria-label={t.book.prevPage}
              className={`hidden sm:flex absolute -left-4 md:-left-8 lg:-left-12 z-40 w-12 h-12 rounded-full items-center justify-center shadow-xl transition-all border ${
                currentSpread === 0 || isFlipping
                  ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-40' 
                  : 'bg-white hover:bg-sky-50 text-[#3B7DD8] border-sky-200 hover:scale-110 active:scale-95 shadow-sky-200/50'
              }`}
              title="Page précédente (ou flèche gauche ←)"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Book Shell with 3D Perspective */}
            <div 
              className="relative p-2.5 sm:p-5 rounded-3xl bg-slate-900/5 border border-sky-200/70 shadow-2xl shadow-[#4A90E2]/20 w-full max-w-4xl"
              style={{
                perspective: '2200px',
              }}
            >
              
              {/* BOOK CONTAINER */}
              <div 
                className="relative w-full aspect-[4/3] max-h-[560px] min-h-[460px] rounded-2xl overflow-hidden shadow-2xl flex"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(225, 239, 254, 0.9)'
                }}
              >
                
                {/* ========================================================================= */}
                {/* 1. LEFT STATIC BASE WING (50% WIDTH) */}
                {/* ========================================================================= */}
                <div 
                  onClick={handlePrev}
                  className="w-1/2 h-full relative cursor-pointer group overflow-hidden"
                >
                  {/* Underneath: if flipping backward, show targetSpread's left page; otherwise show currentSpread's left page */}
                  {renderLeftPage(isFlipping && flipDirection === 'backward' ? targetSpread : currentSpread)}
                </div>

                {/* ========================================================================= */}
                {/* 2. RIGHT STATIC BASE WING (50% WIDTH) */}
                {/* ========================================================================= */}
                <div 
                  onClick={handleNext}
                  className="w-1/2 h-full relative cursor-pointer group overflow-hidden"
                >
                  {/* Underneath: if flipping forward, show targetSpread's right page; otherwise show currentSpread's right page */}
                  {renderRightPage(isFlipping && flipDirection === 'forward' ? targetSpread : currentSpread)}
                </div>

                {/* ========================================================================= */}
                {/* 3. 3D FLIPPING SHEET (ANIMATING PAGE TURN) */}
                {/* ========================================================================= */}
                {isFlipping && (
                  <div
                    className="absolute top-0 bottom-0 pointer-events-none z-30"
                    style={{
                      left: '50%',
                      width: '50%',
                      transformOrigin: 'left center',
                      transformStyle: 'preserve-3d',
                      transform: `rotateY(${flipAngle}deg)`,
                      willChange: 'transform',
                    }}
                  >
                    {/* FRONT FACE OF TURNING SHEET (Facing Right) */}
                    <div
                      className="absolute inset-0 w-full h-full overflow-hidden rounded-r-2xl shadow-2xl"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      {/* Displays the outgoing or incoming right page */}
                      {renderRightPage(flipDirection === 'forward' ? currentSpread : targetSpread)}

                      {/* Realistic dynamic light & shade sweep during flip */}
                      <div 
                        className="absolute inset-0 pointer-events-none transition-opacity"
                        style={{
                          background: `linear-gradient(to right, rgba(0, 0, 0, ${0.4 * Math.sin(flipProgress * Math.PI)}), transparent)`,
                          opacity: Math.sin(flipProgress * Math.PI),
                        }}
                      />
                    </div>

                    {/* BACK FACE OF TURNING SHEET (Facing Left, Rotated 180deg) */}
                    <div
                      className="absolute inset-0 w-full h-full overflow-hidden rounded-l-2xl shadow-2xl"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      {/* Displays the incoming left page as it flips across the spine */}
                      {renderLeftPage(flipDirection === 'forward' ? targetSpread : currentSpread)}

                      {/* Realistic shadow on paper back as it lands */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(to left, rgba(0, 0, 0, ${0.4 * Math.sin(flipProgress * Math.PI)}), transparent)`,
                          opacity: Math.sin(flipProgress * Math.PI),
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* 4. REALISTIC BOOK SPINE BINDING CREASE (CENTER) */}
                {/* ========================================================================= */}
                <div 
                  className="absolute left-1/2 top-0 bottom-0 w-6 -translate-x-1/2 pointer-events-none z-40"
                  style={{
                    background: 'linear-gradient(to right, rgba(15, 23, 42, 0.25) 0%, rgba(15, 23, 42, 0.05) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(15, 23, 42, 0.05) 55%, rgba(15, 23, 42, 0.25) 100%)'
                  }}
                />

                {/* Subtle top & bottom binder groove */}
                <div className="absolute left-1/2 top-0 w-2 h-3 -translate-x-1/2 bg-slate-700/40 rounded-b pointer-events-none z-40" />
                <div className="absolute left-1/2 bottom-0 w-2 h-3 -translate-x-1/2 bg-slate-700/40 rounded-t pointer-events-none z-40" />
              </div>
            </div>

            {/* Floating Next Arrow Button (Desktop) */}
            <button
              type="button"
              onClick={handleNext}
              disabled={currentSpread === totalSpreads - 1 || isFlipping}
              aria-label={t.book.nextPage}
              className={`hidden sm:flex absolute -right-4 md:-right-8 lg:-right-12 z-40 w-12 h-12 rounded-full items-center justify-center shadow-xl transition-all border ${
                currentSpread === totalSpreads - 1 || isFlipping
                  ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-40' 
                  : 'bg-white hover:bg-sky-50 text-[#3B7DD8] border-sky-200 hover:scale-110 active:scale-95 shadow-sky-200/50'
              }`}
              title="Page suivante (ou flèche droite →)"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* ========================================================================= */}
          {/* BOUTONS DE PAGINATION DU LIVRE (DEMANDÉS PAR L'UTILISATEUR) */}
          {/* ========================================================================= */}
          <div className="mt-8 w-full max-w-3xl flex flex-col items-center gap-4">
            
            {/* Primary Pagination Toolbar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-sky-200 shadow-xl backdrop-blur-md">
              
              {/* Previous & First Controls */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  type="button"
                  onClick={() => turnToSpread(0)}
                  disabled={currentSpread === 0 || isFlipping}
                  className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 hover:text-[#3B7DD8] hover:bg-sky-50 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 border border-transparent hover:border-sky-200 text-xs font-semibold"
                  title="Revenir à la couverture (Début)"
                >
                  <FiChevronsLeft className="w-4 h-4" />
                  <span className="hidden md:inline">Début</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentSpread === 0 || isFlipping}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#3B7DD8] bg-sky-50 hover:bg-sky-100 disabled:opacity-30 disabled:pointer-events-none transition-all border border-sky-200 shadow-2xs"
                >
                  <FiChevronLeft className="w-4 h-4" />
                  <span>Précédent</span>
                </button>
              </div>

              {/* Numbered Pagination Buttons */}
              <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
                {/* Couverture */}
                <button
                  type="button"
                  onClick={() => turnToSpread(0)}
                  disabled={isFlipping}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    currentSpread === 0
                      ? 'bg-[#3B7DD8] text-white shadow-sm scale-105 font-bold'
                      : 'bg-slate-50 hover:bg-sky-50 text-slate-700 border border-slate-200'
                  }`}
                  title="Couverture"
                >
                  Couv.
                </button>

                {/* Certifications 1 to 9 */}
                {certificationsData.map((c, i) => {
                  const spreadNum = i + 1;
                  const isActive = currentSpread === spreadNum;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => turnToSpread(spreadNum)}
                      disabled={isFlipping}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                        isActive
                          ? 'bg-[#3B7DD8] text-white shadow-md scale-110 ring-2 ring-sky-300'
                          : 'bg-slate-50 hover:bg-sky-50 text-slate-700 border border-slate-200 hover:border-sky-300'
                      }`}
                      title={`${c.issuer} — ${c.title[language]}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}

                {/* Page finale */}
                <button
                  type="button"
                  onClick={() => turnToSpread(totalSpreads - 1)}
                  disabled={isFlipping}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    currentSpread === totalSpreads - 1
                      ? 'bg-[#3B7DD8] text-white shadow-sm scale-105 font-bold'
                      : 'bg-slate-50 hover:bg-sky-50 text-slate-700 border border-slate-200'
                  }`}
                  title="Page finale / Contact"
                >
                  Fin
                </button>
              </div>

              {/* Next & Last Controls */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentSpread === totalSpreads - 1 || isFlipping}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#4A90E2] hover:bg-[#3B7DD8] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm hover:shadow-md"
                >
                  <span>Suivant</span>
                  <FiChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => turnToSpread(totalSpreads - 1)}
                  disabled={currentSpread === totalSpreads - 1 || isFlipping}
                  className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 hover:text-[#3B7DD8] hover:bg-sky-50 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 border border-transparent hover:border-sky-200 text-xs font-semibold"
                  title="Aller à la dernière page (Fin)"
                >
                  <span className="hidden md:inline">Fin</span>
                  <FiChevronsRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Current Certification Detail Banner */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-sky-200/80 text-xs shadow-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium truncate">
                <FiBookmark className="w-3.5 h-3.5 text-[#3B7DD8] shrink-0" />
                <span className="truncate">
                  {currentSpread === 0 && "Couverture officielle • Recueil de certifications"}
                  {currentSpread >= 1 && currentSpread <= certificationsData.length && (
                    <>
                      <strong className="text-[#3B7DD8] font-bold">Certification 0{currentSpread} / 09 : </strong>
                      {certificationsData[currentSpread - 1].issuer} — {certificationsData[currentSpread - 1].title[language]}
                    </>
                  )}
                  {currentSpread === totalSpreads - 1 && "Synthèse finale & Contact"}
                </span>
              </div>
              <span className="font-mono font-bold text-[#3B7DD8] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 shrink-0">
                {currentSpread + 1} / {totalSpreads}
              </span>
            </div>

            {/* Quick Access Badges by Topic */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl px-2">
              <span className="text-[11px] font-mono text-slate-500 mr-1 flex items-center gap-1 font-medium">
                Accès direct :
              </span>
              {certificationsData.map((c, i) => {
                const spreadNum = i + 1;
                const isActive = currentSpread === spreadNum;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => turnToSpread(spreadNum)}
                    disabled={isFlipping}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1 ${
                      isActive 
                        ? 'bg-[#3B7DD8] text-white border-[#3B7DD8] font-bold shadow-xs scale-105' 
                        : 'bg-white hover:bg-sky-50 text-slate-700 border-sky-200 hover:border-sky-300 font-medium shadow-2xs'
                    }`}
                    title={`${c.issuer} — ${c.title[language]}`}
                  >
                    <span>{c.emoji}</span>
                    <span>{c.issuer.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
