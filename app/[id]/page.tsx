'use client';

import Image from 'next/image'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function Page(){
  const pathname = usePathname();
    return (
      <>
        <main>
            <div className="flex flex-row mx-80 h-full px-10">
            <div className="basis-1/2 ml-24">
            <Image
            // FIXME: Fetch bucket name from .env file
              src={`https://janawcontent.s3.ap-northeast-2.amazonaws.com${pathname}`}
              alt={`img_${pathname}`}
              width={400}
              height={500}
            />
            </div>
            <div className="basis-1/2 text-left self-end font-raleway px-10 leading-loose font-semibold">
              <div className="inset-x-0 top-0">
                {/* TODO: Fetch details from a database */}
                <p>Name: Oh Coffee</p>
                <p>Medium: Digital Art</p>
                <p>Size: A4</p>
              </div>
              <div className="inset-x-0 bottom-0">
                <Link href={{pathname: '/'}}>
                <button className="bg-transparent text-blue-700 font-semibold  hover:text-gray-400"> View All </button>
                </Link>
              </div>
            </div>
            </div>
        </main>
    </>
  );
  }
  