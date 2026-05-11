'use client';
import React, { useState, useEffect } from 'react';
import { EmailForm } from './EmailForm';
import { HERO_CONTENT } from '../../constants/hero-data';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface HeroContentProps {
  onInputHoverChange?: (hovered: boolean) => void;
}

export const HeroContent = ({ onInputHoverChange }: HeroContentProps) => {
  const [index, setIndex] = useState(0);
  const words = HERO_CONTENT.titleHighlights;

  useEffect(() => {
    // Har 3 seconds baad word change hoga
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-col gap-6 z-10">
      <h1 className="lg:text-[44px] xsm:text-[30px] font-bold text-[#061456] tracking-tighter lg:leading-[1.1] sm:leading-[1.4] lg:max-w-[600px]">
        {HERO_CONTENT.titleLine1}
        <br  className='lg:block xsm:hidden'/>
        {HERO_CONTENT.titleLine2}
        {" "}
        {/* Animated Span */}
        <span className="text-[#D92323] transition-all duration-500 ease-in-out">
          {words[index]}
        </span>
      </h1>
      
      <div className={`${montserrat.className} xl:max-w-[530px] lg:max-w-[570px] space-y-2`}>
        <p className="text-[#2e263de6] xl:text-[20px] sm:text-[19px] xsm:text-[18px] tracking-normal  font-[400] ">
          {HERO_CONTENT.description}
        </p>
        <p className="text-[#2e263de6]  xl:text-[20px] sm:text-[19px] xsm:text-[18px] tracking-normal">
          {HERO_CONTENT.subDescription}
        </p>
      </div>

      <EmailForm onInputHoverChange={onInputHoverChange} />
    </div>
  );
};