import React from 'react'

const CartItem=({item})=>{
    return(
        <div className="cart_unit" >
            <div className="cart_image">
               <img src={item.location} />
            </div>
            <div className="cart_details">
                <div className="cart_title">
                   <p>{item.title}</p>
                </div>
                <div className="cart_text">
                    <div className="cart_price retail">
                       <p>Retail Price : Rs {item.rate}</p>
                    </div>
                    <div className="cart_price">
                        <p>Offer Price : Rs {item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;