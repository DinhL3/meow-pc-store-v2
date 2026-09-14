import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'meow-pc-store-v2',
  description: '',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
