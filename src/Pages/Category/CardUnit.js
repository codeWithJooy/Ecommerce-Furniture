import React from 'react'
import data from '../data'

const CardUnit=({img,title,id,setProduct,rate,price,setCart})=>{
    const getProduct=(e)=>{
       const id=e.currentTarget.id 
       let location=data.find(x => x.id==id).location
       let title=data.find(x => x.id==id).title
       let rate=data.find(x => x.id==id).cost.rate
       let price=data.find(x => x.id==id).cost.price
       
       let product_object={
           location,
           title,
           rate,
           price
       }
       setProduct( arr => [...arr,product_object])
       setCart("on")
    }
    return(
    <div className="cat_card_unit">
        <div className="cat_card_image">
            <img src={img} />
        </div>
        <div className="cat_card_text">
            <div className="cat_card_name">
              <p>
                 {title}
              </p>
            </div>
            <div className="cat_card_price">
                <div className="cat_card_new_price">
                   <p>Rs {price}</p>
                </div>
                <div className="cat_card_old_price">
                    <p>Rs {rate}</p>
                </div>
                <div className="cat_card_dis">

                </div>
            </div>
            <div className="cat_card_button">
                <button id={id} onClick={getProduct}>Add To Cart</button>
            </div>
        </div>
    </div>
    )
}

export default CardUnit;