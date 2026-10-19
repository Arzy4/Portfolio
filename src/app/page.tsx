import Navbar from "./components/navbar";
import Hero from "./components/heroSection/hero";
import About from "./components/aboutSection/about";
import FeaturedProject from "./components/projectSection/featured-project";
import MyProcess from "./components/processSection/myProcess";
import Contact from "./components/contactSection/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <MyProcess />

      <FeaturedProject />

      <About />

      <Contact />

      <Footer />
      
    </main>
  );
}