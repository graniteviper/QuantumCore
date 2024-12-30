import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/Solutions0";
import About2 from "./sections/Solutions1";
import Aboutus from "./sections/Aboutus";
import Footer from "./sections/Footer";

function App() {

  return (
    <>
      <div className="overflow-y-hidden">
      <Header />
      <Hero/>
      <About/>
      <About2/>
      <Aboutus/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
