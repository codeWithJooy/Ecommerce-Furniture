import React from 'react'
import ShopRoomCategory from './ShopRoomCategory'
const ShopRoom=()=>{
    return(
        <div className="home_container">
            <div className="home_container_title">
                <p>Shop By Room</p>
            </div>
            <div className="shop_rooms">
                <ShopRoomCategory img={'docs/img/living.webp'}
                                  cat_name={'Living Room'}
                                  category={'living'} 
                />
                <ShopRoomCategory img={'docs/img/office.webp'}
                                  cat_name={'Office'}
                                  category={'office'} 
                />
                <ShopRoomCategory img={'docs/img/bedroom.webp'}
                                  cat_name={'Bed Room'}
                                  category={'bedroom'} 
                />
                <ShopRoomCategory img={'docs/img/living.webp'}
                                  cat_name={'Dinning Room'}
                                  category={'dinning'} 
                />
                
                
                
            </div>
        </div>
    )

    

}

export default ShopRoom;