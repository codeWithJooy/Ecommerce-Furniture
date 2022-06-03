import React from 'react'
import Explore_Unit from './Explore_Unit'
const Explore=()=>{
    return(
        <div className="home_container">
            <div className="home_container_title">
                <p>Explore Our Furniture Range</p>
            </div>
            <div className="home_icons_section">
                <Explore_Unit img='docs/img/sofa.png'
                              nam='Sofas' />
                <Explore_Unit img='docs/img/bed.png'
                              nam='Beds' />
                <Explore_Unit img='docs/img/dinning-table.png'
                              nam='Dinning' />
                <Explore_Unit img='docs/img/tv-unit.png'
                              nam='Tv Units' />
                <Explore_Unit img='docs/img/recliner.png'
                              nam='Recliners' />
                <Explore_Unit img='docs/img/sofa.png'
                              nam='Tables' />
                <Explore_Unit img='docs/img/dinning-table.png'
                              nam='Cabinet' />
                <Explore_Unit img='docs/img/floor-lamp.png'
                              nam='Decor' />
                <Explore_Unit img='docs/img/tv-unit.png'
                              nam='Shoe Rack' />
                <Explore_Unit img='docs/img/mattress.png'
                              nam='Mattress' />                                                                                    
               
            </div>
        </div>    
    )
}

export default Explore;