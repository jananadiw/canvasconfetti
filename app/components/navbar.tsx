'use client'

import Link from "next/link";
import ccLogo from "public/cc_logo.png";
import Image from "next/image";
import "@/styles/globals.scss";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-center items-center w-96 mb-24 font-raleway mx-auto my-28">
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
      </div>
    </>
  );
}
