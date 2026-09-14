import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1759780477/logo_cerulean_transparent_s2geby.png"
            alt="Meow PC Store"
            width={40}
            height={40}
            preload
          />
        </Link>

        <div className="flex items-center gap-6 ml-12">
          <Link href="/prebuilt-pcs">Prebuilt PCs</Link>
          <Link href="/build">Build your own PC</Link>
          <Link href="/about">About us</Link>
        </div>

        <Link href="/account" className="ml-auto">
          <UserCircleIcon className="w-8 h-8 text-gray-700" />
        </Link>
      </div>
    </nav>
  );
}
