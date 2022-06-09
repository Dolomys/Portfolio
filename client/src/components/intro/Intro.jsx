import './intro.scss'
import { AiOutlineDown } from "react-icons/ai";

export const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <div className="textWrapper">
            <p> Hi, I'm Alexandre,</p>
            <p>I'm a Full Stack Web Developper,</p>
            <p>Mountain and outdoor sport addict</p>
          </div>
          
          <a href="#projects" className='seeMore'>See More</a>
        </div>
       
      </div>
      <div className="right"></div>
      <a href="#projects" className='more'>
            <AiOutlineDown className='arrow'/>
          </a>
    </div>
  )
}
