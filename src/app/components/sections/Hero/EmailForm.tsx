'use client';

import React from 'react';
import { Input } from '../../ui/Input';
import { HERO_CONTENT } from '../../constants/hero-data';

export const EmailForm = () => {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-transparent backdrop-blur-md border  border-gray-200 rounded-full p-1  w-full"
    >
      <Input placeholder={HERO_CONTENT.placeholder} className='hover:text-red-700 font-[Arial] text-[16px] shadow-amber-150 ' />
      <button
        type="submit"
        className="bg-[#D92323] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap"
      >
        {HERO_CONTENT.buttonText}
      </button>
    </form>
  );
};