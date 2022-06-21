import './topBar.scss'
import { RiMoonClearFill } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";

export const TopBar = ({menuOpen,setMenuOpen, english, setEnglish}) => {

  return (
    <div className={"topBar "+ (menuOpen && "active ") }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>AF<span className='dot'>.</span></a>
        </div>
        <div className="right">
          {/* <div className="theme"  onClick={() => setDark(!dark)} >
            {dark ? <RiSunLine /> : <RiMoonClearFill />}
          </div> */}
          <div className="language" onClick={() => setEnglish(!english)}>
            {english ? 'FR' : 'EN'}
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={"line1 "}></span>
            <span className={"line2 "}></span>
            <span className={"line3 "}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
