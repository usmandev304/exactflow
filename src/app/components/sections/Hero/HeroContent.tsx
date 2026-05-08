'use client';
import React, { useState, useEffect } from 'react';
import { EmailForm } from './EmailForm';
import { HERO_CONTENT } from '../../constants/hero-data';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const HeroContent = () => {
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
      <h1 className="text-[44px] font-bold text-[#061456] tracking-tighter leading-[1.1] max-w-[600px]">
        {HERO_CONTENT.titleLine1}
        <br />
        {HERO_CONTENT.titleLine2}
        {" "}
        {/* Animated Span */}
        <span className="text-[#D92323] transition-all duration-500 ease-in-out block sm:inline">
          {words[index]}
        </span>
      </h1>
      
      <div className={`${montserrat.className} max-w-[530px] space-y-2`}>
        <p className="text-[#2e263de6] text-[20px] tracking-normal  font-medium ">
          {HERO_CONTENT.description}
        </p>
        <p className="text-[#2e263de6]  text-[20px] tracking-normal">
          {HERO_CONTENT.subDescription}
        </p>
      </div>

      <EmailForm />
    </div>
  );
};