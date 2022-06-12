import './topBar.scss'
import { RiMoonClearFill } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";

export const TopBar = ({menuOpen,setMenuOpen, dark, setDark}) => {

  return (
    <div className={"topBar "+ (menuOpen && "active ")+ " " + (dark && "dark")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>AlFlO<span className='dot'>.</span></a>
        </div>
        <div className="right">
          <div className="theme"  onClick={() => setDark(!dark)} >
            {dark ? <RiSunLine /> : <RiMoonClearFill />}
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={"line1 "  + (dark && "dark")}></span>
            <span className={"line2 "  + (dark && "dark")}></span>
            <span className={"line3 "  + (dark && "dark")}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
