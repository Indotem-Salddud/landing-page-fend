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
  let imagesSm = [test[pos],test[pos+1]];
  let imagesMobile = test[pos];

  let showPc = document.getElementById("pc");
  let showPcSmall = document.getElementById("pc-sm");
  let showMobile = document.getElementById("mobile");
  
  console.log(showPc);
  console.log(showPcSmall);
  console.log(showMobile)

  return (
   
    <ContainerStyled>
       <CaruselLeftButton id="pc_small_button_left" background={lArrow}
      onClick={() => {
        if(pos !== 0){
          showPcSmall?.classList.add("animateLeft");          
          setTimeout(() => {showPcSmall?.classList.remove("animateLeft")},1000)
          setTimeout(() => {showPcSmall?.classList.remove("animateRight")},1000)
        } 
        
        if (pos<=2) {
          setPos(pos=0);
          
          return
      }
      setPos(pos - 2);}}/>

      <CaruselLeftButton id="mobile_button_left" background={lArrow}
      onClick={() => {
        if(pos !== 0){
          showMobile?.classList.add("animateLeft");          
          setTimeout(() => { showMobile?.classList.remove("animateLeft")},1000)
          setTimeout(() => { showMobile?.classList.remove("animateRight")},1000)
        } 
        
        if (pos<1) {
          setPos(pos=0);
          
          return
      }
      setPos(pos - 1);}}/>

     <CaruselLeftButton id="pc_button_left" background={lArrow}
      onClick={() => {
        if(pos !== 0){
          showPc?.classList.add("animateLeft");          
          setTimeout(() => {showPc?.classList.remove("animateLeft")},1000)
          setTimeout(() => {showPc?.classList.remove("animateRight")},1000)
        } 
        
        if (pos<=4) {
          setPos(pos=0);
          
          return
      }
      setPos(pos - 4);
    }
  
    } 
      />
      <CardContainer id="pc">
        
        {images}

      </CardContainer>

       <CardContainer id="pc-sm">
        
        {imagesSm}

      </CardContainer>

      <CardContainer id="mobile">
        
        {imagesMobile}

      </CardContainer>

      

      <CaruselRightButton id="pc_small_button_right" background={rArrow}
      onClick={() => {
        if(pos !== test.length - 2){
          showPcSmall?.classList.add("animateRight");
          setTimeout(() => {showPcSmall?.classList.remove("animateLeft")},1000)
          setTimeout(() => {showPcSmall?.classList.remove("animateRight")},1000)
           
        } 
        if (pos+1>=test.length-2) {
          setPos(pos=test.length-2);
          
          return
      } setPos(pos + 2);
      }
      }
      
      />
         <CaruselRightButton id="mobile_button_right" background={rArrow}
      onClick={() => {
        if(pos !== test.length - 1){
          showMobile?.classList.add("animateRight");
          setTimeout(() => {showMobile?.classList.remove("animateLeft")},1000)
          setTimeout(() => {showMobile?.classList.remove("animateRight")},1000)
           
        } 
        if (pos+1>=test.length-1) {
          setPos(pos=test.length-1);
          
          return
      } setPos(pos + 1);
      }
      }
      
      />
      <CaruselRightButton id="pc_button_right" background={rArrow}
  
      onClick={() => {
        if(pos !== test.length - 4){
          showPc?.classList.add("animateRight");
          setTimeout(() => {showPc?.classList.remove("animateLeft")},1000)
          setTimeout(() => {showPc?.classList.remove("animateRight")},1000)
           
        } 
        if (pos+3>=test.length-4) {
          setPos(pos=test.length-4);
          
          return
      } setPos(pos + 4);
      
            }
      
      }
      
      />
     </ContainerStyled>

  )
};