import '@/styles/globals.scss';
import Head from 'next/head';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from './components/SessionProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Canvas Confetti</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A small art marketplace with OTP authentication" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
