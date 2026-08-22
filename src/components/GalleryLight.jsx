import React, { useEffect } from 'react';

export function GalleryLight() {
  useEffect(() => {
    let rafId;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.3;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateLight = () => {
      // Smooth lerp for buttery organic movement
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      document.documentElement.style.setProperty('--mouse-x', `${currentX.toFixed(1)}px`);
      document.documentElement.style.setProperty('--mouse-y', `${currentY.toFixed(1)}px`);

      const normX = ((currentX / window.innerWidth) - 0.5) * 2;
      const normY = ((currentY / window.innerHeight) - 0.5) * 2;
      document.documentElement.style.setProperty('--light-angle-x', normX.toFixed(3));
      document.documentElement.style.setProperty('--light-angle-y', normY.toFixed(3));

      rafId = requestAnimationFrame(updateLight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateLight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Ambient Gallery Track Light (Warm Ivory Radial Luminescence) */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle 680px at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(212, 182, 133, 0.09) 0%, rgba(158, 116, 56, 0.025) 45%, transparent 75%)`,
        }}
      />

      {/* 2. Microscopic Archival Cotton-Rag Paper Grain */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
