import About from "./Components/About/About";
import DownloadCv from "./Components/DownloadCv/DownloadCv";
import Github from "./Components/Github/Github";
import Header from "./Components/Header/Header";
import Language from "./Components/Language/Language";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import SliderContainer from "./Components/Slider/SliderContainer";
import Studies from "./Components/Studies/Studies";

export default function Home() {
  return (
    <>
      <Header />
      <SliderContainer />
      <About />
      <Skills />
      <Language />
      <Studies />
      <Github />
      <Projects />
      <DownloadCv />
    </>
  )
}