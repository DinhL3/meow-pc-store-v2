'use client';

import { UserCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavMenu from './MobileNavMenu';
import { useCartStore } from '@/store/cart-store';
import { useCartHydration } from '@/store/cart-hydration';

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

  const hydrated = useCartHydration();
  const itemCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

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
        <MobileNavMenu navLinks={navLinks} />

        <Link
          href="/"
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
          <Link href="/cart" className="relative">
            <ShoppingCartIcon className="w-6 h-6 hover:text-powder-blue" />
            {hydrated && itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-coral-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
