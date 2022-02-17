import React from "react";
import * as PropTypes from "prop-types";
import { EmployeeCarouselStyled, ContainerStyled } from "../Employee_carousel/EmployeeCarouselStyled";
import EmployeeCard from "../Employee_card/EmployeeCard";
import { data } from "../Employee_card/EmployeeCardsData";




/**
 * ! Carousel Component
 * * Carlos y Javi - 2022/02/17
 * @param props {any}
 */



 const CarouselCont: React.FC = () => {
  return (
    <ContainerStyled>
      <button> &#60; </button>
      {data.map((person:any) => {
          return <div className="mt-2"><EmployeeCard {...person} /></div>;
          })} 
      <button> &#62; </button>
    </ContainerStyled>
  )
 };



// * Export component
export default CarouselCont;
