
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FiArrowDown,
  FiDownload,
  FiCode,
  FiAward,
  FiBriefcase,
} from 'react-icons/fi';
import gsap from 'gsap';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { t } = useLanguage();

  // =========================
  // HERO REFS
  // =========================

  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const narrativeRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // =========================
  // BACKGROUND REFS
  // =========================

  const gridRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const glow3Ref = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);

  // =========================
  // GSAP ANIMATIONS
  // =========================

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // 1. MOVING GRID
      // ==========================================

      gsap.to(gridRef.current, {
        backgroundPosition: '45px 45px',
        duration: 18,
        ease: 'none',
        repeat: -1,
      });

      // ==========================================
      // 2. AMBIENT GLOW 1
      // ==========================================

      gsap.to(glow1Ref.current, {
        x: 40,
        y: -30,
        scale: 1.08,
        duration: 7,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // ==========================================
      // 3. AMBIENT GLOW 2
      // ==========================================

      gsap.to(glow2Ref.current, {
        x: -35,
        y: 30,
        scale: 1.1,
        duration: 9,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // ==========================================
      // 4. CENTRAL GLOW
      // ==========================================

      gsap.to(glow3Ref.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // ==========================================
      // 5. SCAN LINE
      // ==========================================

      gsap.fromTo(
        scanRef.current,
        {
          y: '-100vh',
          opacity: 0,
        },
        {
          y: '100vh',
          opacity: 0.45,
          duration: 6,
          ease: 'power1.inOut',
          repeat: -1,
        }
      );

      // ==========================================
      // 6. TECHNOLOGY NODES
      // ==========================================

      gsap.to(node1Ref.current, {
        x: 20,
        y: -15,
        opacity: 0.9,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(node2Ref.current, {
        x: -25,
        y: 20,
        opacity: 0.7,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(node3Ref.current, {
        x: 15,
        y: 15,
        opacity: 0.8,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(node4Ref.current, {
        x: -20,
        y: -20,
        opacity: 0.8,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // ==========================================
      // 7. HERO CONTENT ENTRANCE
      // ==========================================

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.fromTo(
        badgeRef.current,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }
      )
        .fromTo(
          titleRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          '-=0.3'
        )
        .fromTo(
          taglineRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          '-=0.4'
        )
        .fromTo(
          narrativeRef.current,
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.3'
        )
        .fromTo(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          '-=0.3'
        )
        .fromTo(
          statsRef.current?.children || [],
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
          },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // =========================
  // SCROLL TO SECTION
  // =========================

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // =========================
  // JSX
  // =========================

  return (
    <section
      id="hero"
      ref={heroRef}
      className="
        relative
        min-h-[92vh]
        sm:min-h-screen
        flex
        items-center
        justify-center
        pt-24
        pb-16
        bg-[#F8FAFC]
        overflow-hidden
      "
    >
      {/* =====================================================
          ANIMATED TECHNOLOGY BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* ================================================
            MOVING GRID
        ================================================= */}

        <div
          ref={gridRef}
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(74, 144, 226, 0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(74, 144, 226, 0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '45px 45px',
          }}
        />

        {/* ================================================
            BLUE GLOW - TOP LEFT
        ================================================= */}

        <div
          ref={glow1Ref}
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#4A90E2]/10
            blur-[100px]
          "
        />

        {/* ================================================
            CYAN GLOW - RIGHT
        ================================================= */}

        <div
          ref={glow2Ref}
          className="
            absolute
            top-[35%]
            -right-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-cyan-300/10
            blur-[100px]
          "
        />

        {/* ================================================
            CENTRAL SOFT GLOW
        ================================================= */}

        <div
          ref={glow3Ref}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[650px]
            h-[300px]
            rounded-full
            bg-blue-400/[0.035]
            blur-[120px]
          "
        />

        {/* ================================================
            SCAN LINE
        ================================================= */}

        <div
          ref={scanRef}
          className="
            absolute
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#4A90E2]/40
            to-transparent
            blur-[1px]
          "
        />

        {/* ================================================
            TECHNOLOGY NODES
        ================================================= */}

        <div
          ref={node1Ref}
          className="
            absolute
            top-[20%]
            left-[12%]
            w-2
            h-2
            rounded-full
            bg-[#4A90E2]/60
            shadow-[0_0_15px_rgba(74,144,226,0.8)]
          "
        />

        <div
          ref={node2Ref}
          className="
            absolute
            top-[35%]
            right-[14%]
            w-2
            h-2
            rounded-full
            bg-cyan-400/60
            shadow-[0_0_15px_rgba(34,211,238,0.8)]
          "
        />

        <div
          ref={node3Ref}
          className="
            absolute
            bottom-[25%]
            left-[20%]
            w-1.5
            h-1.5
            rounded-full
            bg-[#4A90E2]/50
            shadow-[0_0_12px_rgba(74,144,226,0.7)]
          "
        />

        <div
          ref={node4Ref}
          className="
            absolute
            bottom-[18%]
            right-[25%]
            w-1.5
            h-1.5
            rounded-full
            bg-blue-400/50
            shadow-[0_0_12px_rgba(96,165,250,0.7)]
          "
        />

        {/* ================================================
            DECORATIVE CORNER LINES
        ================================================= */}

        <div
          className="
            absolute
            top-24
            left-8
            w-16
            h-16
            border-l
            border-t
            border-[#4A90E2]/10
          "
        />

        <div
          className="
            absolute
            top-24
            right-8
            w-16
            h-16
            border-r
            border-t
            border-[#4A90E2]/10
          "
        />

        <div
          className="
            absolute
            bottom-12
            left-8
            w-16
            h-16
            border-l
            border-b
            border-[#4A90E2]/10
          "
        />

        <div
          className="
            absolute
            bottom-12
            right-8
            w-16
            h-16
            border-r
            border-b
            border-[#4A90E2]/10
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          max-w-5xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          text-center
          relative
          z-10
        "
      >
        {/* =================================================
            AVAILABILITY BADGE
        ================================================= */}

        <div
          ref={badgeRef}
          className="inline-flex items-center justify-center mb-6"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2.5
              px-4
              py-1.5
              rounded-full
              bg-white/90
              border
              border-sky-200
              shadow-sm
              text-xs
              font-semibold
              text-[#0F172A]
              backdrop-blur-sm
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  animate-ping
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-[#10B981]
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  rounded-full
                  h-2.5
                  w-2.5
                  bg-[#10B981]
                "
              />
            </span>

            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* =================================================
            MAIN TITLE
        ================================================= */}

        <div
          ref={titleRef}
          className="mb-4"
        >
          <p
            className="
              text-sm
              sm:text-base
              font-semibold
              text-[#4A90E2]
              tracking-wider
              uppercase
              mb-2
            "
          >
            {t.hero.greeting}
          </p>

          <h1
            className="
              font-display
              font-extrabold
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              text-[#0F172A]
              tracking-tight
              leading-[1.1]
              max-w-4xl
              mx-auto
            "
          >
            {t.hero.name}
          </h1>

          <p
            className="
              mt-3
              text-lg
              sm:text-2xl
              font-medium
              text-[#3B7DD8]
            "
          >
            {t.hero.role}
          </p>
        </div>

        {/* =================================================
            TAGLINE
        ================================================= */}

        <p
          ref={taglineRef}
          className="
            text-base
            sm:text-xl
            text-[#475569]
            max-w-2xl
            mx-auto
            mb-4
            leading-relaxed
            font-normal
          "
        >
          {t.hero.tagline}
        </p>

        {/* =================================================
            NARRATIVE
        ================================================= */}

        <p
          ref={narrativeRef}
          className="
            text-xs
            sm:text-sm
            font-mono
            text-[#3B7DD8]/90
            italic
            mb-8
            max-w-xl
            mx-auto
            bg-white/70
            py-1.5
            px-4
            rounded-full
            border
            border-sky-100
            shadow-sm
            inline-block
            backdrop-blur-sm
          "
        >
          {t.hero.narrative}
        </p>

        {/* =================================================
            CTA BUTTONS
        ================================================= */}

        <div
          ref={ctaRef}
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            sm:gap-4
            mb-14
          "
        >
          {/* PROJECTS BUTTON */}

          <button
            id="hero-cta-projects"
            type="button"
            onClick={() => scrollToSection('#projects')}
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              px-7
              py-3.5
              rounded-xl
              bg-[#4A90E2]
              hover:bg-[#3B7DD8]
              text-white
              font-semibold
              text-sm
              sm:text-base
              shadow-md
              hover:shadow-lg
              shadow-[#4A90E2]/25
              hover:-translate-y-0.5
              transition-all
              focus:outline-none
              focus:ring-2
              focus:ring-[#4A90E2]
              focus:ring-offset-2
            "
          >
            <span>{t.hero.ctaProjects}</span>

            <FiArrowDown className="w-4 h-4" />
          </button>

          {/* RESUME BUTTON */}

          <button
            id="hero-cta-resume"
            type="button"
            onClick={onOpenCV}
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              px-7
              py-3.5
              rounded-xl
              bg-white
              hover:bg-sky-50
              text-[#0F172A]
              font-semibold
              text-sm
              sm:text-base
              border
              border-sky-200
              shadow-sm
              hover:shadow
              hover:-translate-y-0.5
              transition-all
              focus:outline-none
              focus:ring-2
              focus:ring-[#4A90E2]
            "
          >
            <FiDownload className="w-4 h-4 text-[#4A90E2]" />

            <span>{t.hero.ctaResume}</span>
          </button>
        </div>

        {/* =================================================
            STATS
        ================================================= */}

        <div
          ref={statsRef}
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-3
            sm:gap-6
            max-w-3xl
            mx-auto
          "
        >
          {/* ==============================================
              PROJECTS
          =============================================== */}

          <div
            className="
              bg-white/90
              backdrop-blur-sm
              border
              border-sky-100
              rounded-2xl
              p-4
              sm:p-5
              shadow-sm
              hover:border-sky-300
              transition-colors
              flex
              items-center
              gap-4
              text-left
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-sky-50
                border
                border-sky-200
                flex
                items-center
                justify-center
                text-[#4A90E2]
                shrink-0
              "
            >
              <FiCode className="w-6 h-6" />
            </div>

            <div>
              <div
                className="
                  font-display
                  font-bold
                  text-2xl
                  text-[#0F172A]
                "
              >
                3+
              </div>

              <div
                className="
                  text-xs
                  text-[#475569]
                  font-medium
                "
              >
                {t.hero.stats.projects}
              </div>
            </div>
          </div>

          {/* ==============================================
              CERTIFICATIONS
          =============================================== */}

          <div
            className="
              bg-white/90
              backdrop-blur-sm
              border
              border-sky-100
              rounded-2xl
              p-4
              sm:p-5
              shadow-sm
              hover:border-sky-300
              transition-colors
              flex
              items-center
              gap-4
              text-left
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-sky-50
                border
                border-sky-200
                flex
                items-center
                justify-center
                text-[#4A90E2]
                shrink-0
              "
            >
              <FiAward className="w-6 h-6" />
            </div>

            <div>
              <div
                className="
                  font-display
                  font-bold
                  text-2xl
                  text-[#0F172A]
                "
              >
                9
              </div>

              <div
                className="
                  text-xs
                  text-[#475569]
                  font-medium
                "
              >
                {t.hero.stats.certifications}
              </div>
            </div>
          </div>

          {/* ==============================================
              INTERNSHIPS
          =============================================== */}

          <div
            className="
              bg-white/90
              backdrop-blur-sm
              border
              border-sky-100
              rounded-2xl
              p-4
              sm:p-5
              shadow-sm
              hover:border-sky-300
              transition-colors
              flex
              items-center
              gap-4
              text-left
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-sky-50
                border
                border-sky-200
                flex
                items-center
                justify-center
                text-[#4A90E2]
                shrink-0
              "
            >
              <FiBriefcase className="w-6 h-6" />
            </div>

            <div>
              <div
                className="
                  font-display
                  font-bold
                  text-2xl
                  text-[#0F172A]
                "
              >
                4
              </div>

              <div
                className="
                  text-xs
                  text-[#475569]
                  font-medium
                "
              >
                {t.hero.stats.internships}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
