'use client';

import React from 'react';
import { Input } from '../../ui/Input';
import { HERO_CONTENT } from '../../constants/hero-data';

interface EmailFormProps {
  onInputHoverChange?: (hovered: boolean) => void;
}

export const EmailForm = ({ onInputHoverChange }: EmailFormProps) => {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      onMouseEnter={() => onInputHoverChange?.(true)}
      onMouseLeave={() => onInputHoverChange?.(false)}
      className="flex flex-col gap-3 lg:flex-row lg:gap-0 lg:items-center lg:bg-white lg:border lg:border-gray-200 lg:rounded-full lg:p-1 lg:backdrop-blur-[1px] w-full transition-colors duration-300 font-[Arial]"
    >
      <div className="w-full bg-white border border-gray-200 rounded-full px-2 lg:border-0 lg:rounded-none lg:px-0 lg:bg-transparent">
        <Input
          placeholder={HERO_CONTENT.placeholder}
          className='text-black! hover:text-red-700! placeholder:text-black! hover:placeholder:text-red-700! transition-colors duration-200 font-[Arial] text-[16px] font-medium shadow-amber-150'
        />
      </div>
      <button
        type="submit"
        className="bg-[#D92323] hover:bg-red-700 text-white font-[Arial] font-semibold py-3.5 rounded-full transition-colors whitespace-nowrap w-full lg:w-auto lg:px-8 lg:py-3"
      >
        {HERO_CONTENT.buttonText}
      </button>
    </form>
  );
};
