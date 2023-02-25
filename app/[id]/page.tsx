'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <main>
        <div className="flex flex-col mx-80 px-10 justify-center items-center">
          <div className="text-l">
            {/* TODO: Fetch details from a database */}
            <p>Oh Coffee • Portrait • Digital Art • A4 • $15.00</p>
          </div>
          <div className="mt-10">
            <Image
              // FIXME: Fetch bucket name from .env file
              src={`https://janawcontent.s3.ap-northeast-2.amazonaws.com${pathname}`}
              alt={`img_${pathname}`}
              width={550}
              height={600}
            />
          </div>
          <div className="basis-1/2 text-left self-end font-raleway px-10 leading-loose font-semibold mb-20">
            <div className="inset-x-0 bottom-0">
              <Link href={{ pathname: '/' }}>
                <button className="bg-transparent text-blue-700 font-semibold  hover:text-gray-400"> View All </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
