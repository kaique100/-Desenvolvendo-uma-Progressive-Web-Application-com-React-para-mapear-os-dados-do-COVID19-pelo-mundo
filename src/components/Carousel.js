import React from "react";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerum from './img/1.png';
import bannerdois from './img/2.png';
import bannertres from './img/3.png';
import bannerquatro from './img/4.png';

const Carousell = () => {
    return(

      <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
          <div>
              <img src={bannerum}/>
          </div>
          <div>
              <img src={bannerdois} />
          </div>
          <div>
              <img src={bannertres} />
          </div>
          <div>
              <img src={bannerquatro} />
          </div>
      </Carousel>
      </div>
        );
    }
    
export default Carousell;