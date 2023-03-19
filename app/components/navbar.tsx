'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ccLogo from 'public/cc_logo.png';
import Image from 'next/image';
import '@/styles/globals.scss';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function NavBar() {

  const scrollPosition = useScrollPosition();

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
    {/* <div className={classNames(scrollPosition > 0) ? 'bg-white sticky top-0 z-10 transition-all': 'hidden'}>
      <div className='flex justify-center items-center w-96 mb-24 font-raleway mx-auto my-16 p-12' >
        <div className="flex-none float-right bg-white">
              <a href="//opensea.io/collection/canvas-confetti" target="_blank" rel="noreferrer">
                <p className="text-gray-900 hover:text-gray-300">Shop</p>
              </a>
            </div>
        <div className="cursor-pointer flex-none mx-32 bg-white">
        <Link href="/">
          <Image src={ccLogo} alt="logo_cc" width={450} height={100} />
        </Link>
        </div>
        <div className="flex-1 bg-white">
            <Link href="/about" className="">
              <p className="text-gray-900 hover:text-gray-300">About</p>
            </Link>
          </div>
      </div>
      </div> */}
      <div className='flex flex-col mx-auto justify-center items-center w-full my-16 p-12 font-raleway bg-white sticky top-0 z-10'>
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
