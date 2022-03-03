import styled from "styled-components";
//import { Tokens } from "../../../common/Tokens";



// * Styled card component

export const ContainerStyled = styled.div`
  position: center;
  width: 125vh;
  height: 70vh;
  z-index: 1;
  
#pc{
  display: flex;
}
#pc-sm{
  display: none;
}
#mobile{
  display: none;
}
#pc_button_right{
  position: relative;
  top: -28vh;
  right: -128vh;
  display: flex;
}
#pc_button_left{
  position: relative;
  top: 20vh;
  display: flex;
}
#pc_small_button_right{
  display: none;
  position: relative;
  top: -28vh;
  right: -71vh;
}
#pc_small_button_left{
  display: none;
  top: 22vh;
  left:6vh;
}
}
#mobile_button_right{
  display: none;
  position: relative;
  top: -28vh;
  right: -50vh;
}
#mobile_button_left{
  display: none;
  top: 24vh;
}
#test1{
  width: 90%;
  display: flex;
  background-color: yellowgreen;
  justify-content: space-between;
  align-items: center;
}

.icons{
  width: 40px;
  height: 40px;
}
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


@media (max-width: 1100px){
  .cardBackGround{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 1rem 1rem;
margin-left:6%;

position: relative;
width: 14rem;
height: 14rem;


background: #E0E8DD;
border-radius: 30px;
z-index:0}

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

  #pc{
    display: none;
  }
  #pc-sm{
    display: flex;
  }
  #pc_button_right{
    display: none;
  }
  #pc_button_left{
   
    display: none;
  }
  #pc_small_button_right{
    display: flex;
  }
  #pc_small_button_left{
    display: flex;
  }
}


@media (max-height: 400px),(max-width: 400px){
  #pc-sm{
    display: none;
  }
  #mobile{
    display: flex;
  }
  #pc_small_button_right{
    display: none;
  }
  #pc_small_button_left{
   
    display: none;
  }
  #mobile_button_right{
    display: flex;
  }
  #mobile_button_left{
    display: flex;
  }
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

display:flex;
position: relative;
border:none;
width: 3rem;
height: 3rem;


background:url(${({background}) => background});


`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 60%;
  left:10vh;

  `; 
