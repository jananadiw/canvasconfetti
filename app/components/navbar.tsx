'use client'

import Link from "next/link";
import ccLogo from "public/cc_logo.png";
import Image from "next/image";
import "@/styles/globals.scss";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col justify-center items-center top-0 w-full h-24 mb-24 font-raleway">
        <div className="cursor-pointer mt-64">
        <Link href="/">
          <Image src={ccLogo} alt="logo_cc" width={450} height={100} />
        </Link>
        </div>
        <div className="no-underline block left-0 inset-y-3/4 -translate-x-1/2 top-16 uppercase">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-1/5 text-gray-400 hover:text-gray-900">
              <a href="//opensea.io/collection/canvas-confetti" target="_blank" rel="noreferrer">
                Shop
              </a>
            </div>
            <Link href="/about" className="w-1/5">
              <p className="text-gray-400 hover:text-gray-900">About</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
