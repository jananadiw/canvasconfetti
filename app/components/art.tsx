import Image from 'next/image';
import Link from 'next/link';

export default function Art({ props }: { props: string }) {
  const artworkName = props
    .replace(/\.[^/.]+$/, '')
    .replace(/_/g, ' ')
    .replace(/\d/g, '');

  return (
    <Link href={`/${encodeURIComponent(props)}`}>
      <div className="group relative h-full">
        <Image
          src={`/images/${encodeURIComponent(props)}`}
          alt={`img_${artworkName}`}
          width={400}
          height={500}
          className="w-full h-full object-cover rounded"
        />
        <div className="justify-center items-center bg-light-beige absolute left-0 w-full absolute group-hover:h-full opacity-0 group-hover:opacity-100 h-0 top-0 duration-1000">
          <p className="font-raleway mt-56 text-black m-0 text-center">{artworkName}</p>
        </div>
      </div>
    </Link>
  );
}