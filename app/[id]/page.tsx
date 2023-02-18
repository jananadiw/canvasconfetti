'use client';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function Page(){
  const pathname = usePathname();
    return (
      <>
        <NavBar />
        <main>
            <div className="flex mx-96 mx-40 mt-48 p-10">
            <div className="w-3/5">
            <Image
            // FIXME: Fetch bucket name from .env file
              src={`https://janawcontent.s3.ap-northeast-2.amazonaws.com${pathname}`}
              alt={`img_${pathname}`}
              width={400}
              className="w-full h-full rounded"
              height={500}
            />
            </div>
            <div className="flex-4 w-2/5 text-left m-2 font-raleway px-10 leading-loose font-semibold relative">
              <div className="inset-x-0 top-0 absolute px-12">
                {/* TODO: Fetch details from a database */}
                <p>Name: Oh Coffee</p>
                <p>Medium: Digital Art</p>
                <p>Size: A4</p>
              </div>
              <div className="inset-x-0 bottom-0 absolute px-12">
                <Link href={{pathname: '/'}}>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go Back</button>
                </Link>
              </div>
            </div>
            </div>
        </main>
        <Footer />
    </>
  );
  }
  