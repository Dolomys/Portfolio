import './menu.scss'

export const Menu = ({menuOpen, setMenuOpen, language}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">{language && language.menu.home}</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#about">{language && language.menu.about}</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#skills">{language && language.menu.skills}</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#projects">{language && language.menu.projets}</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">{language && language.menu.contact}</a>
            </li>
        </ul>
    </div>
  )
}
