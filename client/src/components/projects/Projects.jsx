import { AnimatePresence, motion } from "framer-motion"
import './projects.scss'

import { projects } from '../../data/projects';
import { useEffect, useRef, useState } from "react";

export const Projects = () => {

  
  const [selectedId, setSelectedId] = useState(null)
  const [width, setWidth] = useState(0);
  const carousel = useRef()

  useEffect(()=> {
    console.log(carousel)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])



  return (
    <div className="projects" id="projects"> 
    <h1>Personnel & Professionnal Projects</h1>
       <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
          <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="innerCarousel">
          {projects && projects.map(e=> (
              <motion.div 
              className='projectCard' 
              key={e.id} 
              whileHover={{scale:1.2,transition: { duration: 0.5 }}}
              layoutId={e.id}
              onClick={() => setSelectedId(e.id)}
              >
                <img src={e.picture} alt=""  className='cardPicture'/>
                <span className='cardTitle'>{e.name}</span>
                {/* <div className="cardTech">{e.tech.map(e => (
                  <div className="singleTech">{e}</div>
                  ))}
                </div>
                <div className="cardDesc">{e.desc}</div>
                <div className="cardLinks">
                  <a href={e.github} className="link">Github</a>
                  <a href={e.code} className="link">View Project !</a>
                </div> */}
              </motion.div>
          ))}
          </motion.div>
       </motion.div>
    </div>
  )
}
