'use client';

import { UserCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
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

  return (
    <nav
      className={`w-full text-white z-10 ${
        isHome ? 'absolute top-0 left-0 bg-transparent' : 'relative bg-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center px-6 py-2">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1759780477/logo_cerulean_transparent_s2geby.png"
            alt="Meow PC Store"
            width={logoSize}
            height={logoSize}
            preload
          />
        </Link>

        <div className="flex items-center gap-6 ml-12">
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
        <div className="flex items-center gap-3 ml-auto">
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
