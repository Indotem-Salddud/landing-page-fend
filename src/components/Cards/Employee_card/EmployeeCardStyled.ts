import styled from "styled-components";


// * Styled employee card
export const EmployeeCardContainerStyled = styled.div`

position: static;
width: 265px;
left: 26px;
top: 61px;
bottom: 61px;
 z-index: -1;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 67px;

`;

export const EmployeeCardBackgroundStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 120px 25px 25px;

position: absolute;
width: 265px;
height: 290px;
left: calc(50% - 265px/2);
top: calc(50% - 290px/2 + 30.5px);

background: #E0E8DD;
border-radius: 30px;

`;

export const EmployeeCardImageStyled = styled.div<{photo:string}>`

position: absolute;
width: 180px;
height: 180px;
left: calc(50% - 130px/2 + 0.32px);
top: calc(50% - 160px/2 - 95.5px);


 z-index:3;

background: url(${({photo}) =>photo});

`;

export const EmployeeCardTitleContainerStyled = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 217px;
height: 42px;
left: 24px;
top: 127.5px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;

`;

export const EmployeeCardTextTitleStyled = styled.h3`

position: static;
width: 217px;
height: 21px;
left: 0px;
top: 0px;

font-family: Rubik;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;
text-align: center;

/* Grises/negro carbon */
color: #1C1C1F;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;

`;
export const EmployeeCardTextPositionStyled = styled.h3`

position: static;
width: 217px;
height: 21px;
left: 0px;
top: 21px;

font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;

/* Grises/negro carbon */
color: #1C1C1F;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 0px;

`;
export const EmployeeCardTextStyled = styled.p`

position: static;
width: 217px;
height: 72px;
left: 24px;
top: 185.5px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;

/* or 129% */
text-align: center;

/* Grises/negro carbon */
color: #1C1C1F;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 16px 0px;

`;
