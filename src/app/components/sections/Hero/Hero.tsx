'use client';
import React, { useState } from 'react';
import { HeroContent } from './HeroContent';
import { HeroMockup } from './HeroMockup';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-white"
    >
      
      {/* 1. Static BG Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(/image/header-bg-light.avif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.75, 
        }}
      />

      {/* 2. COLORS LAYER (Normal state mein sirf bottom, hover par top bhi) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Bottom Colors */}
        <div className="absolute top-[45%] left-[-15%] w-[800px] h-[800px] bg-[#BAE6FD] rounded-full blur-[130px] opacity-70" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[700px] h-[700px] bg-[#FBCFE8] rounded-full blur-[120px] opacity-70" />
        
        {/* Top Colors (Transitions on Hover) */}
        <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#C7D2FE] rounded-full blur-[120px] transition-opacity duration-1000 ${
          isHovered ? 'opacity-60' : 'opacity-0'
        }`} />
        <div className={`absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#BAE6FD] rounded-full blur-[110px] transition-opacity duration-1000 ${
          isHovered ? 'opacity-50' : 'opacity-0'
        }`} />
      </div>

      {/* 3. GRID LAYER - WHITE DARK GRID */}
      <div 
        className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-700 ease-in-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          /* Yahan 'white' aur '2px' use kiya hai taake lines moti aur dark white dikhein.
             Radial gradient background mein 'rgba(255,255,255,0.1)' add kiya hai 
             taake boxes ke andar halka sa white fill aaye.
          */
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.9) 2px, transparent 2px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.9) 2px, transparent 2px)
          `,
          backgroundSize: '45px 45px',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
        }}
      />

      {/* 4. MOUSE SPOTLIGHT - Makes the grid shine even more */}
      <div 
        className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(
            200px circle at ${mousePos.x}px ${mousePos.y}px, 
            rgba(255, 255, 255, 0.8) 0%, 
            transparent 80%
          )`
        }}
      />
      
      {/* 5. CONTENT LAYER */}
      <div className="max-w-[1220px] relative z-40 mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <HeroContent />
        <div className="relative flex justify-center items-center">
             <HeroMockup />
        </div>
      </div>

      {/* 6. Rotating Badge */}
      <div className="hidden md:flex absolute bottom-12 right-12 flex items-center justify-center z-50">
        <div className="relative animate-spin-slow">
            <svg className="w-28 h-28" viewBox="0 0 100 100">
                <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[10px] font-bold fill-[#D92323] uppercase tracking-[0.2em]">
                    <textPath href="#circlePath">
                        CONTACT • CONTACT • CONTACT • 
                    </textPath>
                </text>
            </svg>
        </div>
        <div className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xl">
            <img 
                src="https://i.pravatar.cc/150?u=2" 
                alt="support" 
                className="w-full h-full object-cover"
            />
        </div>
      </div>
    </section>
  );
};