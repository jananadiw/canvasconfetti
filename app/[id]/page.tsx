'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const pathname = usePathname();
  const fileName = pathname?.slice(1); // Remove the leading slash
  const artworkName = fileName
    ?.replace(/\.[^/.]+$/, '') // Remove the file extension
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\d/g, '') // Remove all digits
    .replace(/[^a-zA-Z\s]/g, ''); // Remove any character that is not a letter or space

  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center">
          <div className="text-l font-raleway text-gray-600">
            <p>{artworkName} • Digital Art • A4</p>
          </div>
          <div className="mt-10">
            {fileName && (
              <Image
                src={`/images/${fileName}`}
                alt={`img_${artworkName}`}
                width={550}
                height={600}
                loading="lazy"
                style={{ pointerEvents: 'none' }}
              />
            )}
          </div>
          <div className="basis-1/2 text-left self-end font-raleway px-10 leading-loose font-semibold mb-20">
            <div className="inset-x-0 bottom-0">
              <Link href="/">
                <button className="bg-transparent text-blue-700 font-semibold hover:text-gray-400">View All</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
