import styled from "styled-components";



// * Styled card component

export const ContainerStyled = styled.div`
  position: center;
  display: flex;
  width: auto;
  height: 35rem;
  z-index: 1;
  background-color: pink;
  overflow: hidden;
  


.animateRight{
  animation: fadeinright 1s ease-in-out ;

}
.animateLeft{
  animation: fadeinleft 1s ease-in-out ;

}
@keyframes fadeinright {
  from { transform: translate(100%, 0); }
  to   { transform: translate(0, 0); }
}

@keyframes fadeinleft {
  from { transform: translate(-100%, 0); }
  to   { transform: translate(0, 0); }
} 




.cardBackGround{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem 1rem;
  /* margin-left:6%; */

  position: relative;
  width: 14rem;
  height: 14rem;


  background: #E0E8DD;
  border-radius: 30px;
  z-index:0
}

  .pictureContainer{
  position: absolute;
  width: auto;
  height: auto;
  left: 16%;
  top: -20%;
}

.cardTitleContainer{

align-items: center;
position: relative;
width: auto;
height: auto;



/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


}

.title{
position: relative;
max-width:100%;


font-family: Rubik;
font-style: normal;
font-weight: 600;
font-size: 1.2rem;
line-height: 1.2rem;
text-align: center;

/* Grises/negro carbon */
color: #1C1C1F;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;

}

.position{

position: static;
width: 100%;
height: 100%;



font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 1rem;
line-height: 1rem;
text-align: center;

/* Grises/negro carbon */
color: #1C1C1F;


/* Inside auto layout */


}
.textContainer{

position: relative;
width:100%;
height: 100;}


.text{

position: auto;
width:auto;
height: auto;




font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 0.75rem;
line-height: 0.75rem;

/* or 129% */
text-align: center;

/* Grises/negro carbon */
color: #1C1C1F;


/* Inside auto layout */

margin: 0.1vh;


}

.text2{
display:inline;
position: static;
width: auto;
height: auto;
left: 24px;
top: 185.5px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 0.75rem;
line-height: 0.75rem;

/* or 129% */
text-align: center;

/* Grises/negro carbon */
color: #7F516A;


/* Inside auto layout */
margin: 0.1vh;

}



  

`;


export const CaruselRightButton = styled.button<{ background:string}>`

display:flex;
position: relative;
border:none;
width: 3rem;
height: 3rem;

background:url(${({background}) => background});;




`;

export const CaruselLeftButton = styled.button<{ background:string}>`

display: flex;
position: relative;
border:none;
width: 3rem;
height: 3rem;


background:url(${({background}) => background});

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items:center;
   position: relative; */
  width: 100%;
  height: 60%;
  /* left:10vh; */

  `; 
