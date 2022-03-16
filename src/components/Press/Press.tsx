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

/**
 * ! Press Component
 * * Carlos y Javi - 2022/03/13
 * @param props {any}
 */
 let lasextabyn = document.getElementById("lasextabyn");
 let elmundobyn = document.getElementById("elmundobyn");
 let telemadridbyn = document.getElementById("telemadridbyn");
 let larazonbyn = document.getElementById("larazonbyn");
 let lanavebyn = document.getElementById("lanavebyn");
 let lasextacont = document.getElementsByClassName("lasextaContainer")[0];
 let elmundocont = document.getElementsByClassName("elmundoContainer")[0];
 let telemadridcont = document.getElementsByClassName("telemadridContainer")[0];
 let larazoncont = document.getElementsByClassName("larazonContainer")[0];
 let lanavecont = document.getElementsByClassName("lanaveContainer")[0];

 /* EFECTO HOVER LA SEXTA */
  lasextabyn.addEventListener("mouseenter", (ev)=>{
  lasextabyn.src = `${lasexta_color}`;
  lasextabyn.style.width = "90px";
  lasextabyn.style.height = "115px";
  lasextacont.style.display = "block";
 }) 

 lasextabyn.addEventListener("mouseout", (ev)=>{
  lasextabyn.src = `${lasexta_byn}`;
  lasextabyn.style.width = "70px";
  lasextabyn.style.height = "95px";
  lasextacont.style.display = "none";
 }) 
 
/* EFECTO HOVER EL MUNDO */
  elmundobyn.addEventListener("mouseenter", (ev)=>{
  elmundobyn.src = `${elmundo_color}`;
  elmundobyn.style.width = "115px";
  elmundobyn.style.height = "115px";
  elmundocont.style.display = "block";
 }) 

 elmundobyn.addEventListener("mouseout", (ev)=>{
  elmundobyn.src = `${elmundo_byn}`;
  elmundobyn.style.width = "95px";
  elmundobyn.style.height = "95px";
  elmundocont.style.display = "none";
 })   

/* EFECTO HOVER TELEMADRID*/
telemadridbyn.addEventListener("mouseenter", (ev)=>{
  telemadridbyn.src = `${telemadrid_color}`;
  telemadridbyn.style.width = "155px";
  telemadridbyn.style.height = "115px";
  telemadridcont.style.display = "block";
 }) 

 telemadridbyn.addEventListener("mouseout", (ev)=>{
  telemadridbyn.src = `${telemadrid_byn}`;
  telemadridbyn.style.width = "135px";
  telemadridbyn.style.height = "95px";
  telemadridcont.style.display = "none";
 })   

/* EFECTO HOVER LA RAZON*/
larazonbyn.addEventListener("mouseenter", (ev)=>{
  larazonbyn.src = `${larazon_color}`;
  larazonbyn.style.width = "125px";
  larazonbyn.style.height = "115px";
  larazoncont.style.display = "block";
 }) 

 larazonbyn.addEventListener("mouseout", (ev)=>{
  larazonbyn.src = `${larazon_byn}`;
  larazonbyn.style.width = "105px";
  larazonbyn.style.height = "95px";
  larazoncont.style.display = "none";
 })   

/* EFECTO HOVER LA NAVE*/
lanavebyn.addEventListener("mouseenter", (ev)=>{
  lanavebyn.src = `${lanave_color}`;
  lanavebyn.style.width = "175px";
  lanavebyn.style.height = "115px";
  lanavecont.style.display = "block";
 }) 

 lanavebyn.addEventListener("mouseout", (ev)=>{
  lanavebyn.src = `${lanave_byn}`;
  lanavebyn.style.width = "155px";
  lanavebyn.style.height = "95px";
  lanavecont.style.display = "none";
 })   


  /* lasextabyn.addEventListener("click", (ev)=>{
  let pointer = ev.target.id;
  if(pointer === "lasextabyn"){
    lasextabyn.src = `${lasexta_color}`;
    lasextabyn.style.width = "90px";
    lasextabyn.style.height = "115px";
  } else if(pointer === "elmundobyn"){
    elmundobyn.src = `${elmundo_color}`;
    elmundobyn.style.width = "120px";
    elmundobyn.style.height = "115px";
  }
})   */



export default function Press(){

  return (
    <PressStyled>
      <div className="imgContainer" >
        <img id="lasextabyn" src={lasexta_byn} alt="#" />

        <img id="elmundobyn" src={elmundo_byn} alt="#" />

        <img id="telemadridbyn" src={telemadrid_byn} alt="#" />

        <img id="larazonbyn" src={larazon_byn} alt="#" />

        <img id="lanavebyn" src={lanave_byn} alt="#" />
      </div>
      <div className="lasextaContainer">
        <p>{dataPress[0].text}</p>
        <h3>{dataPress[0].company}</h3>
      </div>
      <div className="elmundoContainer">
        <p>{dataPress[1].text}</p>
        <h3>{dataPress[1].company}</h3>
      </div>
      <div className="telemadridContainer">
        <p>{dataPress[2].text}</p>
        <h3>{dataPress[2].company}</h3>
      </div>
      <div className="larazonContainer">
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

  




