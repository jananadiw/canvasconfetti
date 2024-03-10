'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ccLogo from 'public/cc_logo.png';
import Image from 'next/image';
import '@/styles/globals.scss';
// import { useScrollPosition } from '@/hooks/useScrollPosition';
// import { useRouter } from 'next/router';

export default function NavBar() {
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
  };
  return (
    <>
      <div className="flex flex-col mx-auto justify-center items-center w-full my-16 p-12 font-raleway bg-white sticky top-0 z-10">
        <div className="cursor-pointer">
          <Image src={ccLogo} alt="logo_cc" width={300} height={200} />
        </div>
        <div className="uppercase mt-2 mx-auto">
          <div className="flex justify-center items-center w-64">
            <div className="text-gray-900 hover:text-gray-300 w-1/3 text-center">
              <Link href="/">Gallery</Link>
            </div>
            <div className="text-gray-900 hover:text-gray-300 w-1/3 text-center">
              <a href="//opensea.io/collection/canvas-confetti" target="_blank" rel="noreferrer">
                Shop
              </a>
            </div>
            <div className="text-gray-900 hover:text-gray-300 w-1/3 text-center">
              <Link href="/about">
                <p>About</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
