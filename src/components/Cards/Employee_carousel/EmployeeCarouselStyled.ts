import styled from "styled-components";
//import { Tokens } from "../../../common/Tokens";



// * Styled card component

export const ContainerStyled = styled.div`
  position: center;
  width: 115vh;
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
transform:  translateX(50%);

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
transform: translateX(-50%);

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: center;
  width: 100%;
  height: 60%;
  z-index: 2;
  animation: next 50s infinite linear;
    &:hover  {
    animation-play-state: paused;}
   
}

@keyframes next {
  0% {
    transform: translate(0, 0);
  }
  30% {
    transform: translateX(-30%);
  }
  60% {
    transform: translate(-60%, 0);
  }
  100% {
    transform: translateX(-100%);
  }
}
    
  `; 