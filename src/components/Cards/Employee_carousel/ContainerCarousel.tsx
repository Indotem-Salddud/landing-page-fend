import React from "react";
import * as PropTypes from "prop-types";
import { EmployeeCarouselStyled, ContainerStyled } from "../Employee_carousel/EmployeeCarouselStyled";
import Carousel from "../Employee_carousel/EmployeeCarousel";




/**
 * ! Carousel Component
 * * Carlos y Javi - 2022/02/17
 * @param props {any}
 */



 const CarouselCont: React.FC = () => {
  return (
    <ContainerStyled>
      <button> &#60; </button>
      <Carousel title= "Vamos allá"/>
      <Carousel title= "Vamos allá"/>
      <Carousel title= "Vamos allá"/>
      <Carousel title= "Vamos allá"/>
      <Carousel title= "Vamos allá"/>
      <Carousel title= "Vamos allá"/>
      <Carousel title= "Vamos allá"/>
      <Carousel title= "Vamos allá"/>
     
      <button> &#62; </button>
    </ContainerStyled>
  )
 };



// * Export component
export default CarouselCont;
