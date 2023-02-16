'use client';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from 'next/image'
import { usePathname } from 'next/navigation';

export default function Page(){
  const pathname = usePathname();
    return (
      <>
        <main>
          <NavBar />
            <div>
            <Image
              src={`https://janawcontent.s3.ap-northeast-2.amazonaws.com${pathname}`}
              alt={`img_${pathname}`}
              width={500}
              className="w-full h-full object-cover rounded"
              height={600}
            />
            </div>
          <Footer />
        </main>
    </>
  );
  }
  