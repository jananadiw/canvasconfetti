import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Page({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    return (
      <>
      <main>
      <NavBar />
        <div>
          {params.slug}
        </div>
      <Footer />
      </main>
    </>
  );
  }
  