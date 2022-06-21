import { useState } from "react"
import "./singleProject.scss"
import { BsGithub } from "react-icons/bs";

export const SingleProject = ({image,title,desc,code,live,tech, clicked, setClicked, language, english, descFR, inProgress}) => {

  return (
    <div className={"singleProject"} onClick={() => setClicked(title)}>
        <img src={image} alt="" />
        <div className="container">
       <div className="top">
       <h3>{title}</h3>
          <ul>
            {tech.map((e) => (
              <li className="singleTech">{e}</li>
            ))}
          </ul>
       </div>
          <p>{!english ? desc : descFR}</p>
          <div className="links">
          {code && <a href={code} className='code'><BsGithub />Code</a>}
          {live && <a href={live} className='live'>{language && language.projects.live}</a>}
          {inProgress && <span style={{color:'red'}}>Work In Progress</span>}
          </div>
        </div>
      </div>
  )
}
