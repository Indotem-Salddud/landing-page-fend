import { ContainerStyled, CaruselLeftButton, CaruselRightButton, CardContainer} from "../Employee_carousel/EmployeeCarouselStyled";
import { data } from "../Employee_card/EmployeeCardsData";
import rArrow from "../../../resources/icons/ep_arrow-right-bold.png"
import lArrow from "../../../resources/icons/ep_arrow-left-bold.png"
import { useState, useEffect } from "react";
import EmployeeCard from "../Employee_card/EmployeeCards";



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

  let show = document.getElementById("container");
  
  console.log(show)
  return (
    <ContainerStyled >
      <CardContainer id="container" >
        
        {images}

      </CardContainer>

      <CaruselLeftButton background={lArrow}
      onClick={() => {
        if(pos !== 0){
          show?.classList.add("animateLeft");          
          setTimeout(() => {show?.classList.remove("animateLeft")},1000)
          setTimeout(() => {show?.classList.remove("animateRight")},1000)
        } 
        
        if (pos<=4) {
          setPos(pos=0);
          
          return
      }
      setPos(pos - 4);
      
  
    }} 
      />
      <CaruselRightButton background={rArrow}
      onClick={() => {
        if(pos !== test.length - 4){
          show?.classList.add("animateRight");
          setTimeout(() => {show?.classList.remove("animateLeft")},1000)
          setTimeout(() => {show?.classList.remove("animateRight")},1000)
           
        } 
        if (pos+3>=test.length-4) {
          setPos(pos=test.length-4);
          
          return
      } setPos(pos + 4);
      
      
      
     /* show.style.animationName = "fadein";  */
      }
      
      }
      
      />
     </ContainerStyled>

  )
};
