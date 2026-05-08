import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';

export const Navbar = () => {
  return (
    <nav className="hidden lg:flex items-center gap-5">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`flex items-center gap-1 text-[16px] font-medium transition-colors ${
            link.isActive ? 'text-[#db1521]' : 'text-gray-800 hover:text-[#db1521]'
          }`}
        >
          {link.label}
          {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
        </Link>
      ))}
    </nav>
  );
};