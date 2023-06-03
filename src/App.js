import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Services } from "./components/Services";

import HeroImg from "./assets/hero.jpg";
import ServicesImg from "./assets/services.jpg";
import ProjectsImg from "./assets/projects.jpg";
import AboutMeImg from "./assets/about-me.jpg";
import FooterImg from "./assets/footer.jpg";

function App() {
  return (
    <>
      {/* <div className="absolute -z-10 opacity-0 w-full top-0 ">
        <img src={HeroImg} className="block w-[100%]" alt="" />
        <img src={ServicesImg} className=" block w-[100%]" alt="" />
        <img src={ProjectsImg} className=" block w-[100%]" alt="" />
        <img src={AboutMeImg} className=" block w-[100%]" alt="" />
        <img src={FooterImg} className=" block w-[100%]" alt="" />
      </div> */}
      <main className="m-auto px-20 md:px-8 sm:px-4 max-w-[1444px]">
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
