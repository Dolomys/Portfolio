import './topBar.scss'

export const TopBar = ({menuOpen,setMenuOpen}) => {

  return (
    <div className={"topBar "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>AlFlO<span className='dot'>.</span></a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
