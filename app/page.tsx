'use client';

import { useState, useEffect } from 'react';
import { s3Client } from '@/lib/s3Client';
import { ListObjectsCommand } from '@aws-sdk/client-s3';
import Art from './components/art';
// import Artwork  from '../api/artwork.json'

let artworkKeys: (string | undefined)[] = [];

const bucketParams = {
  Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
};

async function fetchArtwork() {
  console.log('s3Client', await s3Client);
  const data = await s3Client.send(new ListObjectsCommand(bucketParams));
  if (data.Contents) {
    artworkKeys = data.Contents?.map((item) => item.Key);
  }
  return artworkKeys.filter((key): key is string => typeof key === 'string');
}

export default function Home() {
  const [allImages, setAllImages] = useState<string[]>([]);

  useEffect(() => {
    fetchArtwork().then((images) => setAllImages(images));
  }, []);

  return (
    <>
      <main>
        {/* <NavBar /> */}
        <div className="grid grid-cols-3 grid-rows-6 gap-5 mx-auto px-64">
          {allImages.map((item, index) => {
            return <Art key={index} props={item} />;
          })}
        </div>
      </main>
    </>
  );
}
