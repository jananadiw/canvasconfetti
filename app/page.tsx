'use client'

import { s3Client } from '@/lib/s3Client';
import { ListObjectsCommand } from '@aws-sdk/client-s3';
import Art from './components/art';
import { createClient, useQuery } from 'urql'

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
    // Prepare API key and Authorization header
const headers: HeadersInit = {
  'apikey': process.env.SUPABASE_ANON_KEY ?? '',
  'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY ?? ''}`,
}

const client = createClient({
  url: `${process.env.SUPABASE_URL}/graphql/v1`,
  fetchOptions: {
    headers: headers
  }
})

const ArtworksQuery = `
  query {
    artworks {
      edges {
        node {
          id
          caption
          url
          name
        }
      }
    }
  }
`

const [result, reexecuteQuery] = useQuery({
  query: ArtworksQuery,
})

const { data, fetching, error } = result;
console.log('data', data);
  const allImages = await fetchArtwork();
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
