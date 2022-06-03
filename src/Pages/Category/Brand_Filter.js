import React from 'react'

const Brand_Filter=()=>{
    return(
      <div className="filter_unit">
          <div className="filter_title">
             <p>Popular Brands</p>
          </div>
          <div className="filter_tags">
              <input type="radio" />
              <label>Brand 1</label>
          </div>
          <div className="filter_tags">
              <input type="radio" />
              <label>Brand 2</label>
          </div>
          <div className="filter_tags">
              <input type="radio" />
              <label>Brand 3</label>
          </div>
      </div>
    )
}

export default Brand_Filter;