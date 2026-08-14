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

    // Shocks / Geometric Burst Particles on click
    const shockwaves = [];
    const burstParticles = [];

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Concentric Expanding Rings & Shapes
      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 10,
        maxRadius: 180,
        color: ['#D02020', '#1040C0', '#F0C020', '#121212'][Math.floor(Math.random() * 4)],
        lineWidth: 4,
        shape: Math.random() > 0.5 ? 'circle' : 'square'
      });

      // Scatter 12 Geometric Particles
      for (let i = 0; i < 12; i++) {
        const ang = (i * Math.PI * 2) / 12 + Math.random() * 0.2;
        const spd = 3 + Math.random() * 3.5;
        burstParticles.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          size: 6 + Math.random() * 8,
          color: ['#D02020', '#1040C0', '#F0C020', '#121212'][i % 4],
          life: 35
        });
      }

      setJumps((prev) => prev + 1);
      const warpPhrases = [
        "PORTAL PULSE: 2025.TCET // SYNCHRONIZED",
        "DIMENSIONAL MATRIX // ALIGNED",
        "SPECTRUM OF INNOVATION // LOCKED",
        "GATEWAY FLUX // OPTIMAL",
        "TIME JUMP // SUCCESSFUL"
      ];
      setWarpStatus(warpPhrases[Math.floor(Math.random() * warpPhrases.length)]);
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        const touchY = e.touches[0].clientY - rect.top;
        mouse.x = touchX;
        mouse.y = touchY;
        mouse.active = true;

        shockwaves.push({
          x: touchX,
          y: touchY,
          radius: 10,
          maxRadius: 180,
          color: ['#D02020', '#1040C0', '#F0C020', '#121212'][Math.floor(Math.random() * 4)],
          lineWidth: 4,
          shape: Math.random() > 0.5 ? 'circle' : 'square'
        });

        for (let i = 0; i < 10; i++) {
          const ang = (i * Math.PI * 2) / 10 + Math.random() * 0.2;
          const spd = 3 + Math.random() * 3;
          burstParticles.push({
            x: touchX,
            y: touchY,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd,
            size: 6 + Math.random() * 6,
            color: ['#D02020', '#1040C0', '#F0C020', '#121212'][i % 4],
            life: 30
          });
        }
        setJumps((prev) => prev + 1);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Doodles (Cosmonaut, Robot, Rocket, Laptop, Circuit, Satellite, Atom, Code)
    const floatingDoodles = Array.from({ length: 26 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.5,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.016,
      type: ['cosmonaut', 'robot', 'rocket', 'laptop', 'code', 'satellite', 'atom', 'star'][i % 8],
      color: ['#D02020', '#1040C0', '#F0C020', '#121212'][i % 4],
      size: 22 + Math.random() * 20,
      orbitRadius: 90 + Math.random() * 240,
      orbitSpeed: (Math.random() > 0.5 ? 1 : -1) * (0.0035 + Math.random() * 0.005),
      orbitAngle: Math.random() * Math.PI * 2
    }));

    // Portal Structure State
    const portal = {
      x: width > 1024 ? width * 0.76 : width * 0.5,
      y: height * 0.48,
      baseRadius: width > 640 ? 115 : 90,
      rot1: 0,
      rot2: 0,
      rot3: 0,
      beamAngle: 0
    };

    // Perfect Natural Normal Speed (Balanced & Smooth)
    const speedMultiplier = 1.35;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      portal.x = width > 1024 ? width * 0.76 : width * 0.5;
      portal.y = height * 0.48;

      const cx = portal.x;
      const cy = portal.y;

      portal.rot1 += 0.007 * speedMultiplier;
      portal.rot2 -= 0.009 * speedMultiplier;
      portal.rot3 += 0.012 * speedMultiplier;
      portal.beamAngle += 0.004 * speedMultiplier;

      // --- 1. SPECTRUM LIGHT PRISM BEAMS (Radiating from the Gateway) ---
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(portal.beamAngle);
      for (let b = 0; b < 6; b++) {
        const bAng = (b * Math.PI * 2) / 6;
        ctx.fillStyle = ['rgba(208, 32, 32, 0.07)', 'rgba(16, 64, 192, 0.07)', 'rgba(240, 192, 32, 0.07)'][b % 3];
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, portal.baseRadius * 2.8, bAng - 0.2, bAng + 0.2);
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
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, portal.baseRadius + 32, 0, Math.PI * 2);
      ctx.stroke();

      for (let i = 0; i < 16; i++) {
        const ang = (i * Math.PI * 2) / 16;
        ctx.strokeStyle = '#121212';
        ctx.lineWidth = i % 4 === 0 ? 4 : 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * (portal.baseRadius + 22), Math.sin(ang) * (portal.baseRadius + 22));
        ctx.lineTo(Math.cos(ang) * (portal.baseRadius + 38), Math.sin(ang) * (portal.baseRadius + 38));
        ctx.stroke();
      }
      ctx.restore();

      // Secondary Dashed Bauhaus Blue Ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(portal.rot2);
      ctx.strokeStyle = '#1040C0';
      ctx.lineWidth = 3.5;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, portal.baseRadius + 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Rotated Bauhaus Red Square Matrix
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(portal.rot3);
      ctx.strokeStyle = '#121212';
      ctx.fillStyle = '#D02020';
      ctx.lineWidth = 4;
      const sqSize = portal.baseRadius * 1.05;
      ctx.fillRect(-sqSize / 2, -sqSize / 2, sqSize, sqSize);
      ctx.strokeRect(-sqSize / 2, -sqSize / 2, sqSize, sqSize);

      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
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
      ctx.lineWidth = 4;
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
      ctx.font = '900 13px Outfit, monospace';
      ctx.textAlign = 'center';
      ctx.fillText("2025", 0, 5);
      ctx.restore();

      // --- 3. ORBITING DOODLES & INTERDIMENSIONAL ARTIFACTS ---
      floatingDoodles.forEach((d) => {
        d.orbitAngle += d.orbitSpeed * speedMultiplier;
        const targetX = cx + Math.cos(d.orbitAngle) * d.orbitRadius;
        const targetY = cy + Math.sin(d.orbitAngle) * (d.orbitRadius * 0.68);

        d.x += (targetX - d.x) * 0.03 + d.vx * speedMultiplier;
        d.y += (targetY - d.y) * 0.03 + d.vy * speedMultiplier;
        d.rot += d.vRot * speedMultiplier;

        // Mouse Gravitational Pull
        if (mouse.active) {
          const dx = mouse.x - d.x;
          const dy = mouse.y - d.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            d.x += dx * 0.025;
            d.y += dy * 0.025;
            ctx.strokeStyle = '#121212';
            ctx.lineWidth = 1.2;
            ctx.setLineDash([3, 3]);
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
        ctx.lineWidth = 2.5;

        if (d.type === 'cosmonaut') {
          // Time Traveler Cosmonaut
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
          // Rocket Ship Doodle
          ctx.beginPath();
          ctx.moveTo(0, -18);
          ctx.lineTo(8, 8);
          ctx.lineTo(-8, 8);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Thruster flame
          ctx.fillStyle = '#D02020';
          ctx.fillRect(-4, 8, 8, 6);
          ctx.strokeRect(-4, 8, 8, 6);
        } else if (d.type === 'laptop') {
          // Cyber Terminal / Laptop
          ctx.fillRect(-10, -6, 20, 12);
          ctx.strokeRect(-10, -6, 20, 12);
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(-14, 6, 28, 4);
          ctx.strokeRect(-14, 6, 28, 4);
        } else if (d.type === 'robot') {
          // Robot Drone
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
          ctx.font = 'bold 15px monospace';
          ctx.fillStyle = d.color;
          ctx.fillText("</>", -12, 5);
        } else if (d.type === 'satellite') {
          ctx.fillRect(-6, -6, 12, 12);
          ctx.strokeRect(-6, -6, 12, 12);
          ctx.fillStyle = '#1040C0';
          ctx.fillRect(-18, -4, 10, 8);
          ctx.strokeRect(-18, -4, 10, 8);
          ctx.fillRect(8, -4, 10, 8);
          ctx.strokeRect(8, -4, 10, 8);
        } else if (d.type === 'atom') {
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
          ctx.fillRect(-8, -8, 16, 16);
          ctx.strokeRect(-8, -8, 16, 16);
        }

        ctx.restore();
      });

      // --- 4. EXPANDING SHOCKWAVES & BURST PARTICLES ---
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 6 * speedMultiplier;
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
        ctx.lineWidth = 1.5;
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
        title="Interactive Cosmic Gateway: Click anywhere to pulse dimensional shockwaves!"
      />

      {/* Top Right Live Telemetry Badge (Clean & Decluttered) */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2.5 bg-white border-3 border-black shadow-[3px_3px_0px_0px_black] px-3.5 py-1.5 font-mono text-xs select-none pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D02020] animate-ping" />
        <span className="font-black text-[#121212] uppercase tracking-wider">{warpStatus}</span>
        <span className="bg-[#F0C020] text-black px-1.5 py-0.5 border border-black font-bold text-[10px]">
          SYNC #{jumps}
        </span>
      </div>

      {/* Coordinate Crosshair Badge in Bottom Left */}
      <div className="absolute bottom-10 left-6 z-20 hidden lg:flex items-center gap-2 font-mono text-[10px] font-bold text-[#121212]/60 uppercase pointer-events-none">
        <span>TCET COORDINATES: 19.2084° N, 72.8719° E</span>
        <span>•</span>
        <span>MUMBAI</span>
      </div>
    </div>
  );
}
