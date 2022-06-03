import React from 'react'
import data from '../data'

const CardUnit=({img,title,id,setProduct})=>{
    const getProduct=(e)=>{
       const id=e.currentTarget.id 
       let location=data.find(x => x.id==id).location
       let title=data.find(x => x.id==id).title
       console.log(title)
       let product_object={
           location,
           title
       }
       setProduct( arr => [...arr,product_object])
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

                </div>
                <div className="cat_card_old_price">

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