import '@/styles/globals.scss';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
