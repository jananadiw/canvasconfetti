import Image from 'next/image'

// TODO: Give a proper type to data.
export default function Art({data}: any) {
  let key = data
  return (
    <main>
        <Image
        src={`https://${process.env.AWS_BUCKET}.s3.ap-northeast-2.amazonaws.com/${key}`}
        alt={`img_${key}`}
        width={500}
        className="w-full h-full object-cover rounded"
        height={600}
        />
    </main>
  )
}
