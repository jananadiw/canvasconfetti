import { s3Client } from "@/lib/s3Client";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import NavBar from './components/navbar';
import Art from './components/art'

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
    <NavBar />
    <main>
      <div className="grid grid-cols-3 gap-4 top-12">
        {allImages.map((item, index) => {
          return (
              <Art key={index} data={item}/>
          );
        })}
      </div>
    </main>
  </>
  )
}
