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
  FiCheck
} from 'react-icons/fi';

export const CertificationsBook: React.FC = () => {
  const { language, t } = useLanguage();

  // 🔹 Détection mobile inline (pas besoin de hook externe)
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Total spreads:
  // 0: Closed Cover
  // 1 to 9: Certifications 1 to 9
  // 10: Final conclusion & contact
  const totalSpreads = certificationsData.length + 2;

  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const [targetSpread, setTargetSpread] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  const [flipProgress, setFlipProgress] = useState<number>(0);

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
    const duration = 650;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

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

  // 3D rotation angles for flipping sheet
  const flipAngle = flipDirection === 'forward'
    ? -180 * flipProgress
    : -180 + 180 * flipProgress;

  // Mobile flip angle (single page flip)
  const mobileFlipAngle = flipDirection === 'forward'
    ? 180 * flipProgress
    : 180 - 180 * flipProgress;

  // Helper to get the page content for a given spread on mobile
  const getMobilePageContent = (spreadIndex: number) => {
    if (spreadIndex === 0) return renderRightPage(0);
    if (spreadIndex <= certificationsData.length) return renderLeftPage(spreadIndex);
    return renderRightPage(certificationsData.length + 1);
  };

  // ================== LEFT PAGE RENDERER ==================
  const renderLeftPage = (spreadIndex: number) => {
    if (spreadIndex === 0) {
      return (
        <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-slate-900 text-white select-none">
          <div className="border-b border-white/10 pb-2 sm:pb-3">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
              Introduction
            </span>
          </div>
          <div className="my-auto py-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-xl sm:text-2xl mb-2 sm:mb-3">
              📖
            </div>
            <h4 className="font-display font-bold text-base sm:text-lg text-white mb-2">
              Recueil d'Accréditations
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              Ce recueil présente 9 programmes d'excellence en intelligence artificielle, modélisation prédictive, algorithmique de pointe et développement web.
            </p>
          </div>
          <div className="pt-2 sm:pt-3 border-t border-white/10 text-[10px] sm:text-[11px] text-slate-400">
            Priscillia NOUDOFININ
          </div>
        </div>
      );
    }

    if (spreadIndex >= 1 && spreadIndex <= certificationsData.length) {
      const cert = certificationsData[spreadIndex - 1];
      const isObtained = cert.status === 'obtained';

      return (
        <div className="w-full h-full p-3 sm:p-6 md:p-8 flex flex-col justify-between bg-white text-[#0F172A] select-none relative overflow-hidden">
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900/10 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-sky-100 gap-2">
            <span className="text-[10px] sm:text-xs font-mono text-[#3B7DD8] font-bold">
              N° 0{cert.id} / 09
            </span>
            {isObtained ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-emerald-50 text-[#10B981] border border-emerald-200">
                <FiCheckCircle className="w-3 h-3" />
                <span>{t.book.statusObtained}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-50 text-[#F59E0B] border border-amber-200">
                <FiClock className="w-3 h-3" />
                <span>{t.book.statusInProgress}</span>
              </span>
            )}
          </div>

          <div className="my-auto py-2 sm:py-3">
            <div className="flex items-center gap-2.5 sm:gap-3.5 mb-2.5 sm:mb-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-2xl sm:text-3xl shrink-0 shadow-xs">
                {cert.emoji}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs font-bold text-[#3B7DD8] uppercase tracking-wider truncate">
                  {cert.issuer}
                </p>
                <p className="text-[10px] sm:text-xs text-[#475569] font-medium mt-0.5">
                  {cert.date[language]}
                </p>
              </div>
            </div>

            <h4 className="font-display font-bold text-sm sm:text-base md:text-lg text-[#0F172A] leading-snug mb-2 sm:mb-2.5">
              {cert.title[language]}
            </h4>

            <p className="text-[11px] sm:text-xs md:text-sm text-[#475569] leading-relaxed mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-none">
              {cert.description[language]}
            </p>

            <div className="bg-[#F0F7FF] p-2.5 sm:p-3 rounded-xl border border-sky-100">
              <p className="text-[9px] sm:text-[10px] font-bold text-[#3B7DD8] uppercase tracking-wider mb-1">
                {t.book.keySkill}
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#0F172A] leading-snug">
                {cert.keySkill[language]}
              </p>
            </div>
          </div>

          <div className="pt-2 sm:pt-3 border-t border-sky-100 flex items-center justify-between text-[10px] sm:text-xs gap-2">
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 sm:gap-1.5 font-semibold text-[#3B7DD8] hover:text-[#4A90E2] transition-colors p-1"
            >
              <span>{t.book.viewCert}</span>
              <FiExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <span className="font-mono text-slate-400">Page {spreadIndex * 2 - 1}</span>
          </div>
        </div>
      );
    }

    // Final spread left page
    return (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-slate-900 text-white select-none">
        <div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            Bilan des Accréditations
          </span>
          <h4 className="font-display font-bold text-base sm:text-xl text-white mt-2 mb-3 sm:mb-4 leading-tight">
            9 Certifications Clés
          </h4>
          <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-base sm:text-lg">🧠</span>
              <span>Machine Learning & Réseaux de neurones</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-base sm:text-lg">⚡</span>
              <span>Rigueur C, Pointeurs & Algorithmique (Epitech)</span>
            </div>
            <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-base sm:text-lg">💻</span>
              <span>Développement Full-Stack (React, TypeScript)</span>
            </div>
          </div>
        </div>
        <div className="pt-3 border-t border-slate-800 text-[10px] sm:text-xs text-slate-400">
          Priscillia NOUDOFININ • Profil Analyste & Ingénierie
        </div>
      </div>
    );
  };

  // ================== RIGHT PAGE RENDERER ==================
  const renderRightPage = (spreadIndex: number) => {
    if (spreadIndex === 0) {
      // Front cover
      return (
        <div
          onClick={handleNext}
          className="w-full h-full p-4 sm:p-6 md:p-9 flex flex-col justify-between text-white select-none relative overflow-hidden cursor-pointer group"
          style={{
            background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 40%, #3B82F6 75%, #60A5FA 100%)',
          }}
        >
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/35 via-black/15 to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-2 sm:pb-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-md">
              <FiBookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 font-semibold backdrop-blur-sm">
              Official Credentials
            </span>
          </div>

          <div className="relative z-10 my-auto text-center py-3 sm:py-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl sm:text-3xl md:text-4xl border border-white/30 shadow-xl group-hover:scale-105 transition-transform duration-300">
              ⭐
            </div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight text-white mb-2 drop-shadow-md">
              {t.book.coverTitle}
            </h3>
            <div className="w-12 sm:w-14 h-1 bg-white/90 rounded-full mx-auto mb-2 sm:mb-3 shadow-sm" />
            <p className="text-[11px] sm:text-xs md:text-sm text-sky-100 max-w-xs mx-auto leading-relaxed font-medium">
              {t.book.coverSubtitle}
            </p>

            <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-[#1E40AF] font-bold text-[11px] sm:text-xs shadow-lg group-hover:bg-sky-50 group-hover:scale-105 transition-all">
              <span>Ouvrir le livre</span>
              <FiChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2563EB]" />
            </div>
          </div>

          <div className="relative z-10 pt-2 sm:pt-3 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs">
            <div>
              <p className="text-[9px] sm:text-[10px] text-sky-200 uppercase tracking-wider font-semibold">Candidat</p>
              <p className="font-display font-bold text-white text-[11px] sm:text-sm">{t.book.coverAuthor}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] sm:text-[10px] text-sky-200 uppercase tracking-wider font-semibold">Volume</p>
              <p className="font-mono text-[11px] sm:text-xs text-white font-semibold">9 Formations</p>
            </div>
          </div>
        </div>
      );
    }

    if (spreadIndex >= 1 && spreadIndex <= certificationsData.length) {
      const cert = certificationsData[spreadIndex - 1];

      return (
        <div className="w-full h-full p-3 sm:p-6 md:p-8 flex flex-col justify-between bg-[#0B1329] text-white select-none relative overflow-hidden">
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950/40 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 gap-2">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-mono text-sky-300 font-bold uppercase tracking-wide">
              <FiShield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400" />
              <span>{t.book.certificateImageLabel}</span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-400">Page {spreadIndex * 2}</span>
          </div>

          <div className="my-auto py-2">
            <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-3.5 sm:p-5 md:p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-2.5 left-2.5 w-3 h-3 sm:w-3.5 sm:h-3.5 border-t-2 border-l-2 border-sky-400/50" />
              <div className="absolute top-2.5 right-2.5 w-3 h-3 sm:w-3.5 sm:h-3.5 border-t-2 border-r-2 border-sky-400/50" />
              <div className="absolute bottom-2.5 left-2.5 w-3 h-3 sm:w-3.5 sm:h-3.5 border-b-2 border-l-2 border-sky-400/50" />
              <div className="absolute bottom-2.5 right-2.5 w-3 h-3 sm:w-3.5 sm:h-3.5 border-b-2 border-r-2 border-sky-400/50" />

              <div className="text-center pt-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-sky-400/20 to-blue-600/30 border border-sky-400/40 flex items-center justify-center text-xl sm:text-2xl mx-auto mb-2 text-sky-200 shadow-md">
                  {cert.emoji}
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold">
                  {cert.issuer}
                </span>
                <h5 className="font-display font-bold text-[11px] sm:text-xs md:text-sm text-white mt-1 leading-tight line-clamp-2">
                  {cert.title[language]}
                </h5>
              </div>

              <div className="my-2.5 sm:my-3 py-2 border-y border-white/10 text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] sm:text-[11px] font-semibold">
                  <FiCheck className="w-3 h-3" />
                  <span>Accréditation Certifiée</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-300 font-mono tracking-wider">
                  ID : <strong className="text-white font-bold">{cert.credentialId ?? `CERT-BJ-${cert.id}`}</strong>
                </p>
                <p className="text-[9px] sm:text-[10px] text-slate-400">
                  Titulaire : <span className="text-slate-200 font-semibold">Priscillia NOUDOFININ</span>
                </p>
              </div>

              <div className="pt-1 text-center">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 sm:px-3.5 rounded-xl bg-[#4A90E2] hover:bg-[#3B7DD8] text-white text-[11px] sm:text-xs font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-95"
                >
                  <span>{t.book.openOriginal}</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs text-slate-400">
            <span className="font-mono">{cert.date[language]}</span>
            <span className="text-sky-300 font-semibold">Vérifiable en ligne ↗</span>
          </div>
        </div>
      );
    }

    // Final spread right page (CTA)
    return (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col justify-between select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 sm:pb-3">
          <span className="text-[10px] sm:text-xs font-mono text-sky-400 uppercase tracking-widest font-bold">Next Step</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center text-sky-300">
            <FiSend className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>

        <div className="my-auto text-center py-3 sm:py-4">
          <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🤝</div>
          <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-white mb-2 leading-tight">
            {t.book.thankYouTitle}
          </h3>
          <div className="w-10 sm:w-12 h-1 bg-[#4A90E2] rounded-full mx-auto mb-2 sm:mb-3" />
          <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed max-w-xs mx-auto mb-4 sm:mb-5">
            {t.book.thankYouText}
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#4A90E2] hover:bg-[#3B7DD8] text-white text-[11px] sm:text-xs font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <span>{t.book.thankYouBtn}</span>
            <FiSend className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        <div className="pt-2 sm:pt-3 border-t border-slate-800 text-center text-[10px] sm:text-xs text-slate-400">
          Cotonou, Bénin • Ouverte aux opportunités
        </div>
      </div>
    );
  };

  // ================== MAIN RENDER ==================
  return (
    <section
      id="certifications"
      className="py-14 sm:py-20 md:py-28 relative overflow-hidden flex flex-col justify-center"
    >
      <SubtleDotGridBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-sky-100 border border-sky-200 text-[10px] sm:text-xs font-semibold text-[#3B7DD8] uppercase tracking-wider mb-3 shadow-xs">
            <FiAward className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{t.book.sectionTag}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#0F172A] tracking-tight">
            {t.book.title}
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-[#475569]">
            {t.book.subtitle}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-[#3B7DD8] bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-sky-200 shadow-xs">
              <FiCompass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4A90E2]" />
              <span>{t.book.dragHint}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 sm:px-3 sm:py-1.5 rounded-full border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>9 Certifications d'excellence vérifiées</span>
            </span>
          </div>
        </div>

        {/* 3D Book Stage */}
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">

          <div className="relative w-full flex items-center justify-center">

            {/* Floating Previous Arrow (Desktop only) */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentSpread === 0 || isFlipping}
              aria-label={t.book.prevPage}
              className={`hidden md:flex absolute -left-4 md:-left-8 lg:-left-12 z-40 w-12 h-12 rounded-full items-center justify-center shadow-xl transition-all border ${
                currentSpread === 0 || isFlipping
                  ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-40'
                  : 'bg-white hover:bg-sky-50 text-[#3B7DD8] border-sky-200 hover:scale-110 active:scale-95 shadow-sky-200/50'
              }`}
              title="Page précédente (ou flèche gauche ←)"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Book Shell */}
            <div
              className="relative p-2 sm:p-4 md:p-5 rounded-3xl bg-slate-900/5 border border-sky-200/70 shadow-2xl shadow-[#4A90E2]/20 w-full max-w-4xl"
              style={{ perspective: isMobile ? '1400px' : '2200px' }}
            >

              {/* BOOK CONTAINER */}
              <div
                className={`relative w-full rounded-2xl overflow-hidden shadow-2xl flex ${
                  isMobile
                    ? 'aspect-[3/4] max-w-md mx-auto'
                    : 'aspect-[4/3] max-h-[560px] min-h-[460px]'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(225, 239, 254, 0.9)'
                }}
              >

                {isMobile ? (
                  /* ============ MOBILE : UNE SEULE PAGE ============ */
                  <>
                    {/* Static background page */}
                    <div className="w-full h-full relative overflow-hidden">
                      {getMobilePageContent(currentSpread)}
                    </div>

                    {/* Animated flipping sheet */}
                    {isFlipping && (
                      <div
                        className="absolute inset-0 pointer-events-none z-30"
                        style={{
                          transformOrigin: 'left center',
                          transformStyle: 'preserve-3d',
                          transform: `rotateY(${mobileFlipAngle}deg)`,
                          willChange: 'transform',
                        }}
                      >
                        {/* Front face */}
                        <div
                          className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl shadow-2xl"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                          }}
                        >
                          {getMobilePageContent(
                            flipDirection === 'forward' ? currentSpread : targetSpread
                          )}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: `linear-gradient(to right, rgba(0, 0, 0, ${0.35 * Math.sin(flipProgress * Math.PI)}), transparent)`,
                              opacity: Math.sin(flipProgress * Math.PI),
                            }}
                          />
                        </div>

                        {/* Back face */}
                        <div
                          className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl shadow-2xl"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                          }}
                        >
                          {getMobilePageContent(
                            flipDirection === 'forward' ? targetSpread : currentSpread
                          )}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: `linear-gradient(to left, rgba(0, 0, 0, ${0.35 * Math.sin(flipProgress * Math.PI)}), transparent)`,
                              opacity: Math.sin(flipProgress * Math.PI),
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* ============ DESKTOP : DOUBLE PAGE ============ */
                  <>
                    {/* Left static wing */}
                    <div
                      onClick={handlePrev}
                      className="w-1/2 h-full relative cursor-pointer group overflow-hidden"
                    >
                      {renderLeftPage(
                        isFlipping && flipDirection === 'backward' ? targetSpread : currentSpread
                      )}
                    </div>

                    {/* Right static wing */}
                    <div
                      onClick={handleNext}
                      className="w-1/2 h-full relative cursor-pointer group overflow-hidden"
                    >
                      {renderRightPage(
                        isFlipping && flipDirection === 'forward' ? targetSpread : currentSpread
                      )}
                    </div>

                    {/* 3D Flipping sheet */}
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
                        {/* Front face */}
                        <div
                          className="absolute inset-0 w-full h-full overflow-hidden rounded-r-2xl shadow-2xl"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                          }}
                        >
                          {renderRightPage(flipDirection === 'forward' ? currentSpread : targetSpread)}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: `linear-gradient(to right, rgba(0, 0, 0, ${0.4 * Math.sin(flipProgress * Math.PI)}), transparent)`,
                              opacity: Math.sin(flipProgress * Math.PI),
                            }}
                          />
                        </div>

                        {/* Back face */}
                        <div
                          className="absolute inset-0 w-full h-full overflow-hidden rounded-l-2xl shadow-2xl"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                          }}
                        >
                          {renderLeftPage(flipDirection === 'forward' ? targetSpread : currentSpread)}
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

                    {/* Spine binding crease (desktop only) */}
                    <div
                      className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none z-40"
                      style={{
                        background:
                          'linear-gradient(to right, rgba(15, 23, 42, 0.25) 0%, rgba(15, 23, 42, 0.05) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(15, 23, 42, 0.05) 55%, rgba(15, 23, 42, 0.25) 100%)'
                      }}
                    />
                    <div className="absolute left-1/2 top-0 w-2 h-3 -translate-x-1/2 bg-slate-700/40 rounded-b pointer-events-none z-40" />
                    <div className="absolute left-1/2 bottom-0 w-2 h-3 -translate-x-1/2 bg-slate-700/40 rounded-t pointer-events-none z-40" />
                  </>
                )}
              </div>
            </div>

            {/* Floating Next Arrow (Desktop only) */}
            <button
              type="button"
              onClick={handleNext}
              disabled={currentSpread === totalSpreads - 1 || isFlipping}
              aria-label={t.book.nextPage}
              className={`hidden md:flex absolute -right-4 md:-right-8 lg:-right-12 z-40 w-12 h-12 rounded-full items-center justify-center shadow-xl transition-all border ${
                currentSpread === totalSpreads - 1 || isFlipping
                  ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-40'
                  : 'bg-white hover:bg-sky-50 text-[#3B7DD8] border-sky-200 hover:scale-110 active:scale-95 shadow-sky-200/50'
              }`}
              title="Page suivante (ou flèche droite →)"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* ============ MOBILE NAVIGATION (below the book) ============ */}
          {isMobile && (
            <div className="flex items-center justify-between w-full max-w-md mx-auto mt-5 gap-3 px-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentSpread === 0 || isFlipping}
                aria-label={t.book.prevPage}
                className={`flex w-11 h-11 rounded-full items-center justify-center shadow-lg border transition-all ${
                  currentSpread === 0 || isFlipping
                    ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                    : 'bg-white hover:bg-sky-50 text-[#3B7DD8] border-sky-200 active:scale-95'
                }`}
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center gap-1.5 flex-1">
                <div className="flex items-center gap-1 flex-wrap justify-center">
                  {Array.from({ length: totalSpreads }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => turnToSpread(i)}
                      disabled={isFlipping}
                      aria-label={`Aller à la page ${i}`}
                      className={`transition-all rounded-full ${
                        i === currentSpread
                          ? 'w-5 h-2 bg-[#4A90E2]'
                          : 'w-2 h-2 bg-slate-300 hover:bg-sky-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  {currentSpread === 0
                    ? 'Couverture'
                    : currentSpread <= certificationsData.length
                      ? `Certification ${currentSpread}/${certificationsData.length}`
                      : 'Fin'}
                </span>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentSpread === totalSpreads - 1 || isFlipping}
                aria-label={t.book.nextPage}
                className={`flex w-11 h-11 rounded-full items-center justify-center shadow-lg border transition-all ${
                  currentSpread === totalSpreads - 1 || isFlipping
                    ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                    : 'bg-white hover:bg-sky-50 text-[#3B7DD8] border-sky-200 active:scale-95'
                }`}
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};