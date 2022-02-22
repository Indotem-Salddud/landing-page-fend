import React from "react";
import * as PropTypes from "prop-types";
import { ContainerStyled, CaruselLeftButton, CaruselRightButton, CardContainer} from "../Employee_carousel/EmployeeCarouselStyled";
import EmployeeCard from "../Employee_card/EmployeeCard";
import { data } from "../Employee_card/EmployeeCardsData";
import rArrow from "../../../resources/icons/ep_arrow-right-bold.png"
import lArrow from "../../../resources/icons/ep_arrow-left-bold.png"





// * Define proptypes
const CardsCarouselProptypes = {
  cards:PropTypes.arrayOf(PropTypes.string),
  handleClick:PropTypes.func.isRequired,
  handleClick2:PropTypes.func.isRequired
};



// * Define typealias for proptypes
type CardsCarouselProps = PropTypes.InferProps<typeof CardsCarouselProptypes>;



/**
 * ! Carousel Component
 * * Carlos y Javi - 2022/02/17
 * @param props {any}
 */


 const CarouselCont: React.FC<CardsCarouselProps> = (props:any) => (

    <ContainerStyled >
      <CardContainer id="Container">
      {data.map((person:any) => (
          <div className="mt-2" ><EmployeeCard {...person} /></div>
      ))}
      </CardContainer>
    
      <CaruselLeftButton background={lArrow}
      onClick={() => props.handleClick()}
      />
      <CaruselRightButton background={rArrow}
      onClick={() => props.handleClick2()}
      />
     </ContainerStyled>

  )
;
// * Export component
export default CarouselCont;