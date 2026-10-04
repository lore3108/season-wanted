import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Season Wanted',
  description: 'I fan dimostrano quanto vogliono una nuova stagione di anime.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={inter.variable}>
        <div className="min-h-screen bg-panel text-ink">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
