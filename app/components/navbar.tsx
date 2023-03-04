'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ccLogo from 'public/cc_logo.png';
import Image from 'next/image';
import '@/styles/globals.scss';

export default function NavBar() {

const [isFixed, setIsFixed] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const threshold = (document.querySelector('.navbar') as HTMLElement).offsetTop;
    setIsFixed(window.pageYOffset >= threshold);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
      {/* <div className="flex justify-center items-center w-96 mb-24 font-raleway mx-auto my-28">
        <div className="flex-none float-right">
              <a href="//opensea.io/collection/canvas-confetti" target="_blank" rel="noreferrer">
                <p className="text-gray-400 hover:text-gray-900">Shop</p>
              </a>
            </div>
        <div className="cursor-pointer flex-none mx-32">
        <Link href="/">
          <Image src={ccLogo} alt="logo_cc" width={450} height={100} />
        </Link>
        </div>
        <div className="flex-1">
            <Link href="/about" className="">
              <p className="text-gray-400 hover:text-gray-900">About</p>
            </Link>
          </div>
      </div> */}
      <div className="flex flex-col mx-auto justify-center items-center w-full mt-16 mb-28 font-raleway">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={ccLogo} alt="logo_cc" width={400} height={100} />
          </Link>
        </div>
        <div className="uppercase mt-2 mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-1/5 text-gray-900 hover:text-gray-300">
              <a href="//opensea.io/collection/canvas-confetti" target="_blank" rel="noreferrer">
                Shop
              </a>
            </div>
            <Link href="/about" className="w-1/5">
              <p className="text-gray-900 hover:text-gray-300">About</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
