import React from 'react'
import CardUnit from './CardUnit'
import data from '../data'

const CardSection=({setProduct,setCart})=>{
  const card_data=data.filter(cat=>cat.category.includes('living'))
                      .map(item=>{
       return(
         <CardUnit img={item.location}
                  title={item.title}
                  id={item.id}
                  key={item.id}
                  setProduct={setProduct}
                  rate={item.cost.rate}
                  price={item.cost.price}
                  setCart={setCart}
                  />
       )
  })
  return(
      <div className="card_section">
         {card_data}
      </div>
  )
}

export default CardSection;