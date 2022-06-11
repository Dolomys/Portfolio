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

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Works />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
