import React from 'react'

const ContactUs=({type,setContact})=>{
    const setSign=()=>{
        setContact("off")
    }
   return(
       <div className={type==='on'?'dark_on dark':'dark_off dark'}>
           <div className="log_container">
               <div className="log_image">
                 <img src="docs/img/login.jpg" />
               </div>
               <div className="log_buttons">
                  <img src="docs/img/icons/close.png" className="close" onClick={setSign}/> 
                  <div className="signup_top">
                    <div className="log_title">
                      <p>Contact Us</p>
                    </div>
                    <div className="signup_unit">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="signup_unit">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="signup_unit">
                        <input type="text" placeholder="Mobile" />
                    </div>
                    <div className="signup_unit">
                        <textarea placeholder="May we know your concern please ?">


                        </textarea>
                    </div>
                    <div className="signup_unit_button">
                       <button onClick={setSign}>Contact</button>
                    </div>

                    
                  </div>
               </div>
           </div>
       </div>
   )
}
export default ContactUs;