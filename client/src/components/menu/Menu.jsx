import './menu.scss'

export const Menu = ({menuOpen, setMenuOpen, dark}) => {
  return (
    <div className={"menu " + (menuOpen && "active") +" " + (dark && "dark")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
