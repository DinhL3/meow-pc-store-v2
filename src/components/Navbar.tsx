import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/prebuilt-pcs', label: 'Prebuilt PCs' },
  { href: '/build', label: 'Build your own PC' },
  { href: '/about', label: 'About us' },
];

export default function Navbar() {
  return (
    <nav className="bg-navy text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-2">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1759780477/logo_cerulean_transparent_s2geby.png"
            alt="Meow PC Store"
            width={48}
            height={48}
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

        <Link href="/account" className="ml-auto">
          <UserCircleIcon className="w-8 h-8 hover:text-powder-blue" />
        </Link>
      </div>
    </nav>
  );
}
