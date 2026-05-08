import React from 'react';

export const HeroMockup = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="relative z-10 shadow-2xl rounded-lg overflow-hidden border border-white/50">
        <img 
          src="https://via.placeholder.com/800x600/cccccc/000000?text=Dashboard+Mockup" 
          alt="ExactFlow Dashboard" 
          className="w-full h-auto max-w-2xl"
        />
      </div>

      {/* Floating Elements (Decorative bubbles) */}
      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 border-yellow-400 bg-white flex items-center justify-center animate-bounce">
         <span className="text-xs">✨</span>
      </div>
      <div className="absolute bottom-10 -left-10 w-16 h-16 rounded-full border-2 border-orange-400 overflow-hidden shadow-lg">
         <img src="https://i.pravatar.cc/150?u=1" alt="user" />
      </div>
    </div>
  );
};