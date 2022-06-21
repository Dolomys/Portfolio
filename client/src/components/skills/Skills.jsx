import './skills.scss'
import { IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoReact, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { DiGit, DiMongodb, DiPhp, DiWordpress } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

export const Skills = ({language}) => {
  return (
    <div className="skills" id="skills">
        <h1>{language && language.skills}</h1>
        <div className="skillWrapper">
            <div className="left">
                <h2>Front-End</h2>
                <ul>
                    <li><IoLogoHtml5 style={{color:"#f06529"}}/>HTML5</li>
                    <li><IoLogoCss3 style={{color:"#264de4"}}/>CSS3</li>
                    <li><IoLogoSass style={{color:"#cc6699"}}/>SCSS</li>
                    <li><IoLogoJavascript style={{color:"#f0db4f"}}/>Javascript</li>
                    <li><IoLogoReact style={{color:"#61DBFB"}}/>React</li>
                </ul>
            </div>
            <div className="center">
                <h2>Back-End</h2>
                <ul>
                    <li><IoLogoNodejs style={{color:"#3c873a"}}/>NodeJs</li>
                    <li><TbBrandNextjs style={{color:"black"}}/>NextJs</li>
                    <li><DiMongodb style={{color:"#3c873a"}}/>MongoDB</li>
                    <li><DiPhp style={{color:"black"}}/>PHP</li>
                </ul>
            </div>
            <div className="right">
                <h2>Others</h2>
                <ul>
                    <li><DiGit style={{color:"#f34f29"}}/>Git</li>
                    <li><FiFigma style={{color:"black"}}/>Figma</li>
                    <li><DiWordpress style={{color:"black"}}/> Wordpress</li>
                    <li><SiTypescript style={{color:"#007acc"}}/>Typescript</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}
