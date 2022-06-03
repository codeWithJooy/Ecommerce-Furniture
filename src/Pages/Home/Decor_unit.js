import React from 'react'
import {useHistory} from 'react-router-dom'

const Decor_unit=({img,title,subtitle})=>{
    let history=useHistory();
   const go_cat=()=>{
       history.push('/category')
   }
    return(
    <div className="decor_slide_unit" onClick={go_cat}>
        <div className="decor_slide_card">
            <div className="decor_slide_image">
               <img src={img} />
            </div>
            <div className="decor_slide_text">
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    </div>
    )
}

export default Decor_unit;