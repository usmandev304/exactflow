'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const primaryLinks = NAV_LINKS.filter((l) => !l.hasDropdown);
  const dropdownLinks = NAV_LINKS.filter((l) => l.hasDropdown);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/30  transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 z-[70] h-full w-full sm:w-[280px] sm:max-w-[80vw] bg-white shadow-2xl transition-transform duration-300 ease-out will-change-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-4 right-4 z-10 p-1 text-gray-700 hover:text-[#db1521] transition-colors cursor-pointer"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col px-5 pt-5 pb-1">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={`py-2.5 text-[16px] font-[500] transition-colors ${
                link.isActive
                  ? 'text-[#db1521]'
                  : 'text-gray-900 hover:text-[#db1521]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-6 pt-3">
            {dropdownLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-1 py-2 text-[16px] font-medium text-gray-700 hover:text-[#db1521] transition-colors"
              >
                {link.label}
                <ChevronDown size={16} />
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};
