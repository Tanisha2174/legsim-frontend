import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from '@/components/navigation-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LEGSIM - The Legal Simulator',
  description: 'Legal representation for businesses and professionals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}