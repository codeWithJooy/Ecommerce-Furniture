import React from 'react'
import {useHistory} from 'react-router-dom'
const Everyone=()=>{
  let history=useHistory()

  const go_cat=()=>{
    history.push('/category')
  }
  return(
    <div className="home_container">
        <div className="home_container_title">
            <p>What's Everyone Buying ?</p>
        </div>
        <div className="everyone_container">
            <div className="everyone_unit" onClick={go_cat}>
                <div className="everyone_unit_card">
                  <img src="docs/img/queen.jpg" />
                  
                </div>
            </div>
            <div className="everyone_unit" onClick={go_cat}>
                <div className="everyone_unit_card">
                  <img src="docs/img/3-Seater.webp" />
                  
                </div>
            </div>
            <div className="everyone_unit" onClick={go_cat}>
                <div className="everyone_unit_card_small">
                  <img src="docs/img/office_chairs.jpg" />
                  
                </div>
                <div className="everyone_unit_card_small" onClick={go_cat}>
                  <img src="docs/img/coffe.webp" />
                  
                </div>
                <div className="everyone_unit_card_small" onClick={go_cat}>
                  <img src="docs/img/dinning.webp" />
                  <p>Dinning Tables</p>
                </div>
                <div className="everyone_unit_card_small" onClick={go_cat}>
                  <img src="docs/img/living.webp" />
                  <p>Sofas</p>
                </div>
            </div>

        </div>
    </div>    
  )
}
export default Everyone;