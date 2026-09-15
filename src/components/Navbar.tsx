'use client';

import { useEffect, useRef, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/prebuilt-pcs', label: 'Prebuilt PCs' },
  { href: '/build', label: 'Build your own PC' },
  { href: '/about', label: 'About us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const logoSize = isHome ? 80 : 48;
  const logoClassName = isHome ? 'w-[72px] h-[72px] lg:w-20 lg:h-20' : 'w-12 h-12';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`w-full text-white z-10 ${
        isHome ? 'absolute top-0 left-0 bg-transparent' : 'relative bg-navy'
      }`}
    >
      <div
        className={`relative max-w-7xl mx-auto flex items-center justify-between lg:justify-start px-6 py-2 ${
          isHome ? 'min-h-[88px] lg:min-h-[96px]' : ''
        }`}
      >
        <div className="relative lg:hidden" ref={menuRef}>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-ml-1 p-1"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute left-0 top-full mt-2 min-w-48 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/10 z-20">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 font-medium text-navy hover:bg-navy/5"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 lg:mr-12"
        >
          <Image
            src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1759780477/logo_cerulean_transparent_s2geby.png"
            alt="Meow PC Store"
            width={logoSize}
            height={logoSize}
            className={logoClassName}
            preload
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-medium hover:text-powder-blue"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 lg:ml-auto">
          <Link href="/account">
            <UserCircleIcon className="w-6 h-6 hover:text-powder-blue" />
          </Link>
          <Link href="/cart">
            <ShoppingCartIcon className="w-6 h-6 hover:text-powder-blue" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
