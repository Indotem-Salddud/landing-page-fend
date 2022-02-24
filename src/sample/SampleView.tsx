import React from "react";
import "./SampleStyle.css";
import CarouselCont from "../components/Cards/Employee_carousel/ContainerCarousel"
/**
 * ! Sample view project
 * * whitehatdevv - 2022/02/09
 */

const SampleView: React.FC = () => {
   return (
    <>
      
      <div className="mt-3">
        <h1>Cards component</h1>
        <div className="mt-3 hola">
        <CarouselCont  
        
        />
          
        </div>
      </div>
    </>
  );
};

/* const datacon = document.getElementsByTagName("hola");
console.log(datacon) */

// * Export the view
export default SampleView;
