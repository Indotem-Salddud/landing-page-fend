import React from "react";
import "./SampleStyle.css";
import CarouselCont from "../components/Cards/Employee_carousel/ContainerCarousel";
import smaller from "../resources/static/smaller_icon.png"
import greater from "../resources/static/greater_icon.png"
/**
 * ! Sample view project
 * * whitehatdevv - 2022/02/09
 */
const SampleView: React.FC = () => {
  return (
    <>
      
      <div className="mt-3">
        <h1>Cards component</h1>
        <div className="mt-3">
          <div id="test1">
          <img className= "icons" onMouseUp={start} onMouseDown={end1} src={smaller}  alt="#"/>
          <CarouselCont />
          <img className= "icons" onMouseUp={start} onMouseDown={end2} src={greater}  alt="#"/>
          </div>
          
        </div>
      </div>
    </>
  );
};
const prueba = document.getElementById("test1");
console.log(prueba)
function start(){
    prueba.style.animationPlayState = "paused";
}
function end1(){
  prueba.style.animationPlayState = "running";
  prueba.style.animationDirection = "normal";
}
function end2(){
  prueba.style.animationPlayState = "running";
  prueba.style.animationDirection = "reverse";
}
// * Export the view
export default SampleView;
