import React from 'react'

const Price_Filter=()=>{
    return(
      <div className="filter_unit">
          <div className="filter_title">
             <p>Price</p>
          </div>
          <div className="filter_tags">
              <input type="radio" name="price" />
              <label>Under 1000</label>
          </div>
          <div className="filter_tags">
              <input type="radio" name="price" />
              <label>5000-10000</label>
          </div>
          <div className="filter_tags">
              <input type="radio" name="price" />
              <label>10000-15000</label>
          </div>
          <div className="filter_tags">
              <input type="radio" name="price" />
              <label>15000 and More</label>
          </div>
      </div>
    )
}

export default Price_Filter;