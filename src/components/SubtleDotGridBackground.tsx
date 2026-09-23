import React, { useEffect, useRef } from 'react';

interface SubtleDotGridBackgroundProps {
  className?: string;
}

interface DriftingDot {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  fadeIn: boolean;
}

export const SubtleDotGridBackground: React.FC<SubtleDotGridBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Drifting particles
    const driftingDots: DriftingDot[] = [];
    const DOT_COUNT = 32;

    const resize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const initDriftingDots = () => {
      driftingDots.length = 0;
      for (let i = 0; i < DOT_COUNT; i++) {
        driftingDots.push({
          x: Math.random() * (width || window.innerWidth),
          y: Math.random() * (height || window.innerHeight),
          radius: 1.2 + Math.random() * 1.6, // tiny soft dots
          speedY: 0.25 + Math.random() * 0.45, // gentle downward drift
          speedX: (Math.random() - 0.5) * 0.15, // subtle horizontal drift
          opacity: Math.random() * 0.3,
          maxOpacity: 0.15 + Math.random() * 0.15, // max opacity up to ~30%
          fadeSpeed: 0.003 + Math.random() * 0.005,
          fadeIn: Math.random() > 0.5,
        });
      }
    };

    resize();
    initDriftingDots();
    window.addEventListener('resize', resize);

    const render = () => {
      if (!ctx || width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Light airy gradient background: white -> #F0F7FF -> white
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#FFFFFF');
      bgGrad.addColorStop(0.3, '#F8FAFC');
      bgGrad.addColorStop(0.5, '#F0F7FF');
      bgGrad.addColorStop(0.7, '#F8FAFC');
      bgGrad.addColorStop(1, '#FFFFFF');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Regular static grid of tiny soft-blue dots
      const gridSpacing = 32; // airy spacing
      const dotRadius = 1.0;
      ctx.fillStyle = 'rgba(74, 144, 226, 0.14)'; // #4A90E2 at ~14% for crisp soft grid

      for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. Drifting soft-blue dots drifting downward, fading in and out
      for (let i = 0; i < driftingDots.length; i++) {
        const dot = driftingDots[i];

        // Move downward
        dot.y += dot.speedY;
        dot.x += dot.speedX;

        // Fade in / out oscillation
        if (dot.fadeIn) {
          dot.opacity += dot.fadeSpeed;
          if (dot.opacity >= dot.maxOpacity) {
            dot.opacity = dot.maxOpacity;
            dot.fadeIn = false;
          }
        } else {
          dot.opacity -= dot.fadeSpeed;
          if (dot.opacity <= 0.02) {
            dot.opacity = 0.02;
            dot.fadeIn = true;
          }
        }

        // Recycle if out of bounds
        if (dot.y > height + 10) {
          dot.y = -10;
          dot.x = Math.random() * width;
          dot.opacity = 0;
          dot.fadeIn = true;
        }
        if (dot.x < -10) dot.x = width + 10;
        if (dot.x > width + 10) dot.x = -10;

        // Draw drifting dot with palette: #4A90E2 at up to 30% opacity
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 144, 226, ${dot.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
