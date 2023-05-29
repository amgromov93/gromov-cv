import styles from "../../sass/style.module.scss";

import ContactsInfo from "../Contacts/ContactsInfo/ContactsInfo";
import About from "./Components/About/About";
import DownloadCv from "./Components/DownloadCv/DownloadCv";
import Github from "./Components/Github/Github";
import Header from "./Components/Header/Header";
import Language from "./Components/Language/Language";
import Projects from "./Components/Projects/Projects";
import Rewiews from "./Components/Rewiews/Rewiews";
import Skills from "./Components/Skills/Skills";
import SliderContainer from "./Components/Slider/SliderContainer";
import Studies from "./Components/Studies/Studies";

export default function Home() {
  const homePageClasses = styles.homePage + ' ' + styles.container__lt + ' ' + styles.container__lg;

  return (
    <div className={homePageClasses}>
      <Header />
      <SliderContainer />
      <div className={styles.contactsInfoBlock}>
        <ContactsInfo />
      </div>
      <div className={styles.homePage__secondColumn}>
        <About />
        <Skills />
        <Language />
        <Studies />
        <Github />
        <Projects />
      </div>
        <DownloadCv />
        <Rewiews />
    </div>
  )
}