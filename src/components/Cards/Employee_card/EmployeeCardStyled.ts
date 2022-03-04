import styled from "styled-components";


// * Styled employee card

export const EmployeeCardContainer = styled.div`

display:flex;
position: absolute;
width: 12rem;
height: 17rem;
justify-content: space-between;

&:hover{
    width: 15rem;
    height: 24rem; 
}

:hover .cardBackGround{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 95px 25px 25px;

    position: absolute;
    width: 11rem;
    height: 16rem; 
    

    background: #E0E8DD;

    /* Card_Equipo */
    box-shadow: 0px 4px 18px rgba(183, 194, 184, 0.22);
    border-radius: 30px;}


:hover .cardTitleContainer{
    align-items: center;
    padding: 0px;

    position: relative;
    width: auto;
    height: auto;
    left: 34px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;}


:hover .title{
    
    position: relative;
    width:auto;
    height: auto;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 1.85rem;
    line-height: 1.85rem;
    word-wrap: break-word;

    /* Grises/negro carbon */
    color: #1C1C1F;


 
  }

:hover .position{
    position: static;
    width: auto;
    height: auto;
    left: 0px;
    top: 28px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 1.35rem;
    line-height: 1.35rem;
    text-align: center;

    /* Primario/MALVA */
    color: #7F516A;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;}

:hover .text{
    position: static;
    width: auto;
    height: auto;
    left: 34px;
    top: 230.5px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.2rem;

    /* or 125% */
    text-align: center;

    /* Grises/negro carbon */
    color: #1C1C1F;


    /* Inside auto layout */
    
    margin: 0.1vh;}
:hover .text2{
    position: static;
    width: auto;
    height: auto;
    left: 34px;
    top: 230.5px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.2rem;

    /* or 125% */
    text-align: center;

    /* Grises/negro carbon */
    color: #7F516A;


    /* Inside auto layout */
    
    margin: 0.1vh;}
.cardBackGround{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 0.5rem 0.5rem;

position: relative;
width: 100%;
height: 80%;


background: #E0E8DD;
border-radius: 30px;
z-index:0}

.pictureContainer{
position: absolute;
width: 6rem;
height: 6rem;
left: 17%;
top: -20%;


}


.cardTitleContainer{

align-items: center;
position: relative;
width: auto;
height: auto;
left: 3.3vh;


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
font-size: 1.5rem;
line-height:1.5rem;
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
left: 0px;


font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 1.22rem;
line-height: 1.84rem;
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
font-size: 0.9rem;
line-height: 0.9rem;

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
font-size: 0.9rem;
line-height: 0.9rem;

/* or 129% */
text-align: center;

/* Grises/negro carbon */
color: #7F516A;


/* Inside auto layout */
margin: 0.1vh;

}
`;


export const EmployeeCardImage = styled.div<{photo:string}>`

position: absolute;
width: 8.5rem;
height: 8.5rem;
border-radius:50%;
left:-4%;


background: url(${({photo}) =>photo});
background-size: cover;

${EmployeeCardContainer}:hover & {
   
    position: absolute;
    width: 10.5rem;
    height: 10.5rem;
    left:-6%;
   }

`;
