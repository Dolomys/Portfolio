import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import './contact.scss'

export const Contact = () => {

  const [step, setStep] = useState(0)  
  
  return (
    <div className="contact" id="contact">
        <div className="left">
          <div className="form">
          <form action="POST" className="contactForm" >
            {step === 0 &&   
              <div className="action1">
                  <label htmlFor="email">Enter your Email</label>
                  <input type="text" className="input" placeholder="Email"/>
                  <motion.button  
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {e.preventDefault(); setStep(step + 1)}}>Next</motion.button>
              </div>
            }
            
            {step === 1 && 
             <div className="action2">
              <label htmlFor="message">Enter your Message</label>
              <textarea className="input" placeholder='Enter your message' autoFocus/>
              <div className="navigation"> 
              <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
                onClick={(e) => {e.preventDefault(); setStep(step - 1)}} >Previous</motion.button>
              <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
                onClick={(e) => {e.preventDefault(); setStep(step + 1)}}>Next</motion.button></div>
             </div>
            }

           {step === 2 && 
           <div className="action3">
             <div className="navigation">
              <motion.button 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={(e) => {e.preventDefault(); setStep(step - 1 )}} >Previous</motion.button>
              <motion.button 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               className="submitBtn" type='submit'>Send</motion.button>
             </div>
           </div>
           }
             
              
          </form>
          </div>
        </div>
        <div className="right"></div>
    </div>
  )
}
