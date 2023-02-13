import NavBar from '../components/navbar';
import Footer from '../components/footer'

export default function About() {
    return (
     <>
    <main>
    <NavBar />
            <div className="relative font-raleway text-2xl m-80">
            <div className="w-full leading-9 text-center">
            <p>Hi Everyone!👋🏼 <br/>
            I'm Jananadi, a beginner landscape and digital artist.</p>

    <p>I started painting as a hobby in 2020,
       (Yes, the time we all discovered our inner self 🧘🏻‍♀️) <br/>
       As a programmer, painting is a great new world for me, and put my creativity into life.</p>

    <p>I use watercolors, acrylic and oil paint. <br/>
    To display my art and share my journey, I developed this little site. 👩🏻‍💻 </p>

     <p>Have questions? or advice for me? Find me from any of platforms below. 🙇🏻‍♀️👇🏼 </p>
            </div>
            </div>
        </main>
    <Footer />
    </>
    )
}