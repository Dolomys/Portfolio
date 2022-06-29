import { AnimatePresence, motion } from "framer-motion"
import './projects.scss'

import { projects } from '../../data/projects';
import { useEffect, useRef, useState } from "react";
import { PortfolioList } from "../portfolioList/PortfolioList";
import { SingleProject } from "../singleProject/SingleProject";

export const Projects = ({language, english}) => {

  const dark = false

  const [selected, setSelected] = useState("All")

  const list = [
    {
      id: "All",
      titleEN: "All",
      titleFR: "Tout",
    },
    {
      id: "Personal",
      titleEN: "Personal",
      titleFR: "Personnels",
    },
    {
      id: "Professional",
      titleEN: "Professional",
      titleFR: "Entreprise",
    },
    // {
    //   id: "Freelance",
    //   titleEN: "Freelance",
    //   titleFR: "Freelance",
    // },
  ]

  return (
    <div className="projects" id="projects"> 
    <h1>{language && language.projects.title}</h1>
    <ul>
      {list.map((e) => (
        <PortfolioList 
        title={!english ? e.titleEN : e.titleFR}
        active={selected === e.id}
        setSelected={setSelected}
        dark={dark}
        id={e.id}
        language={language}
        />
      ))}
    </ul>
    <div className="container">
      {projects && projects.filter(project => project.cat.includes(selected)).map(project => (
        <SingleProject
          english={english}
          title={project.name}
          image={project.picture}
          desc={project.desc}
          descFR={project.descFR}
          code={project.code}
          live={project.live}
          tech={project.tech}
          inProgress={project.inProgress}
          language={language}
          dark={dark}
        />
      ))}
    </div>
    </div>
  )
}
