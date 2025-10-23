import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Map from "./components/map";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="font-sans" style={{backgroundColor: '#c9ccc6'}}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Map />
      <Footer />
    </div>
  );
}
