import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Homepage from "./(home)/Homepage";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
