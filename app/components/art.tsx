'use client'

import Image from 'next/image';
import Link from 'next/link';
import { createClient, useQuery } from 'urql'

// Prepare API key and Authorization header
const headers = {
  apikey: process.env.SUPABASE_ANON_KEY,
  authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
}

// Create GraphQL client
// See: https://formidable.com/open-source/urql/docs/basics/react-preact/#setting-up-the-client
const client = createClient({
  url: `${process.env.SUPABASE_URL}/graphql/v1`,
})

// Prepare our GraphQL query
const ArtworksQuery = `
  query {
    artworks {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

// Query for the data (React)
const [result, reexecuteQuery] = useQuery({
  query: ArtworksQuery,
})

// Read the result
const { data, fetching, error } = result
console.log('data', result);


// TODO: Give a proper type to data.
export default function Art({ data }: any) {
  let key = data;
  const artworkName = key.replace(/\.[^/.]+$/, "");
  return (
    <main>
      <Link href={`/${encodeURIComponent(key)}`}>
        {/* <Link href={{ pathname: `/${key}`, query: `${key}`}} > */}
        <div className="group relative h-full">
          <Image
            src={`https://${process.env.AWS_BUCKET}.s3.ap-northeast-2.amazonaws.com/${key}`}
            alt={`img_${key}`}
            width={400}
            className=" w-full h-full object-cover rounded"
            height={500}
          />
          <div className="justify-center items-center bg-light-beige absolute left-0 w-full absolute group-hover:h-full opacity-0 group-hover:opacity-100 h-0 top-0 duration-1000">
            <div>
              <p className="font-raleway mt-56 text-black m-0 text-center">{`${artworkName}`}</p>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}
