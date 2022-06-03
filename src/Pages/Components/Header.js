import React from 'react'
import {useHistory} from 'react-router-dom'

const Header=({setSignIn,setCart,setContact})=>{
  let history=useHistory()
  const go_cat=()=>{
    history.push("/category")
  }
  const setSign=()=>{
      setSignIn('on');
  }
  const open_cart=()=>{
    setCart("on")
  }
  const open_contact=()=>{
    setContact("on")
  }
  return(
      <div className="header">
          <div className="header_top">
             <div className="header_logo" onClick={()=>history.push("/home")}>
                <p>indiaFurnitures</p>
             </div>
             <div className="header_search">
                <input type="text" placeholder="Your door to happiness opens with a search" />
             </div>
             <div className="header_icons">
               <div className="icons_unit" onClick={setSign}>
                 <img src="docs/img/icons/user_light.png" />
               </div>
               <div className="icons_unit" onClick={open_contact}>
                 <img src="docs/img/icons/support.png" />
               </div>
               <div className="icons_unit">
                 <img src="docs/img/icons/cart.png" onClick={open_cart}/>
               </div>
             </div>
          </div>
         
          <div className="header_bottom">
              <div className="bottom_units" onClick={go_cat}>
                <p>Top Deals</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Sofas</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Living</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Bedroom</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Dinning</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Mattresses</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Storage</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Study</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Decor</p>
              </div>
              <div className="bottom_units" onClick={go_cat}>
                <p>Trending</p>
              </div>
          </div>
      </div>
  )
}

export default Header;