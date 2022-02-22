import React from "react";
import * as PropTypes from "prop-types";
import { ContainerStyled } from "../Employee_carousel/EmployeeCarouselStyled";
import EmployeeCard from "../Employee_card/EmployeeCard";
import { data } from "../Employee_card/EmployeeCardsData";
import Smaller_icon from "../../../resources/static/smaller_icon.png"
import Greater_icon from "../../../resources/static/greater_icon.png"



// * Define proptypes
const CardsCarouselProptypes = {
};


// * Define typealias for proptypes
type CardsCarouselProps = PropTypes.InferProps<typeof CardsCarouselProptypes>;

/**
 * ! Carousel Component
 * * Carlos y Javi - 2022/02/17
 * @param props {any}
 */




const CarouselCont: React.FC<CardsCarouselProps> = () => {

  console.log(data.length)
  
  return (
    <ContainerStyled>
        
{/*   <img src={Smaller_icon}  alt="#"/>
 */}<div id="hola">
      {data.map((person:any, index) => {
          
            return <div className="mt-2"><EmployeeCard key={index} {...person} /></div>;
          
          })} 
    </div>     
      
      
     
{/*        <img src={Greater_icon} alt="#"/>
 */}  
    </ContainerStyled>
  )
};



// * Export component
export default CarouselCont;
