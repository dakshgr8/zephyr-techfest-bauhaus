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

    // Mouse Tracking with smooth easing
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
      active: false,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
      mouse.active = false;
    };

    // Cosmic Ripple on Click
    const ripples = [];
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      ripples.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: Math.max(width, height) * 0.45,
        alpha: 0.6,
        speed: 4.5,
      });

      // Scatter nearby stars
      for (const s of stars) {
        const dx = s.x - clickX;
        const dy = s.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220 && dist > 0) {
          const force = (1 - dist / 220) * 8;
          s.vx += (dx / dist) * force;
          s.vy += (dy / dist) * force;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Astrolabe & Sacred Geometry State
    let angleAstrolabe1 = 0;
    let angleAstrolabe2 = 0;
    let angleAstrolabe3 = 0;

    // Stars & Dust Particles
    let stars = [];
    let dustMotes = [];
    const starCount = Math.min(Math.floor((width * height) / 12000), 95);
    const dustCount = Math.min(Math.floor((width * height) / 20000), 45);

    function initElements() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          originX: Math.random() * width,
          originY: Math.random() * height,
          radius: Math.random() * 1.8 + 0.6,
          color: Math.random() > 0.35 ? '#9E7438' : '#1B3B4B',
          alpha: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.015 + 0.005,
          pulseVal: Math.random() * Math.PI,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          orbitAngle: Math.random() * Math.PI * 2,
          orbitDist: Math.random() * 80 + 30,
        });
      }

      dustMotes = [];
      for (let i = 0; i < dustCount; i++) {
        dustMotes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.2 + 0.8,
          alpha: Math.random() * 0.3 + 0.1,
          vy: -(Math.random() * 0.3 + 0.1),
          vx: (Math.random() - 0.5) * 0.15,
        });
      }
    }
    initElements();

    // Render Loop
    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const centerX = width / 2;
      const centerY = height / 2;

      // -------------------------------------------------------------
      // 1. ASTROLABE & SACRED GEOMETRY (Kinetic Background Rings)
      // -------------------------------------------------------------
      if (!prefersReducedMotion) {
        angleAstrolabe1 += 0.0012;
        angleAstrolabe2 -= 0.0008;
        angleAstrolabe3 += 0.0005;
      }

      ctx.save();
      // Mouse 3D perspective tilt on astrolabe center
      const tiltX = (mouse.x - centerX) * 0.035;
      const tiltY = (mouse.y - centerY) * 0.035;
      ctx.translate(centerX + tiltX, centerY + tiltY);

      const baseRadius = Math.min(width, height) * 0.36;

      // Outer Astrolabe Ring with Degree Ticks
      ctx.save();
      ctx.rotate(angleAstrolabe1);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();

      // Degree Ticks
      ctx.setLineDash([]);
      for (let d = 0; d < 360; d += 15) {
        const rad = (d * Math.PI) / 180;
        const tickLength = d % 45 === 0 ? 8 : 4;
        const x1 = Math.cos(rad) * (baseRadius - tickLength);
        const y1 = Math.sin(rad) * (baseRadius - tickLength);
        const x2 = Math.cos(rad) * baseRadius;
        const y2 = Math.sin(rad) * baseRadius;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = d % 90 === 0 ? 'rgba(158, 116, 56, 0.25)' : 'rgba(158, 116, 56, 0.08)';
        ctx.lineWidth = d % 90 === 0 ? 1.2 : 0.75;
        ctx.stroke();
      }
      ctx.restore();

      // Middle Armillary Ring (Golden Ratio Arc)
      ctx.save();
      ctx.rotate(angleAstrolabe2);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.75, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(27, 59, 75, 0.08)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Quadrant cross lines
      ctx.beginPath();
      ctx.moveTo(-baseRadius * 0.75, 0);
      ctx.lineTo(baseRadius * 0.75, 0);
      ctx.moveTo(0, -baseRadius * 0.75);
      ctx.lineTo(0, baseRadius * 0.75);
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.07)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();

      // Inner Rotating Sacred Ring
      ctx.save();
      ctx.rotate(angleAstrolabe3);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.48, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.14)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.stroke();

      // Triangle Geometry
      ctx.setLineDash([]);
      ctx.beginPath();
      for (let t = 0; t < 3; t++) {
        const tRad = (t * 120 * Math.PI) / 180;
        const tx = Math.cos(tRad) * (baseRadius * 0.48);
        const ty = Math.sin(tRad) * (baseRadius * 0.48);
        if (t === 0) ctx.moveTo(tx, ty);
        else ctx.lineTo(tx, ty);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(158, 116, 56, 0.06)';
      ctx.lineWidth = 0.6;
      ctx.stroke();
      ctx.restore();

      ctx.restore();

      // -------------------------------------------------------------
      // 2. EXPANDING COSMIC RIPPLES (From Clicks)
      // -------------------------------------------------------------
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha -= 0.008;

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(158, 116, 56, ${rip.alpha * 0.35})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(158, 116, 56, ${rip.alpha * 0.15})`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // -------------------------------------------------------------
      // 3. CONSTELLATION WEB & MOUSE GRAVITATIONAL WEBBING
      // -------------------------------------------------------------
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.16;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(158, 116, 56, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Mouse Webbing & Gravity Well
        const mdx = stars[i].x - mouse.x;
        const mdy = stars[i].y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const mAlpha = (1 - mDist / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(158, 116, 56, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Subtle Gravitational Pull towards cursor
          if (!prefersReducedMotion && mouse.active) {
            const pullForce = (1 - mDist / mouse.radius) * 0.25;
            stars[i].vx -= (mdx / mDist) * pullForce;
            stars[i].vy -= (mdy / mDist) * pullForce;
          }
        }
      }

      // -------------------------------------------------------------
      // 4. STAR PARTICLES & DUST MOTES
      // -------------------------------------------------------------
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          // Physics friction
          s.vx *= 0.98;
          s.vy *= 0.98;

          s.x += s.vx;
          s.y += s.vy;

          // Wrap edges
          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;

          // Gentle sine pulse
          s.pulseVal += s.pulseSpeed;
          s.currentAlpha = s.alpha + Math.sin(s.pulseVal) * 0.2;
          s.currentAlpha = Math.max(0.08, Math.min(0.75, s.currentAlpha));
        } else {
          s.currentAlpha = s.alpha;
        }

        // Draw Star
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        if (s.color === '#9E7438') {
          ctx.fillStyle = `rgba(158, 116, 56, ${s.currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(27, 59, 75, ${s.currentAlpha * 0.8})`;
        }
        ctx.fill();

        // Subtle Star Glint for larger stars
        if (s.radius > 1.4 && s.currentAlpha > 0.4) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(158, 116, 56, ${s.currentAlpha * 0.18})`;
          ctx.fill();
        }
      }

      // Floating Dust Motes (Rising Embers)
      for (let d = 0; d < dustMotes.length; d++) {
        const dm = dustMotes[d];
        if (!prefersReducedMotion) {
          dm.y += dm.vy;
          dm.x += dm.vx + Math.sin(time + d) * 0.15;

          if (dm.y < 0) {
            dm.y = height;
            dm.x = Math.random() * width;
          }
        }

        ctx.beginPath();
        ctx.arc(dm.x, dm.y, dm.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(158, 116, 56, ${dm.alpha * 0.4})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-700"
    />
  );
}
