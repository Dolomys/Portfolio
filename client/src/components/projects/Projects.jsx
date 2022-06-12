import { AnimatePresence, motion } from "framer-motion"
import './projects.scss'

import { projects } from '../../data/projects';
import { useEffect, useRef, useState } from "react";
import { PortfolioList } from "../portfolioList/PortfolioList";
import { SingleProject } from "../singleProject/SingleProject";

export const Projects = () => {

  const [selected, setSelected] = useState("Featured")
  const [clicked, setClicked] = useState("")
  const [showModal, setShowModal] = useState(false)

  const list = [
    {
      id: "Featured",
      title: "Featured"
    },
    {
      id: "Web App",
      title: "Web App"
    },
    {
      id: "Mobile App",
      title: "Mobile App"
    },
    {
      id: "PWA",
      title: "PWA"
    },
    {
      id: "Design",
      title: "Design"
    }
  ]

  return (
    <div className="projects" id="projects"> 
    <h1>Projects</h1>
    <ul>
      {list.map((e) => (
        <PortfolioList 
        title={e.title}
        active={selected === e.id}
        setSelected={setSelected}
        />
      ))}
    </ul>
    <div className="container">
      {projects && projects.filter(project => project.cat.includes(selected)).map(project => (
        <SingleProject
          title={project.name}
          image={project.picture}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </div>
    {clicked && projects.filter(project => clicked === project.name).map(e => (
        <div className="modal" onClick={() => setClicked("")}>
          <div className="innerModal" onClick={e => e.stopPropagation()}>
            <div className="top">
            <h2 className="modalTitle">{e.name}</h2>
            <span className="closeModal" onClick={()=> setClicked("")}>X</span>
            </div>
            <img src={e.picture} alt="" className="modalImg"/>
            <ul>
              {e.tech.map(tech => (
                <li className="singleTech">{tech}</li>
              ))}
            </ul>
            <p className="modalDesc">{e.desc}</p>
            <div className="linkBtn">
              <a href={e.github} className="gitBtn">Github</a>
              <a href={e.code} className="liveBtn">Live View</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
