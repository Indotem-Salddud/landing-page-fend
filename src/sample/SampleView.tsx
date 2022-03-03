import React from "react";
import CarouselCont from "../components/Cards/Employee_carousel/ContainerCarousel";
import "./SampleStyle.css";


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

// * Export the view
export default SampleView;
