import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-200 text-sm";
  const variants = {
    primary: "bg-[#E31E24] text-white hover:bg-red-700 shadow-md",
    ghost: "bg-transparent text-gray-700 hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};