import '@/styles/globals.scss';
import { Metadata } from 'next';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Canvas Confetti',
  description: 'Explore digital art and landscape paintings by Jananadi, a beginner artist showcasing her creative journey.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
