import React from "react";
import * as PropTypes from "prop-types";
import { EmployeeCarouselStyled, ContainerStyled } from "../Employee_carousel/EmployeeCarouselStyled";




/**
 * ! Carousel Component
 * * Carlos y Javi - 2022/02/17
 * @param props {any}
 */

// * Define proptypes
const CarouselProptypes = {
  //image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// * Define typealias for proptypes
type CarouselProps = PropTypes.InferProps<typeof CarouselProptypes>;


const Carousel: React.FC<CarouselProps> = (props: any) => (
  //<ContainerStyled></ContainerStyled>
    <EmployeeCarouselStyled>
      {props.title}
    </EmployeeCarouselStyled>
  
  
);

// * Define proptypes
Carousel.propTypes = CarouselProptypes;


// * Export component
export default Carousel;
