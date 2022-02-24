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
// * Define cards array
const test = data.map((person:any, index:number) => (
  <div className="mt-2"  key={index}  ><EmployeeCard {...person} /></div>
))



export default function CarouselCont(){
 
 var [pos, setPos] = useState(0);
 

  useEffect(() => {
    
  }, [pos])
  let images = [test[pos],test[pos+1],test[pos+2],test[pos+3]];
  return (
    <ContainerStyled >
      <CardContainer id="container">
        {images}

      </CardContainer>

      <CaruselLeftButton background={lArrow}
      onClick={() => {if (pos<=4) {
          setPos(pos=0) ;return
      }setPos(pos - 4);}} />
      <CaruselRightButton background={rArrow}
      onClick={() => {if (pos+3>=test.length-4) {
          setPos(pos=test.length-4);return
      } setPos(pos + 4);}} />
     </ContainerStyled>

  )
};