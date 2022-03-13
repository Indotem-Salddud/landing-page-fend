import React from "react";
import { PressStyled } from "./PressStyle";
import { dataPress } from "./PressData";
import lasexta_color from "../../resources/static/press_images/lasexta_color.png";
import lasexta_byn from "../../resources/static/press_images/lasexta_byn.png";
import elmundo_color from "../../resources/static/press_images/elmundo_color.png";
import elmundo_byn from "../../resources/static/press_images/elmundo_byn.png";
import telemadrid_color from "../../resources/static/press_images/telemadrid_color.png";
import telemadrid_byn from "../../resources/static/press_images/telemadrid_byn.png";
import larazon_color from "../../resources/static/press_images/larazon_color.png";
import larazon_byn from "../../resources/static/press_images/larazon_byn.png";
import lanave_color from "../../resources/static/press_images/lanave_color.png";
import lanave_byn from "../../resources/static/press_images/lanave_byn.png";
import "../../components/Press/PressStyle.css"



function changeImg(){
  const lasextacolor = document.getElementById("lasextacolor");
  /* lasextacolor?.style.display = "none";  */
  console.log(lasextacolor)
 
  /* lasextabyn.src = {lasexta_color} */
}
/**
 * ! Press Component
 * * Carlos y Javi - 2022/03/13
 * @param props {any}
 */


// * Define array data

/* const allDataPress = dataPress.map((info) => {

}) */
console.log(dataPress)


export default function Press(){
  return (
    <PressStyled>
    <div className="imgContainer">
     <img id="lasextacolor" src={lasexta_color} alt="#" />
     <img id="lasextabyn" src={lasexta_byn} onClick={changeImg} alt="#" />

      <img src={elmundo_color} alt="#" />
      <img src={elmundo_byn} alt="#" />

      <img src={telemadrid_color} alt="#" />
      <img src={telemadrid_byn} alt="#" />

      <img src={larazon_color} alt="#" />
      <img src={larazon_byn} alt="#" />

      <img src={lanave_color} alt="#" />
      <img src={lanave_byn} alt="#" />
    </div>
    <div className="lasextaContainer">
      <p>{dataPress[0].text}</p>
      <h3>{dataPress[0].company}</h3>
    </div>
    <div className="elmundoContainer">
      <p>{dataPress[1].text}</p>
      <h3>{dataPress[1].company}</h3>
    </div>
    <div className="telemadridContaiiner">
      <p>{dataPress[2].text}</p>
      <h3>{dataPress[2].company}</h3>
    </div>
    <div className="larazonContaiiner">
      <p>{dataPress[3].text}</p>
      <h3>{dataPress[3].company}</h3>
    </div>
    <div className="lanaveContainer">
      <p>{dataPress[4].text}</p>
      <h3>{dataPress[4].company}</h3>
    </div>
    
    </PressStyled>

  )
};

  




