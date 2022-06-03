import React from 'react'

const SignIn=({type,setSignIn})=>{
    const setSign=()=>{
        setSignIn("off")
    }
   return(
       <div className={type==='on'?'dark_on dark':'dark_off dark'}>
           <div className="log_container">
               <div className="log_image">
                 <img src="docs/img/signup.jpg" />
               </div>
               <div className="log_buttons">
                  <img src="docs/img/icons/close.png" className="close" onClick={setSign}/> 
                  <div className="signup_top">
                    <div className="log_title">
                      <p>Sign Up</p>
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
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="signup_unit_button">
                       <button onClick={setSign}>Register</button>
                    </div>

                    <div className="continue">
                        <p>Or Continue With</p>
                    </div>
                    <div className="social_icons">
                        <img src="docs/img/google.png" onClick={setSign}/>
                        <img src="docs/img/facebook.png" onClick={setSign}/>
                    </div>
                  </div>
               </div>
           </div>
       </div>
   )
}
export default SignIn;