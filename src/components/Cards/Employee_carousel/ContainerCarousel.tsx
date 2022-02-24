import React  from "react";
import * as PropTypes from "prop-types";
import { ContainerStyled, CaruselLeftButton, CaruselRightButton, CardContainer} from "../Employee_carousel/EmployeeCarouselStyled";
import EmployeeCard from "../Employee_card/EmployeeCard";
import { data } from "../Employee_card/EmployeeCardsData";
import rArrow from "../../../resources/icons/ep_arrow-right-bold.png"
import lArrow from "../../../resources/icons/ep_arrow-left-bold.png"
import { useState, useEffect } from "react";



/**
 * ! Carousel Component
 * * Carlos y Javi - 2022/02/17
 * @param props {any}
 */

const test = data.map((person:any, index:number) => (     
  <div className="mt-2"  key={index}  ><EmployeeCard {...person} /></div>
))



export default function CarouselCont(){
 
 const [pos, setPos] = useState(0);
  
  
  useEffect(() => {
    console.log("ok")
  }, [pos])
  let caca = [test[pos],test[pos + 1],test[pos + 2], test[pos + 3]];
  return (
    <ContainerStyled >
      <CardContainer id="container">
        {caca}
        
      </CardContainer>
      
      <CaruselLeftButton background={lArrow}   />
      <CaruselRightButton background={rArrow}
      onClick={() => setPos(prevPos => prevPos + 1)}   />
     </ContainerStyled>

  )
}; 





