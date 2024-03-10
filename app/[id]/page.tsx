'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const pathname = usePathname();
  const artworkName = pathname
    .replace(/\.[^/.]+$/, '')
    .replace(/_/g, ' ')
    .replace(/\d/g, '');

  // TODO:
  // if (match) {
  //   const extractedText = match[1].replace(/_/g, ' '); // Replace underscores with spaces
  // } else {
  //   console.log('No match found');
  // }
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center">
          <div className="text-l font-raleway text-gray-600">
            {/* TODO: Fetch details from a database */}
            <p>{artworkName} • Digital Art • A4 • $15.00</p>
          </div>
          <div className="mt-10">
            <Image
              src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET}.s3.ap-northeast-2.amazonaws.com${pathname}`}
              alt={`img_${artworkName}`}
              width={550}
              height={600}
              style={{ pointerEvents: 'none' }}
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
