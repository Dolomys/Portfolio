import { Intro } from "./components/intro/Intro";
import { TopBar } from "./components/topBar/TopBar";
import { Projects } from "./components/projects/Projects";
import { Works } from "./components/works/Works";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";

import './app.scss'
import { useState } from "react";
import { Menu } from "./components/menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "app dark" : "app"}>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} setDark={setDark} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  dark={dark} />
      <div className="sections">
        <Intro dark={dark} />
        <About />
        <Projects dark={dark} />
        <Contact dark={dark} />
      </div>
    </div>
  );
}

export default App;
