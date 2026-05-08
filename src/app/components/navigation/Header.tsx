import Image from 'next/image';
import { Sun } from 'lucide-react';
import { Navbar } from './Navbar';
import { Button } from '../ui/Button';
import logoImg from '../../../../public/image/logo.avif'
import { Montserrat } from 'next/font/google';
import { Menu } from 'lucide-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const Header = () => {
  return (
    <header className={`${montserrat.variable} fixed top-6 left-0 right-0 z-50 px-4 flex justify-center`}>
      {/* gap-2 add kiya taake elements ke beech space tight rahe */}
      <div className="w-full max-w-[1290px] bg-white/90 backdrop-blur-md border border-gray-100 rounded-full py-1 pl-3 pr-2 flex flex-nowrap items-center shadow-sm">

        {/* Logo Section */}
        <div className="flex items-center gap-1 shrink-0">
          <Menu className="lg:hidden" />
          <Image src={logoImg} alt="ExactFlow" priority className="w-8 h-auto" />
          <span className="text-[#2e263de6] font-semibold lg:text-[24px] tracking-tighter">
            ExactFlow
          </span>
        </div>

        {/* Desktop Nav - centered between logo and actions */}
        <div className="hidden lg:flex flex-1 items-center justify-center min-w-0 px-4">
          <Navbar />
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-5 shrink-0 cursor-pointer ml-auto lg:ml-0">
          <button className="p-2 text-gray-700 hover:text-[#db1521] transition-colors cursor-pointer">
            <Sun size={24} />
          </button>

          <button className="hidden sm:block text-[16px] font-medium text-gray-700 hover:text-[#db1521] cursor-pointer whitespace-nowrap">
            Sign In
          </button>

          <Button className="scale-95 origin-right lg:py-3.5 lg:px-9 text-[16px] cursor-pointer">Book Demo</Button>
        </div>
      </div>
    </header>
  );
};