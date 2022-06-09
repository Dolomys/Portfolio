import { useState } from 'react'
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
                  <button onClick={(e) => {e.preventDefault(); setStep(step + 1)}}>Next</button>
              </div>
            }

            {step === 1 && 
             <div className="action2">
              <label htmlFor="message">Enter your Message</label>
              <textarea className="input" placeholder='Enter your message' autoFocus/>
              <div className="navigation"> 
              <button onClick={(e) => {e.preventDefault(); setStep(step - 1)}} >Previous</button>
              <button onClick={(e) => {e.preventDefault(); setStep(step + 1)}}>Next</button></div>
             </div>
            }

           {step === 2 && 
           <div className="action3">
             <div className="navigation">
             <button onClick={(e) => {e.preventDefault(); setStep(step - 1 )}} >Previous</button>
              <button className="submitBtn" type='submit'>Send</button>
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
