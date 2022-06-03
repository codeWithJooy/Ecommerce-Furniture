import React from 'react'
import {useHistory} from 'react-router-dom'

const ShopRoomCategory=({img,cat_name,category})=>{
   let history=useHistory()
    const setCat=()=>{

       history.push('/category')
    }
   return(
    <div className="shop_room_units" onClick={setCat}>
       <div className="shop_room_pics">
         <img src={img}/>
       </div>
       <div className="shop_room_name">
        <p>{cat_name}</p>
       </div>
    </div>
   )
}

export default ShopRoomCategory;