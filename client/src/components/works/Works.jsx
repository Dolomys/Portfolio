import './works.scss'
import cloud1 from "../../img/cloud1.png"
import cloud2 from "../../img/cloud2.png"
import cloud3 from "../../img/cloud3.png"
import cloud4 from "../../img/cloud4.png"
import cloud5 from "../../img/cloud5.png"
import { useEffect, useState } from 'react'

export const Works = () => {

  const [style,setStyle] = useState("")
  const [offSet,setOffSet] = useState(null)


  useEffect(() => {
    const onScroll = () => { setStyle(`${window.scrollY * 1}px`)}
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    
  },[])

  // window.addEventListener('scroll', () => {
  //   let value = window.scrollY;
  //   text.style.marginBottom = value * 2 + 'px'
  // })
  console.log(offSet)

  return (
    <div className="works" id="works">
      <div className="banner">
        <h2 id="text" style={{marginBottom: style}}>Welcome</h2>
        <div className="clouds">
          <img src={cloud1} style={{"--i":1}} alt=""/>
          <img src={cloud2} style={{"--i":2}} alt=""/>
          <img src={cloud3} style={{"--i":3}} alt=""/>
          <img src={cloud4} style={{"--i":4}} alt=""/>
          <img src={cloud5} style={{"--i":5}} alt=""/>
          <img src={cloud1} style={{"--i":10}} alt=""/>
          <img src={cloud2} style={{"--i":9}} alt=""/>
          <img src={cloud3} style={{"--i":8}} alt=""/>
          <img src={cloud4} style={{"--i":7}} alt=""/>
          <img src={cloud5} style={{"--i":6}} alt=""/>
        </div>
      </div>
    </div>
  )
}
