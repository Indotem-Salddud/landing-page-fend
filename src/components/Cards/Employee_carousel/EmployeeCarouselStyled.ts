import styled from "styled-components";



// * Styled card component

export const ContainerStyled = styled.div`
  position: center; 
  
  width: 148vh;
  
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
right: 12%;
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
left: 8%;
top: 30%;
background:url(${({background}) => background});
z-index:10;
transform: translateX(-50%);

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  /* left: 50px; */
  width: 100%;
  background-color: pink;
  height: 60%;
  /* z-index: 2; */
  animation:  3s infinite linear;
  animation-fill-mode: forwards; 
  animation-play-state: paused;
  
   


@keyframes next {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-60%, 0);
  }
}

@keyframes prev {
  from {
    transform: translate(-60%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}

 
  `; 
