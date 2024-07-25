import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Homepage from "./(home)/Homepage";
import Recipies from "./(recipies)/recipies/page";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage/>
        <Recipies/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
