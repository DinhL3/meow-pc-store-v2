import Link from 'next/link';
import Image from 'next/image';
import { FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="relative h-screen w-full flex items-center">
      <Image
        src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1759146568/hero_drfjce.webp"
        alt="A beautiful gaming PC on a desk"
        fill
        priority
        className="object-cover -z-10 md:hidden"
      />
      <Image
        src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1759147132/hero_right_vr4ep1.webp"
        alt="A beautiful gaming PC on a desk"
        fill
        priority
        className="object-cover -z-10 hidden md:block"
      />
      <div className="absolute inset-0 bg-black/75 md:hidden -z-10" />
      <div
        className="absolute inset-0 hidden md:block -z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 65%)',
        }}
      />

      <div className="w-full max-w-[1536px] mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-7xl font-bold">
          Enjoy gaming,
          <br />
          today.
        </h1>

        <p className="mt-4 max-w-xl text-lg text-white/90">
          Turn on maximum graphics and show off a nice-looking PC to your
          friends.
          <br />
          Save time, no headaches, just turn on and have fun!
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link
            href="/prebuilt-pcs"
            className="rounded-full bg-ocean-blue px-6 py-3 font-medium transition hover:brightness-90"
          >
            Browse prebuilt PCs
          </Link>
          <Link
            href="/build"
            className="rounded-full bg-navy text-white px-6 py-3 font-medium transition hover:brightness-90"
          >
            Choose your components
          </Link>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <span>Watch our videos on</span>
          <a
            href="https://www.tiktok.com/@meowpc.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/20 p-2 transition hover:bg-black"
          >
            <FaTiktok className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@meowpcfi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/20 p-2 transition hover:bg-[#FF0000]"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
