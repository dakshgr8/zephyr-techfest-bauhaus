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

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };
    window.addEventListener('resize', handleResize);

    // Mouse & Touch Tracking
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: Math.min(width, height) * 0.35,
      active: false,
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = e.clientX - rect.left;
      pointer.targetY = e.clientY - rect.top;
      pointer.active = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        pointer.targetX = e.touches[0].clientX - rect.left;
        pointer.targetY = e.touches[0].clientY - rect.top;
        pointer.active = true;
      }
    };

    const handlePointerLeave = () => {
      pointer.targetX = width / 2;
      pointer.targetY = height / 2;
      pointer.active = false;
    };

    // Cosmic Shockwave Ripple on Click / Tap
    const ripples = [];
    const createRipple = (clickX, clickY) => {
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.5,
        alpha: 0.7,
        speed: 5.5,
      });

      // Scatter nearby stars
      for (const s of stars) {
        const dx = s.x - clickX;
        const dy = s.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 260 && dist > 0) {
          const force = (1 - dist / 260) * 10;
          s.vx += (dx / dist) * force;
          s.vy += (dy / dist) * force;
        }
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      createRipple(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        createRipple(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('click', handleClick);

    // Astrolabe & Sacred Geometry State
    let angleAstrolabe1 = 0;
    let angleAstrolabe2 = 0;
    let angleAstrolabe3 = 0;

    // Stars & Dust Particles
    let stars = [];
    let dustMotes = [];
    const starCount = Math.min(Math.floor((width * height) / 9000), 120);
    const dustCount = Math.min(Math.floor((width * height) / 16000), 55);

    function initElements() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          originX: Math.random() * width,
          originY: Math.random() * height,
          radius: Math.random() * 2.0 + 0.8,
          color: Math.random() > 0.3 ? '#9E7438' : '#1B3B4B',
          alpha: Math.random() * 0.6 + 0.25,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulseVal: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }

      dustMotes = [];
      for (let i = 0; i < dustCount; i++) {
        dustMotes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.5 + 1.0,
          alpha: Math.random() * 0.4 + 0.15,
          vy: -(Math.random() * 0.35 + 0.15),
          vx: (Math.random() - 0.5) * 0.2,
        });
      }
    }
    initElements();

    // Render Loop
    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      const centerX = width / 2;
      const centerY = height / 2;

      // -------------------------------------------------------------
      // 1. AMBIENT GOLDEN NEBULA GLOW (Background Breathing Aura)
      // -------------------------------------------------------------
      const grad1 = ctx.createRadialGradient(
        centerX + Math.sin(time * 0.5) * 80,
        centerY + Math.cos(time * 0.4) * 60,
        10,
        centerX,
        centerY,
        Math.max(width, height) * 0.6
      );
      grad1.addColorStop(0, 'rgba(158, 116, 56, 0.08)');
      grad1.addColorStop(0.5, 'rgba(212, 182, 133, 0.03)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 2. KINETIC ASTROLABE & SACRED GEOMETRY (Living 3D Rings)
      // -------------------------------------------------------------
      if (!prefersReducedMotion) {
        angleAstrolabe1 += 0.0018;
        angleAstrolabe2 -= 0.0012;
        angleAstrolabe3 += 0.0008;
      }

      ctx.save();
      const tiltX = (pointer.x - centerX) * 0.04;
      const tiltY = (pointer.y - centerY) * 0.04;
      ctx.translate(centerX + tiltX, centerY + tiltY);

      const baseRadius = Math.min(width, height) * (width < 640 ? 0.46 : 0.38);

      // Outer Astrolabe Ring with Degree Ticks
      ctx.save();
      ctx.rotate(angleAstrolabe1);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.22)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Degree Ticks
      for (let d = 0; d < 360; d += 15) {
        const rad = (d * Math.PI) / 180;
        const tickLength = d % 45 === 0 ? 10 : 5;
        const x1 = Math.cos(rad) * (baseRadius - tickLength);
        const y1 = Math.sin(rad) * (baseRadius - tickLength);
        const x2 = Math.cos(rad) * baseRadius;
        const y2 = Math.sin(rad) * baseRadius;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = d % 90 === 0 ? 'rgba(158, 116, 56, 0.45)' : 'rgba(158, 116, 56, 0.15)';
        ctx.lineWidth = d % 90 === 0 ? 1.5 : 0.8;
        ctx.stroke();
      }
      ctx.restore();

      // Middle Armillary Ring
      ctx.save();
      ctx.rotate(angleAstrolabe2);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.74, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(27, 59, 75, 0.16)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(-baseRadius * 0.74, 0);
      ctx.lineTo(baseRadius * 0.74, 0);
      ctx.moveTo(0, -baseRadius * 0.74);
      ctx.lineTo(0, baseRadius * 0.74);
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.12)';
      ctx.lineWidth = 0.75;
      ctx.stroke();
      ctx.restore();

      // Inner Sacred Ring & Hexagram
      ctx.save();
      ctx.rotate(angleAstrolabe3);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.48, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Sacred Triangle
      ctx.beginPath();
      for (let t = 0; t < 3; t++) {
        const tRad = (t * 120 * Math.PI) / 180;
        const tx = Math.cos(tRad) * (baseRadius * 0.48);
        const ty = Math.sin(tRad) * (baseRadius * 0.48);
        if (t === 0) ctx.moveTo(tx, ty);
        else ctx.lineTo(tx, ty);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.15)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();

      ctx.restore();

      // -------------------------------------------------------------
      // 3. EXPANDING COSMIC SHOCKWAVE RIPPLES
      // -------------------------------------------------------------
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha -= 0.009;

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(158, 116, 56, ${rip.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius * 0.65, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(158, 116, 56, ${rip.alpha * 0.25})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // -------------------------------------------------------------
      // 4. CONSTELLATION WEB & POINTER GRAVITATIONAL FIELD
      // -------------------------------------------------------------
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * 0.22;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(158, 116, 56, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Pointer Webbing
        const pdx = stars[i].x - pointer.x;
        const pdy = stars[i].y - pointer.y;
        const pDist = Math.sqrt(pdx * pdx + pdy * pdy);

        if (pDist < pointer.radius) {
          const pAlpha = (1 - pDist / pointer.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(158, 116, 56, ${pAlpha})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();

          // Gravitational pull
          if (!prefersReducedMotion && pointer.active) {
            const pull = (1 - pDist / pointer.radius) * 0.35;
            stars[i].vx -= (pdx / pDist) * pull;
            stars[i].vy -= (pdy / pDist) * pull;
          }
        }
      }

      // -------------------------------------------------------------
      // 5. STARDUST PARTICLES & RISING LIGHT EMBERS
      // -------------------------------------------------------------
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.vx *= 0.98;
          s.vy *= 0.98;

          s.x += s.vx;
          s.y += s.vy;

          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;

          s.pulseVal += s.pulseSpeed;
          s.currentAlpha = s.alpha + Math.sin(s.pulseVal) * 0.25;
          s.currentAlpha = Math.max(0.12, Math.min(0.85, s.currentAlpha));
        } else {
          s.currentAlpha = s.alpha;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        if (s.color === '#9E7438') {
          ctx.fillStyle = `rgba(158, 116, 56, ${s.currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(27, 59, 75, ${s.currentAlpha * 0.85})`;
        }
        ctx.fill();

        // Star Glint
        if (s.radius > 1.3 && s.currentAlpha > 0.45) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(158, 116, 56, ${s.currentAlpha * 0.22})`;
          ctx.fill();
        }
      }

      // Rising Golden Dust Motes
      for (let d = 0; d < dustMotes.length; d++) {
        const dm = dustMotes[d];
        if (!prefersReducedMotion) {
          dm.y += dm.vy;
          dm.x += dm.vx + Math.sin(time + d) * 0.2;

          if (dm.y < 0) {
            dm.y = height;
            dm.x = Math.random() * width;
          }
        }

        ctx.beginPath();
        ctx.arc(dm.x, dm.y, dm.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(158, 116, 56, ${dm.alpha * 0.5})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 opacity-95 transition-opacity duration-700"
    />
  );
}
