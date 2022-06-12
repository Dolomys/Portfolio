import { useState } from "react"
import "./singleProject.scss"

export const SingleProject = ({image,title, clicked, setClicked}) => {

  return (
    <div className={"singleProject"} onClick={() => setClicked(title)}>
        <img src={image} alt="" />
        <h3>{title}</h3>
      </div>
  )
}
