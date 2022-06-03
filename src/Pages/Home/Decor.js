import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Decor_unit from './Decor_unit'

const Decor=()=>{
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
      <div className="home_container">
          <div className="home_container_title">
                <p>Explore Our Furniture Range</p>
            </div>
          <Slider {...settings} >
              
                  <Decor_unit img='docs/img/wardrobe.webp' 
                              title="Wordrobes"
                              subtitle="Under Rs. 30,000" />

                  <Decor_unit img='docs/img/shoe_rack.webp' 
                              title="Shoe Racks"
                              subtitle="50% off and Above" />

                  <Decor_unit img='docs/img/study_table.webp' 
                              title="Study Table"
                              subtitle="Under Rs. 1,000" />

                  <Decor_unit img='docs/img/bean_bags.webp' 
                              title="Bean Bags"
                              subtitle="Under Rs. 2,000" />

                  <Decor_unit img='docs/img/book_self.webp' 
                              title="Book Shelves"
                              subtitle="Under Rs. 30,000" />
                                                                              
                
          </Slider>
      </div>
    )
}

export default Decor;