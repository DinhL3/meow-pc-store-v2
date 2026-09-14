import type { Metadata } from 'next';
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'meow-pc-store-v2',
  description: '',
};

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
