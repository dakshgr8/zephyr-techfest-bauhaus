import React, { useEffect, useRef } from 'react';

export function CelestialCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle celestial interaction
    let mouse = { x: -1000, y: -1000, radius: 140 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Star generation
    let stars = [];
    const starCount = Math.min(Math.floor((width * height) / 18000), 55);

    function initStars() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          color: Math.random() > 0.4 ? '#C5A059' : '#181512',
          alpha: Math.random() * 0.4 + 0.15,
          speedAlpha: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
        });
      }
    }
    initStars();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw constellation connecting lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(197, 160, 89, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Mouse connection lines
        const mdx = stars[i].x - mouse.x;
        const mdy = stars[i].y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouse.radius) {
          const mAlpha = (1 - mDist / mouse.radius) * 0.25;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(197, 160, 89, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.x += s.vx;
          s.y += s.vy;

          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;

          s.alpha += s.speedAlpha;
          if (s.alpha <= 0.1 || s.alpha >= 0.6) {
            s.speedAlpha = -s.speedAlpha;
          }
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        if (s.color === '#C5A059') {
          ctx.fillStyle = `rgba(197, 160, 89, ${s.alpha})`;
        } else {
          ctx.fillStyle = `rgba(24, 21, 18, ${s.alpha * 0.6})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
