import Image from 'next/image'
import Link from 'next/link'

// TODO: Give a proper type to data.
export default function Art({data}: any) {
  let key = data
  return (
    <main>
      <Link href={`/${encodeURIComponent(key)}`} >
      {/* <Link href={{ pathname: `/${key}`, query: `${key}`}} > */}
        <Image
        src={`https://${process.env.AWS_BUCKET}.s3.ap-northeast-2.amazonaws.com/${key}`}
        alt={`img_${key}`}
        width={500}
        className="w-full h-full object-cover rounded"
        height={600}
        />
      </Link>
    </main>
  )
}
