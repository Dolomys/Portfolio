import { Intro } from "./components/intro/Intro";
import { TopBar } from "./components/topBar/TopBar";
import { Projects } from "./components/projects/Projects";
import { Works } from "./components/works/Works";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";

import './app.scss'
import { useEffect, useState } from "react";
import { Menu } from "./components/menu/Menu";
import { Skills } from "./components/skills/Skills";
import {fr} from './data/fr.js'
import {en} from './data/en.js'


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [english, setEnglish] = useState(false)
  const [language, setLanguage] = useState("")

  useEffect(()=> {

    const isEnglish = () => {
      if(english) {
        setLanguage(fr)
      }
      else {
        setLanguage(en)
      }
    }

    isEnglish()
    
  },[english])

  return (
    <div className={"app"}>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} english={english} setEnglish={setEnglish} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} language={language} />
      <div className="sections">
        <Intro  language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects  language={language} english={english}/>
        <Contact language={language} />
      </div>
    </div>
  );
}

export default App;
