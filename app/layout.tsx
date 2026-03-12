import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Delisuz Studio — Photography & Videography',
  description:
    'Delisuz Studio is a premium photography and videography studio capturing weddings, portraits, events and more. Book your session today.',
  keywords: ['photography', 'videography', 'wedding photographer', 'portrait photography', 'Delisuz Studio'],
  openGraph: {
    title: 'Delisuz Studio — Photography & Videography',
    description: 'Capturing your most precious moments with artistry and elegance.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
