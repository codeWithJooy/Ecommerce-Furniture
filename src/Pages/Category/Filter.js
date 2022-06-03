import React from 'react'
import Sort_Filter from './Sort_Filter'
import Brand_Filter from './Brand_Filter'
import Price_Filter from './Price_Filter'
const Filter=()=>{
    return(
      <div className="filter_section">
         <Sort_Filter />
         <Brand_Filter />
         <Price_Filter />
      </div>
    )
}

export default Filter;