import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Services } from "./components/Services";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <main className="m-auto px-20 md:px-8 xs:!px-6 max-w-[1444px]">
        <Header />
        <Hero />
        <Services />
        <Projects />
        <AboutMe />
        <Experience />
        <Resume />
        <Footer />
      </main>
    </>
  );
}

export default App;
