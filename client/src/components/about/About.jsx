import './about.scss'
import me from "../../img/meMountain.jpg"
import cv from'../../data/cv.pdf'
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";


export const About = ({language}) => {
  return (
    <div className="about" id="about">
      <h1>{language && language.about.title}</h1>
        <div className="aboutMe">
          <div className="left">
            <div className="aboutText">
             <p>{language && language.about.about1}</p>
             <p>{language && language.about.about2}</p>
             <p>{language && language.about.about3}</p>
             <p>{language && language.about.about4}</p>
             <p>{language && language.about.about5}</p>
            </div>
            <div className="cv">
            <a href={cv} download className='downloadCv'>Download CV  <BsFillFileEarmarkArrowDownFill /> </a>
            </div>
          </div>
          <div className="right">
            <div className="imgContainer">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
