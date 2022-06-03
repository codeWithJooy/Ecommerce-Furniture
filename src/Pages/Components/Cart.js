import React from 'react'

const Cart=({cart,setCart,product})=>{
    const close_cart=()=>{
        setCart("off")
    }
    const cart_data=product.map(item => {
        return(
            <div className="cart_unit">
              <div className="cart_image">
               <img src={item.location} />
              </div>
              <div className="cart_details">
                <div class="cart_title">
                   <p>{item.title}</p>
                </div>
                <div className="cart_image">

                </div>
            </div>
        </div>
        )
    })
  return(
      <div className={cart==='on'?"cart_section":"cart_off cart_section"}>
          <img src="docs/img/icons/close_white.png" className="cart_close" onClick={close_cart}/>
        <div className="cart_top">
            <div className="cart_top_unit cart_top_active" >
                <p>My Cart</p>
            </div>
            <div className="cart_top_unit">
                <p>My Wishlist</p>
            </div>
            <div className="cart_top_unit">
                <p>Recently Viewed</p>
            </div>
        </div>
        <div className="cart_bottom">
            {cart_data}
        </div>
      </div>
  )
}
export default Cart;