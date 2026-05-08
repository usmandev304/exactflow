import React from 'react';
import { HeroAnimation } from './HeroAnimation';

export const HeroMockup = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="relative z-10 w-full max-w-2xl aspect-[2444/1614]">
        <HeroAnimation />
      </div>
    </div>
  );
};