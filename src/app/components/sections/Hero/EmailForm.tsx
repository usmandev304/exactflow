'use client';

import React from 'react';
import { Input } from '../../ui/Input';
import { HERO_CONTENT } from '../../constants/hero-data';

interface EmailFormProps {
  isHeroHovered?: boolean;
  onInputHoverChange?: (hovered: boolean) => void;
}

export const EmailForm = ({ isHeroHovered = false, onInputHoverChange }: EmailFormProps) => {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      onMouseEnter={() => onInputHoverChange?.(true)}
      onMouseLeave={() => onInputHoverChange?.(false)}
      className="flex items-center backdrop-blur-[1px] border border-gray-200 rounded-full p-1 w-full transition-colors duration-300 font-[Arial]"
      style={{
        backgroundColor: isHeroHovered ? 'transparent' : '#F1F4FE',
      }}
    >
      <Input
        placeholder={HERO_CONTENT.placeholder}
        className='text-black! hover:text-red-700! placeholder:text-black! hover:placeholder:text-red-700! transition-colors duration-200 font-[Arial] text-[16px] font-medium shadow-amber-150'
      />
      <button
        type="submit"
        className="bg-[#D92323] hover:bg-red-700 text-white font-[Arial] font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap"
      >
        {HERO_CONTENT.buttonText}
      </button>
    </form>
  );
};