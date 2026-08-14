import React from 'react';

// The Iconic Bauhaus 3-Shape Brand Mark (Red Circle, Blue Square, Yellow Triangle)
export function BauhausLogoMark({ size = "md" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10"
  }[size] || "w-6 h-6";

  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      {/* Bauhaus Red Circle */}
      <div className={`${sizeClasses} rounded-full bg-[#D02020] border-2 border-black shadow-[2px_2px_0px_0px_black]`} />
      {/* Bauhaus Blue Square */}
      <div className={`${sizeClasses} rounded-none bg-[#1040C0] border-2 border-black shadow-[2px_2px_0px_0px_black]`} />
      {/* Bauhaus Yellow Triangle */}
      <div className={`${sizeClasses} rounded-none bg-[#F0C020] border-2 border-black clip-triangle shadow-[2px_2px_0px_0px_black]`} />
    </div>
  );
}

// Geometric Card Corner Decoration (Cycles Red Circle, Blue Square, Yellow Triangle)
export function CornerShape({ index = 0, size = "w-3 h-3" }) {
  const shapeIndex = index % 3;
  if (shapeIndex === 0) {
    return <div className={`${size} rounded-full bg-[#D02020] border border-black`} title="Circle" />;
  }
  if (shapeIndex === 1) {
    return <div className={`${size} rounded-none bg-[#1040C0] border border-black`} title="Square" />;
  }
  return <div className={`${size} rounded-none bg-[#F0C020] border border-black clip-triangle`} title="Triangle" />;
}

// Constructivist Tag Pill / Badge
export function BauhausTag({ text, color = "yellow", className = "" }) {
  const colorMap = {
    yellow: "bg-[#F0C020] text-black",
    red: "bg-[#D02020] text-white",
    blue: "bg-[#1040C0] text-white",
    white: "bg-white text-black",
    dark: "bg-[#121212] text-white",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_black] rounded-none ${colorMap[color] || colorMap.yellow} ${className}`}>
      {text}
    </span>
  );
}

// Section Divider Strip with Thick Bauhaus Border & Geometric Blocks
export function SectionDivider({ accent = "yellow" }) {
  const accentColor = {
    yellow: "bg-[#F0C020]",
    red: "bg-[#D02020]",
    blue: "bg-[#1040C0]",
    white: "bg-white",
    dark: "bg-[#121212]"
  }[accent] || "bg-[#F0C020]";

  return (
    <div className="w-full border-b-4 border-black flex items-center h-4 overflow-hidden bg-white">
      <div className={`w-1/4 h-full ${accentColor} border-r-4 border-black`} />
      <div className="w-1/12 h-full bg-[#121212] border-r-4 border-black" />
      <div className="w-1/6 h-full bg-[#D02020] border-r-4 border-black" />
      <div className="w-1/12 h-full bg-[#1040C0] border-r-4 border-black" />
      <div className="w-1/4 h-full bg-[#F0C020] border-r-4 border-black" />
      <div className="flex-1 h-full bg-white" />
    </div>
  );
}
