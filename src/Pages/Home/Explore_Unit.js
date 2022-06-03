import React from 'react'
import {useHistory} from 'react-router-dom'

const Explore_Unit=({img,nam})=>{
   let history=useHistory();
   const go_cat=()=>{
       history.push('/category')
   }
   return(
    <div className="home_icons_unit" onClick={go_cat}>
        <img src={img} />
        <p>{nam}</p>
    </div>
   )
}
export default Explore_Unit;