import Link from 'next/link';
import Image from 'next/image';
import instagramIcon from '../../public/icons/insta.svg';
import behanceIcon from '../../public/icons/bh.svg';
import githubIcon from '../../public/icons/gh.svg';

export default function About() {
  return (
    <>
      <main>
        <div className="relative font-raleway text-xl mt-40">
          <div className="w-full leading-loose text-center">
            <p>
              Hi Everyone!👋🏼 <br />
              I'm Jananadi, a beginner landscape and digital artist.
            </p>

            <p>
              I started painting as a hobby in 2020, (Yes, the time we all discovered our inner self 🧘🏻‍♀️) <br />
              As a programmer, painting is a great new world for me, and put my creativity into life.
            </p>

            <p>
              I use watercolors, acrylic and oil paint & recently I've started doing more and more digital art. <br />
              <br />
              To display my art and share my journey, I developed this little site. 👩🏻‍💻{' '}
            </p>

            <p>Have questions? or advice for me? Find me from any of platforms below. 🙇🏻‍♀️👇🏼 </p>
            <br />
            <div className="mt-2 flex justify-center">
              <div className="flex flex-row items-center w-48">
                <div className="text-gray-900 hover:text-gray-300 w-1/3 text-center">
                  <Link href="https://www.instagram.com/canvas_confetti/" passHref>
                    <a target="_blank">
                      <Image src={instagramIcon} height={24} width={24} alt="instagramIcon" loading="lazy" />
                    </a>
                  </Link>
                </div>
                <div className="text-gray-900 hover:text-gray-300 w-1/3 text-center">
                  <Link href="https://www.behance.net/jayw25" passHref>
                    <a target="_blank">
                      <Image src={behanceIcon} height={24} width={24} alt="behanceIcon" loading="lazy" />
                    </a>
                  </Link>
                </div>
                <div className="text-gray-900 hover:text-gray-300 w-1/3 text-center">
                  <Link href="https://github.com/jananadiw" passHref>
                    <a target="_blank">
                      <Image src={githubIcon} height={24} width={24} alt="githubicon" loading="lazy" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
