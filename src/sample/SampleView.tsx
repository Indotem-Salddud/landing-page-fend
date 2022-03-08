import React from "react";
import CarouselCont from "../components/Cards/Employee_carousel/ContainerCarousel";
import "./SampleStyle.css";
import "../components/Cards/Employee_carousel/CarouselStyle.css";


/**
 * ! Sample view project
 * * whitehatdevv - 2022/02/09
 */

const SampleView: React.FC = () => {
  return (
      
      <div className="mt-3">
        <h1>Cards component</h1>
        <CarouselCont />
           
        </div>

    
  );
};

/* const datacon = document.getElementsByTagName("hola");
console.log(datacon) */

// * Export the view
export default SampleView;
