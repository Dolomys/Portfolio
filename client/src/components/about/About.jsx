import './about.scss'
import cat from "../../img/cat.jpg"

export const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
        <div className="aboutMe">
          <div className="left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem a iure soluta culpa atque! Quam laborum facilis ut illo dolore vel cumque natus doloribus. Saepe dolorum autem molestiae quam ea?
          </div>
          <div className="right">
            <img src={cat} alt="" />
          </div>
        </div>
        <h2>Skills</h2>
        <div className="skills">
          <div className="table">
            <span className="title">Front-End</span>
           <ul>
            <li className="skill">Javascript</li>
            <li className="skill">Html</li>
            <li className="skill">Css</li>
            <li className="skill">Scss</li>
            <li className="skill">React</li> 
           </ul>
          </div>
          <div className="table">
          <span className="title">Back-End</span>
          <ul>
            <li className="skill">NodeJs</li>
            <li className="skill">NextJs</li>
            <li className="skill">MongoDB</li>
            <li className="skill">MySQL</li>
            <li className="skill">PHP</li>
          </ul>
          </div>
          <div className="table">
          <span className="title">Others</span>
          <ul>
            <li className="skill">GitHub</li>
            <li className="skill">Figma</li>
            <li className="skill">Typescript</li>
            <li className="skill">Wordpress</li>
          </ul>
          </div>
        </div>
    </div>
  )
}
