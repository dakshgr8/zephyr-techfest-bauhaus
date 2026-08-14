import React, { useEffect, useRef, useState } from 'react';

export function CosmicGatewayCanvas() {
  const canvasRef = useRef(null);
  const [warpStatus, setWarpStatus] = useState("COSMIC GATEWAY: ACTIVE");
  const [jumps, setJumps] = useState(25);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;
    const isMobile = () => width < 640;
    const isTablet = () => width >= 640 && width < 1024;

    const mouse = { x: width * 0.75, y: height * 0.45, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // Shocks / Geometric Burst Particles on click/tap
    const shockwaves = [];
    const burstParticles = [];

    const createShockwave = (x, y) => {
      const mobile = isMobile();
      shockwaves.push({
        x: x,
        y: y,
        radius: 8,
        maxRadius: mobile ? 110 : 180,
        color: ['#D02020', '#1040C0', '#F0C020', '#121212'][Math.floor(Math.random() * 4)],
        lineWidth: mobile ? 3 : 4,
        shape: Math.random() > 0.5 ? 'circle' : 'square'
      });

      const particleCount = mobile ? 6 : 12;
      for (let i = 0; i < particleCount; i++) {
        const ang = (i * Math.PI * 2) / particleCount + Math.random() * 0.2;
        const spd = (mobile ? 2.5 : 3.5) + Math.random() * 3;
        burstParticles.push({
          x: x,
          y: y,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          size: (mobile ? 4 : 6) + Math.random() * 6,
          color: ['#D02020', '#1040C0', '#F0C020', '#121212'][i % 4],
          life: mobile ? 24 : 35
        });
      }

      setJumps((prev) => prev + 1);
      const warpPhrases = [
        "PORTAL PULSE: 2025.TCET // ACTIVE",
        "DIMENSIONAL MATRIX // ALIGNED",
        "SPECTRUM OF INNOVATION // LOCKED",
        "GATEWAY FLUX // OPTIMAL",
        "TIME JUMP // SUCCESSFUL"
      ];
      setWarpStatus(warpPhrases[Math.floor(Math.random() * warpPhrases.length)]);
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      createShockwave(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        const touchY = e.touches[0].clientY - rect.top;
        mouse.x = touchX;
        mouse.y = touchY;
        mouse.active = true;
        createShockwave(touchX, touchY);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Doodles list (adaptive count based on screen width to prevent clutter)
    const floatingDoodles = Array.from({ length: 24 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.4,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.015,
      type: ['cosmonaut', 'robot', 'rocket', 'laptop', 'code', 'satellite', 'atom', 'star'][i % 8],
      color: ['#D02020', '#1040C0', '#F0C020', '#121212'][i % 4],
      size: 16 + Math.random() * 16,
      orbitRadius: 70 + Math.random() * 200,
      orbitSpeed: (Math.random() > 0.5 ? 1 : -1) * (0.0035 + Math.random() * 0.004),
      orbitAngle: Math.random() * Math.PI * 2
    }));

    // Portal Structure State
    const portal = {
      x: width * 0.76,
      y: height * 0.48,
      baseRadius: 115,
      rot1: 0,
      rot2: 0,
      rot3: 0,
      beamAngle: 0
    };

    const speedMultiplier = 1.35;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const mobile = isMobile();
      const tablet = isTablet();

      // Responsive Portal Positioning:
      // On mobile: place the portal cleanly at the bottom right/center below text (height - 110px) with smaller radius
      // On desktop: place on the right half (width * 0.76)
      if (mobile) {
        portal.x = width * 0.5;
        portal.y = height - 105;
        portal.baseRadius = 48; // compact & elegant on mobile
      } else if (tablet) {
        portal.x = width * 0.74;
        portal.y = height * 0.44;
        portal.baseRadius = 82;
      } else {
        portal.x = width * 0.76;
        portal.y = height * 0.48;
        portal.baseRadius = 115;
      }

      const cx = portal.x;
      const cy = portal.y;

      portal.rot1 += 0.007 * speedMultiplier;
      portal.rot2 -= 0.009 * speedMultiplier;
      portal.rot3 += 0.012 * speedMultiplier;
      portal.beamAngle += 0.004 * speedMultiplier;

      // --- 1. SPECTRUM LIGHT PRISM BEAMS ---
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(portal.beamAngle);
      for (let b = 0; b < 6; b++) {
        const bAng = (b * Math.PI * 2) / 6;
        ctx.fillStyle = ['rgba(208, 32, 32, 0.07)', 'rgba(16, 64, 192, 0.07)', 'rgba(240, 192, 32, 0.07)'][b % 3];
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, portal.baseRadius * (mobile ? 2.2 : 2.8), bAng - 0.2, bAng + 0.2);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // --- 2. CENTRAL COSMIC GATEWAY MATRIX ---
      // Outer Yellow Calibrated Dial
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(portal.rot1);

      ctx.strokeStyle = '#121212';
      ctx.fillStyle = '#F0C020';
      ctx.lineWidth = mobile ? 2.5 : 4;
      const dialOffset = mobile ? 16 : 32;
      ctx.beginPath();
      ctx.arc(0, 0, portal.baseRadius + dialOffset, 0, Math.PI * 2);
      ctx.stroke();

      const tickCount = mobile ? 12 : 16;
      for (let i = 0; i < tickCount; i++) {
        const ang = (i * Math.PI * 2) / tickCount;
        ctx.strokeStyle = '#121212';
        ctx.lineWidth = i % 4 === 0 ? (mobile ? 2.5 : 4) : 1.5;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * (portal.baseRadius + dialOffset - 8), Math.sin(ang) * (portal.baseRadius + dialOffset - 8));
        ctx.lineTo(Math.cos(ang) * (portal.baseRadius + dialOffset + (mobile ? 4 : 6)), Math.sin(ang) * (portal.baseRadius + dialOffset + (mobile ? 4 : 6)));
        ctx.stroke();
      }
      ctx.restore();

      // Secondary Dashed Bauhaus Blue Ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(portal.rot2);
      ctx.strokeStyle = '#1040C0';
      ctx.lineWidth = mobile ? 2.5 : 3.5;
      ctx.setLineDash([mobile ? 5 : 8, mobile ? 5 : 8]);
      ctx.beginPath();
      ctx.arc(0, 0, portal.baseRadius + (mobile ? 8 : 14), 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Rotated Bauhaus Red Square Matrix (45°)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(portal.rot3);
      ctx.strokeStyle = '#121212';
      ctx.fillStyle = '#D02020';
      ctx.lineWidth = mobile ? 2.5 : 4;
      const sqSize = portal.baseRadius * 1.05;
      ctx.fillRect(-sqSize / 2, -sqSize / 2, sqSize, sqSize);
      ctx.strokeRect(-sqSize / 2, -sqSize / 2, sqSize, sqSize);

      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = mobile ? 1.5 : 2;
      ctx.beginPath();
      ctx.moveTo(-sqSize / 2, 0);
      ctx.lineTo(sqSize / 2, 0);
      ctx.moveTo(0, -sqSize / 2);
      ctx.lineTo(0, sqSize / 2);
      ctx.stroke();
      ctx.restore();

      // Center Aperture Core
      ctx.save();
      ctx.translate(cx, cy);
      ctx.fillStyle = '#1040C0';
      ctx.strokeStyle = '#121212';
      ctx.lineWidth = mobile ? 2.5 : 4;
      ctx.beginPath();
      ctx.arc(0, 0, portal.baseRadius * 0.44, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Pulsing Core Glyph
      const pulse = 1 + Math.sin(tick * 0.05 * speedMultiplier) * 0.08;
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(0, 0, portal.baseRadius * 0.26 * pulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#121212';
      ctx.font = `900 ${mobile ? '10px' : '13px'} Outfit, monospace`;
      ctx.textAlign = 'center';
      ctx.fillText("2025", 0, mobile ? 3.5 : 5);
      ctx.restore();

      // --- 3. ORBITING DOODLES ---
      // On mobile, render only a clean subset of 10 doodles to prevent visual clutter
      const activeDoodles = mobile ? floatingDoodles.slice(0, 10) : floatingDoodles;

      activeDoodles.forEach((d) => {
        d.orbitAngle += d.orbitSpeed * speedMultiplier;
        const currentRadius = mobile ? d.orbitRadius * 0.65 : d.orbitRadius;
        const targetX = cx + Math.cos(d.orbitAngle) * currentRadius;
        const targetY = cy + Math.sin(d.orbitAngle) * (currentRadius * 0.68);

        d.x += (targetX - d.x) * 0.03 + d.vx * speedMultiplier;
        d.y += (targetY - d.y) * 0.03 + d.vy * speedMultiplier;
        d.rot += d.vRot * speedMultiplier;

        // Mouse/Touch Pull
        if (mouse.active) {
          const dx = mouse.x - d.x;
          const dy = mouse.y - d.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < (mobile ? 110 : 180)) {
            d.x += dx * 0.02;
            d.y += dy * 0.02;
            ctx.strokeStyle = '#121212';
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 2]);
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }

        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.rot);
        ctx.strokeStyle = '#121212';
        ctx.fillStyle = d.color;
        ctx.lineWidth = mobile ? 2 : 2.5;

        const scale = mobile ? 0.75 : 1;

        if (d.type === 'cosmonaut') {
          ctx.scale(scale, scale);
          ctx.beginPath();
          ctx.arc(0, -6, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#F0C020';
          ctx.fillRect(-6, -8, 12, 5);
          ctx.strokeRect(-6, -8, 12, 5);
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-8, 4, 16, 14);
          ctx.strokeRect(-8, 4, 16, 14);
          ctx.beginPath();
          ctx.moveTo(-4, 18);
          ctx.lineTo(-6, 26);
          ctx.moveTo(4, 18);
          ctx.lineTo(6, 26);
          ctx.stroke();
        } else if (d.type === 'rocket') {
          ctx.scale(scale, scale);
          ctx.beginPath();
          ctx.moveTo(0, -18);
          ctx.lineTo(8, 8);
          ctx.lineTo(-8, 8);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#D02020';
          ctx.fillRect(-4, 8, 8, 6);
          ctx.strokeRect(-4, 8, 8, 6);
        } else if (d.type === 'laptop') {
          ctx.scale(scale, scale);
          ctx.fillRect(-10, -6, 20, 12);
          ctx.strokeRect(-10, -6, 20, 12);
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-14, 6, 28, 4);
          ctx.strokeRect(-14, 6, 28, 4);
        } else if (d.type === 'robot') {
          ctx.scale(scale, scale);
          ctx.fillRect(-10, -10, 20, 16);
          ctx.strokeRect(-10, -10, 20, 16);
          ctx.beginPath();
          ctx.moveTo(0, -10);
          ctx.lineTo(0, -16);
          ctx.stroke();
          ctx.fillStyle = '#D02020';
          ctx.beginPath();
          ctx.arc(0, -17, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#F0C020';
          ctx.fillRect(-6, -6, 4, 4);
          ctx.fillRect(2, -6, 4, 4);
          ctx.fillStyle = '#121212';
          ctx.fillRect(-12, 6, 24, 5);
        } else if (d.type === 'code') {
          ctx.font = `bold ${mobile ? '11px' : '14px'} monospace`;
          ctx.fillStyle = d.color;
          ctx.fillText("</>", -10, 4);
        } else if (d.type === 'satellite') {
          ctx.scale(scale, scale);
          ctx.fillRect(-6, -6, 12, 12);
          ctx.strokeRect(-6, -6, 12, 12);
          ctx.fillStyle = '#1040C0';
          ctx.fillRect(-18, -4, 10, 8);
          ctx.strokeRect(-18, -4, 10, 8);
          ctx.fillRect(8, -4, 10, 8);
          ctx.strokeRect(8, -4, 10, 8);
        } else if (d.type === 'atom') {
          ctx.scale(scale, scale);
          ctx.beginPath();
          ctx.arc(0, 0, 10, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(0, 0, 14, 5, Math.PI / 4, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = '#D02020';
          ctx.beginPath();
          ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.scale(scale, scale);
          ctx.fillRect(-7, -7, 14, 14);
          ctx.strokeRect(-7, -7, 14, 14);
        }

        ctx.restore();
      });

      // --- 4. SHOCKWAVES & BURST PARTICLES ---
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += (mobile ? 4 : 6) * speedMultiplier;
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = sw.lineWidth;
        ctx.beginPath();
        if (sw.shape === 'circle') {
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        } else {
          ctx.strokeRect(sw.x - sw.radius, sw.y - sw.radius, sw.radius * 2, sw.radius * 2);
        }
        ctx.stroke();

        if (sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
        }
      }

      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const p = burstParticles[i];
        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;
        p.life -= 1;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#121212';
        ctx.lineWidth = 1.2;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.strokeRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);

        if (p.life <= 0) {
          burstParticles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        title="Interactive Cosmic Gateway: Tap anywhere to pulse dimensional shockwaves!"
      />

      {/* Top Right Telemetry Badge (Compact on Mobile) */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2 bg-white border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_black] sm:shadow-[3px_3px_0px_0px_black] px-2.5 sm:px-3.5 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs select-none pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#D02020] animate-ping shrink-0" />
        <span className="font-black text-[#121212] uppercase tracking-wider hidden sm:inline">
          {warpStatus}
        </span>
        <span className="font-black text-[#121212] uppercase tracking-wider sm:hidden">
          GATEWAY: ACTIVE
        </span>
        <span className="bg-[#F0C020] text-black px-1 py-0.5 border border-black font-bold text-[9px] sm:text-[10px]">
          #{jumps}
        </span>
      </div>

      {/* Coordinate Crosshair Badge (Hidden on mobile) */}
      <div className="absolute bottom-10 left-6 z-20 hidden lg:flex items-center gap-2 font-mono text-[10px] font-bold text-[#121212]/60 uppercase pointer-events-none">
        <span>TCET COORDINATES: 19.2084° N, 72.8719° E</span>
        <span>•</span>
        <span>MUMBAI</span>
      </div>
    </div>
  );
}
