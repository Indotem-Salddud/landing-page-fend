import styled from "styled-components";
//import { Tokens } from "../../../common/Tokens";



// * Styled card component

export const ContainerStyled = styled.div`
  position: center;
  width: 116vh;
  height: 110vh;
  z-index: 0;
  margin: auto;
  overflow: hidden;
  z-index: 1;

`;


export const CaruselRightButton = styled.button<{ background:string}>`

position: absolute;
border:none;
width: 48.23px;
height: 48px;
right: 20%;
top: 30%;
background:url(${({background}) => background});;
z-index:10;

`;

export const CaruselLeftButton = styled.button<{ background:string}>`

position: absolute;
border:none;
width: 48.23px;
height: 48px;
left: 18%;
top: 30%;
background:url(${({background}) => background});
z-index:10;

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 60%;

  `; 