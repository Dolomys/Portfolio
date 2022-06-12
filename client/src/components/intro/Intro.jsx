import './intro.scss'
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion"


export const Intro = ({dark}) => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <div className="textWrapper">
            <p> Hi, I'm Alexandre,</p>
            <p>I'm a Full Stack Web Developper,</p>
            <p>Mountain and outdoor sport addict</p>
          </div>
          
          <a href="#projects">
            <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className={dark ? "seeMore dark" : "seeMore" }>See More</motion.button>
          </a>
        </div>
       
      </div>
      <div className="right">
      </div>
      <a href="#projects" className='more'>
            <AiOutlineDown className='arrow'/>
          </a>
    </div>
  )
}
