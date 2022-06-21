import { useState } from 'react'
import './contact.scss'
import Marseille from "../../img/Marseille.png"
import gif from "../../img/loader.gif"
import { motion } from "framer-motion"
import axios from 'axios'

export const Contact = ({language}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [success, setSuccess] = useState(false)
  const [loader,setLoader] = useState(false)

  const handleSubmit = async(e) => {
    setLoader(true)
    e.preventDefault()
    let data = {
      name: name,
      email: email,
      message : msg
    }
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    try{
      let call = axios.post("https://formsubmit.co/ajax/60ce96306c8cfd1d3f468cfad384ab88", data)
      let res = await call
      if(res.data.success) {
        setLoader(false)
        setSuccess(true)
      }
    }
    catch(err){
      console.log(err)
    }
    


  }

  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>{language && language.contact.title}</h1>
        <form  method='POST' onSubmit={handleSubmit} >
          <input type="text" placeholder={language && language.contact.name} name="name" onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder='Email' name="email" onChange={(e) => setEmail(e.target.value)}/>
          <textarea placeholder='Description' rows="15" cols={50} name="description" onChange={(e) => setMsg(e.target.value)}></textarea>
          <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           type='submit'>{language && language.contact.submit}</motion.button>
        </form>
        {loader && (
          <img src={gif} alt='loading...'></img>
        )}
        {success && (
          <span className='successMsg'>{language && language.contact.success}</span>
        )}
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={Marseille} alt="" />
        </div>
      </div>
    </div>
  )
}
