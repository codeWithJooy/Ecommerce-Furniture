import React from 'react'

const Sort_Filter=()=>{
    return(
      <div className="filter_unit">
          <div className="filter_title">
             <p>Sort by</p>
          </div>
          <div className="filter_tags">
              <input type="radio" name="sort" value="" defaultChecked={true} />
              <label>Relevance</label>
          </div>
          <div className="filter_tags">
              <input type="radio" name="sort" />
              <label>Highest Price First</label>
          </div>
          <div className="filter_tags">
              <input type="radio" name="sort" />
              <label>Lowest Price First</label>
          </div>
      </div>
    )
}

export default Sort_Filter;