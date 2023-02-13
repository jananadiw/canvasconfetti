import { s3Client } from "@/lib/s3Client";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import NavBar from './components/navbar';
import Art from './components/art'
import Footer from './components/footer'
import Link from 'next/link'

let artworkKeys: (string | undefined)[] = [];

const bucketParams = {
  Bucket: `${process.env.AWS_BUCKET}`,
};

async function fetchArtwork() {
  const data = await s3Client.send(new ListObjectsCommand(bucketParams));
  if (data.Contents) {
    artworkKeys = data.Contents?.map((item) => item.Key);
  }
  console.log(artworkKeys);
  return artworkKeys;
}

export default async function Home() {
  const allImages = await fetchArtwork();
  return (
    <>
    <main>
    <NavBar />
      <div className="grid grid-cols-3 grid-rows-6 gap-5 mt-56 p-16">
        {allImages.map((item, index) => {
          return (
            // <Link key={index} href={`/${encodeURIComponent(item)}`} >
              <Art key={index} data={item}/>
            // </Link>
          );
        })}
      </div>
    <Footer />
    </main>
  </>
  )
}
