import React, { useState, useRef, useEffect } from 'react';

const LETTERS_CONFIG = [
  { id: 'Z', label: 'SOL', src: '/wordmark/letter-z.mp4', poster: '/wordmark/letter-z-poster.jpg', widthPct: 18.994, aspect: '340/480' },
  { id: 'E', label: 'HORUS', src: '/wordmark/letter-e.mp4', poster: '/wordmark/letter-e-poster.jpg', widthPct: 14.804, aspect: '265/480' },
  { id: 'P', label: 'AEGEAN', src: '/wordmark/letter-p.mp4', poster: '/wordmark/letter-p-poster.jpg', widthPct: 16.480, aspect: '295/480' },
  { id: 'H', label: 'FORGE', src: '/wordmark/letter-h.mp4', poster: '/wordmark/letter-h-poster.jpg', widthPct: 15.922, aspect: '285/480' },
  { id: 'Y', label: 'ANUBIS', src: '/wordmark/letter-y.mp4', poster: '/wordmark/letter-y-poster.jpg', widthPct: 16.480, aspect: '295/480' },
  { id: 'R', label: 'PHOENIX', src: '/wordmark/letter-r.mp4', poster: '/wordmark/letter-r-poster.jpg', widthPct: 17.320, aspect: '310/480' },
];

export function InteractiveWordmark({ onLetterSelect }) {
  const [activeLetter, setActiveLetter] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRefs = useRef({});
  const containerRef = useRef(null);

  // Initialize all videos for infinite seamless looping
  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
      }
    });
  }, []);

  // Play video on hover / touch from start
  const handleLetterEnter = (id) => {
    setActiveLetter(id);
    const video = videoRefs.current[id];
    if (video) {
      video.loop = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    }
    if (onLetterSelect) {
      onLetterSelect(id);
    }
  };

  // Pause video and rewind to start frame on leave
  const handleLetterLeave = (id) => {
    if (activeLetter === id) {
      setActiveLetter(null);
    }
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Toggle on click / tap
  const handleLetterClick = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.loop = true;
        video.currentTime = 0;
        video.play().catch(() => {});
        setActiveLetter(id);
      } else {
        video.pause();
        video.currentTime = 0;
        setActiveLetter(null);
      }
    }
  };

  // Explicit infinite loop safety handler
  const handleVideoEnded = (id) => {
    const video = videoRefs.current[id];
    if (video && activeLetter === id) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  // 3D Mouse Parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
    setMousePos({ x, y });
  };

  const handleContainerLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      
      {/* 3D Parallax Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleContainerLeave}
        className="relative w-full max-w-5xl mx-auto px-2 sm:px-4 py-2 transition-transform duration-500 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
        }}
        role="region"
        aria-label="Zephyr Interactive Video Wordmark"
      >
        {/* Proportional Flex Row for Natural Alignment */}
        <div className="w-full flex items-center justify-between">
          {LETTERS_CONFIG.map((letter) => {
            const isHovered = activeLetter === letter.id;

            return (
              <div
                key={letter.id}
                style={{ width: `${letter.widthPct}%` }}
                onMouseEnter={() => handleLetterEnter(letter.id)}
                onMouseLeave={() => handleLetterLeave(letter.id)}
                onTouchStart={() => handleLetterEnter(letter.id)}
                onClick={() => handleLetterClick(letter.id)}
                className="group relative flex flex-col items-center justify-center p-0 cursor-pointer focus:outline-none"
              >
                {/* Letter Video Frame */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: letter.aspect }}
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[letter.id] = el;
                    }}
                    src={letter.src}
                    poster={letter.poster}
                    muted
                    playsInline
                    loop
                    preload="auto"
                    onEnded={() => handleVideoEnded(letter.id)}
                    className={`w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-90'
                    }`}
                  />
                </div>

                {/* Micro Label */}
                <span
                  className={`font-body text-[9px] tracking-[0.25em] uppercase mt-1 transition-colors duration-200 ${
                    isHovered ? 'text-[#9E7438] font-medium' : 'text-[#6B6862]'
                  }`}
                >
                  {letter.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
