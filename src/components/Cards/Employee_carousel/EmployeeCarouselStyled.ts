import styled from "styled-components";



// * Styled card component

export const ContainerStyled = styled.div`
  position: center;
  width: 152vh;
  height: 110vh;
  z-index: 0;
  margin: auto;
  background-color: pink;
 overflow: hidden; 
  z-index: 1;

`;


export const CaruselRightButton = styled.button<{ background:string}>`

position: absolute;
border:none;
width: 48.23px;
height: 48px;
right: 18%;
top: 30%;
background:url(${({background}) => background});;
z-index:10;

`;

export const CaruselLeftButton = styled.button<{ background:string}>`

position: absolute;
border:none;
width: 48.23px;
height: 48px;
left: 17%;
top: 30%;
background:url(${({background}) => background});
z-index:10;

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 80%;
  left:1%;

  `; 
