'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Sun, Menu } from 'lucide-react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';
import logoImg from '../../../../public/image/logo.avif'
import { Montserrat } from 'next/font/google';

const LoginCircleIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z" />
  </svg>
);

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`${montserrat.variable} fixed top-6 left-0 right-0 z-50 px-4 flex justify-center`}>
        <div className="w-full xl:max-w-[1290px] lg:max-w-[860px] bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full xl:py-1 lg:py-1.5 sm:py-1 pl-3 pr-2 flex flex-nowrap items-center xsm:py-1.5">

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              className="xl:hidden block lg:mr-6 sm:mr-4 xsm:mr-2 p-1 text-gray-700 hover:text-[#db1521] transition-colors cursor-pointer"
            >
              <Menu className="w-5" />
            </button>
            <Image src={logoImg} alt="ExactFlow" priority className="lg:w-8 sm:w-9 xsm:w-8.5 h-auto" />
            <span className="text-[#2e263de6] lg:font-semibold xsm:font-[600] lg:text-[24px] sm:text-[22px] xsm:text-[18px] tracking-tighter">
              ExactFlow
            </span>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center min-w-0 px-4">
            <Navbar />
          </div>

          <div className="flex items-center sm:gap-8 xsm:gap-3 shrink-0 cursor-pointer ml-auto lg:ml-0">
            <div className="relative group">
              <button
                type="button"
                aria-label="Light Mode"
                className="p-2 text-gray-700 hover:text-[#db1521] cursor-pointer block rounded-full transition-colors duration-200 hover:bg-gray-100"
              >
                <Sun size={24} />
              </button>
              <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#061456]" />
                  <div className="relative rounded-[10px] bg-[#061456] px-4 py-1.5 text-[13px] font-medium text-white whitespace-nowrap shadow-md">
                    Light Mode
                  </div>
                </div>
              </div>
            </div>

            <button className="hidden xl:block text-[16px] font-medium text-gray-700 hover:text-[#db1521] cursor-pointer whitespace-nowrap">
              Sign In
            </button>

            <a
              href="https://app.exactflow.pl/en/login"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign In"
              className="flex xl:hidden items-center justify-center p-2 text-gray-700 hover:text-[#db1521] transition-colors cursor-pointer"
            >
              <LoginCircleIcon className="w-6 h-6" />
            </a>

            <Button className="scale-95 origin-right lg:py-3.5 lg:px-9 sm:py-3.5 sm:px-9.5 xsm:py-2 xsm:px-3 text-[16px] cursor-pointer">Book Demo</Button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};