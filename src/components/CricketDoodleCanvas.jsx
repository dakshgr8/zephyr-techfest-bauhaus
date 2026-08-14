import React, { useEffect, useRef, useState } from 'react';

export function CricketDoodleCanvas() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(154);
  const [lastShot, setLastShot] = useState("SIX! 🚀");

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
    
    // Ball State
    let ball = {
      x: 80,
      y: height - 110,
      vx: 7,
      vy: -2.5,
      radius: 9,
      inAir: true,
      hit: false,
      hitText: "",
      hitTimer: 0
    };

    // Batsman State (Positioned on the right side)
    let batsman = {
      x: Math.max(width * 0.75, width - 260),
      y: height - 70,
      swinging: false,
      swingProgress: 0
    };

    // Bowler State (Positioned on the left side)
    let bowler = {
      x: Math.min(width * 0.18, 180),
      y: height - 70,
      runPhase: 0,
      armAngle: 0
    };

    // Floating Bauhaus Cricket & Tech Doodles in Background
    const doodles = Array.from({ length: 16 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.6),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.4,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.015,
      type: ['bat', 'ball', 'wicket', 'trophy', 'gear', 'bracket', 'star'][i % 7],
      color: ['#D02020', '#1040C0', '#F0C020', '#121212'][i % 4],
      size: 18 + Math.random() * 20
    }));

    // Deliver Ball
    const bowlBall = () => {
      batsman.x = Math.max(width * 0.75, width - 260);
      bowler.x = Math.min(width * 0.18, 180);
      ball.x = bowler.x + 25;
      ball.y = bowler.y - 65;
      const targetX = batsman.x - 30;
      const timeToTarget = 52;
      ball.vx = (targetX - ball.x) / timeToTarget;
      ball.vy = -3;
      ball.inAir = true;
      ball.hit = false;
      batsman.swinging = false;
      batsman.swingProgress = 0;
    };

    bowlBall();

    // Trigger Hit
    const triggerHit = () => {
      const shots = ["6 RUNS! 🚀", "4 RUNS! ⚡", "MAXIMUM! 🏏", "CRACKING SHOT! 💥", "BOUNDARY! 🔥"];
      const chosen = shots[Math.floor(Math.random() * shots.length)];
      ball.hit = true;
      ball.hitText = chosen;
      ball.hitTimer = 45;
      ball.vx = -(7 + Math.random() * 5);
      ball.vy = -(8 + Math.random() * 5);
      batsman.swinging = true;
      batsman.swingProgress = 1;
      setScore((prev) => prev + (chosen.includes("6") ? 6 : 4));
      setLastShot(chosen);
    };

    // User Interactive Click to Swing
    const handleClick = () => {
      triggerHit();
    };
    canvas.addEventListener('click', handleClick);

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const groundY = height - 60;

      // 1. Draw Pitch Baseline
      ctx.strokeStyle = '#121212';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      // Pitch Strip (Bauhaus Off-white / Yellow)
      ctx.fillStyle = '#FFF9C4';
      ctx.fillRect(width * 0.08, groundY - 6, width * 0.84, 6);
      ctx.strokeRect(width * 0.08, groundY - 6, width * 0.84, 6);

      // Crease Lines
      ctx.fillStyle = '#121212';
      ctx.fillRect(batsman.x - 36, groundY - 20, 5, 20);
      ctx.fillRect(bowler.x + 25, groundY - 20, 5, 20);

      // 2. Floating Doodles (Transparent, non-intrusive)
      doodles.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        d.rot += d.vRot;

        if (d.x < -40) d.x = width + 40;
        if (d.x > width + 40) d.x = -40;
        if (d.y < -40) d.y = height * 0.6;
        if (d.y > height * 0.6) d.y = -40;

        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.rot);
        ctx.strokeStyle = '#121212';
        ctx.fillStyle = d.color;
        ctx.lineWidth = 2;

        if (d.type === 'bat') {
          ctx.fillRect(-5, -d.size / 2, 10, d.size);
          ctx.strokeRect(-5, -d.size / 2, 10, d.size);
          ctx.fillStyle = '#121212';
          ctx.fillRect(-2, -d.size / 2 - 8, 4, 8);
        } else if (d.type === 'ball') {
          ctx.beginPath();
          ctx.arc(0, 0, d.size / 2.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.strokeStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(0, 0, d.size / 3.5, 0, Math.PI);
          ctx.stroke();
        } else if (d.type === 'wicket') {
          ctx.fillRect(-10, -d.size / 2, 3, d.size);
          ctx.strokeRect(-10, -d.size / 2, 3, d.size);
          ctx.fillRect(-1.5, -d.size / 2, 3, d.size);
          ctx.strokeRect(-1.5, -d.size / 2, 3, d.size);
          ctx.fillRect(7, -d.size / 2, 3, d.size);
          ctx.strokeRect(7, -d.size / 2, 3, d.size);
          ctx.fillStyle = '#D02020';
          ctx.fillRect(-12, -d.size / 2 - 3, 22, 3);
        } else if (d.type === 'trophy') {
          ctx.beginPath();
          ctx.arc(0, -3, 8, 0, Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.fillRect(-3, 5, 6, 6);
          ctx.strokeRect(-3, 5, 6, 6);
          ctx.fillRect(-8, 11, 16, 3);
        } else if (d.type === 'bracket') {
          ctx.font = `bold ${Math.floor(d.size * 0.9)}px monospace`;
          ctx.fillStyle = d.color;
          ctx.fillText("</>", -10, 5);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, d.size / 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }

        ctx.restore();
      });

      // 3. Draw Wickets at Striker End
      const wicketX = batsman.x + 22;
      const wicketY = groundY;
      ctx.fillStyle = '#121212';
      ctx.lineWidth = 3;
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(wicketX + i * 7, wicketY - 44, 3.5, 44);
        ctx.strokeRect(wicketX + i * 7, wicketY - 44, 3.5, 44);
      }
      ctx.fillStyle = '#F0C020';
      ctx.fillRect(wicketX - 2, wicketY - 47, 22, 3.5);
      ctx.strokeRect(wicketX - 2, wicketY - 47, 22, 3.5);

      // 4. Draw Bowler
      bowler.runPhase = (bowler.runPhase + 0.15) % (Math.PI * 2);
      const bobY = Math.sin(bowler.runPhase) * 3;
      const bowlerX = bowler.x;
      const bowlerY = groundY - 2;

      ctx.save();
      ctx.translate(bowlerX, bowlerY + bobY);

      // Legs
      ctx.strokeStyle = '#121212';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(-8, -32);
      ctx.lineTo(-15, -16);
      ctx.lineTo(-12, 0);
      ctx.moveTo(-8, -32);
      ctx.lineTo(6, -18);
      ctx.lineTo(14, 0);
      ctx.stroke();

      // Body (Bauhaus Blue)
      ctx.fillStyle = '#1040C0';
      ctx.fillRect(-14, -58, 20, 26);
      ctx.strokeRect(-14, -58, 20, 26);

      // Head
      ctx.fillStyle = '#F0F0F0';
      ctx.beginPath();
      ctx.arc(-4, -68, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Cap
      ctx.fillStyle = '#F0C020';
      ctx.beginPath();
      ctx.arc(-4, -71, 11, Math.PI, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Bowling Arm
      bowler.armAngle += 0.08;
      const armEndX = -4 + Math.cos(bowler.armAngle) * 20;
      const armEndY = -48 + Math.sin(bowler.armAngle) * 20;
      ctx.beginPath();
      ctx.moveTo(-4, -48);
      ctx.lineTo(armEndX, armEndY);
      ctx.stroke();

      ctx.restore();

      // 5. Draw Batsman
      const batsmanX = batsman.x;
      const batsmanY = groundY - 2;

      ctx.save();
      ctx.translate(batsmanX, batsmanY);

      // Pads (Red)
      ctx.fillStyle = '#D02020';
      ctx.lineWidth = 3;
      ctx.fillRect(-18, -32, 10, 32);
      ctx.strokeRect(-18, -32, 10, 32);
      ctx.fillRect(-3, -32, 10, 32);
      ctx.strokeRect(-3, -32, 10, 32);

      // Torso (Yellow)
      ctx.fillStyle = '#F0C020';
      ctx.fillRect(-18, -62, 24, 30);
      ctx.strokeRect(-18, -62, 24, 30);

      // Number 25
      ctx.fillStyle = '#121212';
      ctx.font = '900 11px Outfit, sans-serif';
      ctx.fillText("25", -11, -43);

      // Helmet (Blue)
      ctx.fillStyle = '#1040C0';
      ctx.beginPath();
      ctx.arc(-6, -74, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Visor
      ctx.fillStyle = '#D02020';
      ctx.fillRect(-15, -74, 9, 5);
      ctx.strokeRect(-15, -74, 9, 5);

      // Bat Swing
      let batAngle = -Math.PI / 4;
      if (batsman.swinging) {
        batsman.swingProgress += 0.12;
        batAngle = -Math.PI / 4 - Math.sin(batsman.swingProgress * Math.PI) * 1.6;
        if (batsman.swingProgress >= 1) {
          batsman.swinging = false;
        }
      }

      ctx.save();
      ctx.translate(-12, -50);
      ctx.rotate(batAngle);

      // Bat
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(-5, 0, 10, 38);
      ctx.strokeRect(-5, 0, 10, 38);
      ctx.fillStyle = '#D02020';
      ctx.fillRect(-5, 26, 10, 12);
      ctx.strokeRect(-5, 26, 10, 12);
      // Handle
      ctx.fillStyle = '#121212';
      ctx.fillRect(-2, -14, 4, 14);
      ctx.strokeRect(-2, -14, 4, 14);

      ctx.restore();

      ctx.restore();

      // 6. Ball Physics & Hit Loop
      if (!ball.hit) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vy += 0.18;

        if (ball.y >= groundY - ball.radius) {
          ball.y = groundY - ball.radius;
          ball.vy = -ball.vy * 0.82;
        }

        if (ball.x >= batsman.x - 40 && ball.x <= batsman.x + 10) {
          triggerHit();
        }

        if (ball.x > width + 50) {
          setTimeout(bowlBall, 600);
        }
      } else {
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vy += 0.22;

        if (ball.x < -80 || ball.y > height + 80) {
          setTimeout(bowlBall, 750);
        }
      }

      // Draw Ball
      ctx.save();
      ctx.translate(ball.x, ball.y);
      ctx.fillStyle = '#D02020';
      ctx.strokeStyle = '#121212';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, ball.radius - 2, 0, Math.PI);
      ctx.stroke();
      ctx.restore();

      // Hit Text Popup
      if (ball.hit && ball.hitTimer > 0) {
        ball.hitTimer--;
        ctx.save();
        ctx.translate(batsman.x - 70, groundY - 120);
        ctx.fillStyle = '#F0C020';
        ctx.strokeStyle = '#121212';
        ctx.lineWidth = 3;
        ctx.fillRect(-55, -20, 125, 40);
        ctx.strokeRect(-55, -20, 125, 40);
        ctx.fillStyle = '#121212';
        ctx.font = '900 15px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(ball.hitText, 8, 6);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        title="Click to smash boundaries!"
      />

      {/* Sleek Score Badge */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2.5 bg-white border-3 border-black shadow-[3px_3px_0px_0px_black] px-3 py-1.5 font-mono text-xs select-none pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#D02020] animate-ping" />
        <span className="font-black text-[#D02020]">LIVE CRICKET</span>
        <span className="text-black/40">|</span>
        <span className="font-bold text-[#121212]">SCORE: <strong className="text-[#1040C0] text-sm">{score}/2</strong></span>
        <span className="bg-[#F0C020] text-black px-1.5 py-0.5 border border-black font-bold text-[11px]">{lastShot}</span>
      </div>
    </div>
  );
}
