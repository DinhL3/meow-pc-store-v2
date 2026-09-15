import type { Metadata } from 'next';
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Meow PC Store | Prebuilt and custom gaming PCs',
  description:
    'Shop prebuilt and custom gaming PCs at Meow PC Store. Configure your own rig or choose a ready-to-ship build with fast shipping and expert support.',
};

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
