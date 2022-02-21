import styled from "styled-components";


// * Styled employee card

export const EmployeeCardContainerStyled = styled.div`

display:flex;
position: relative;
width: 14.56rem;
height: 22rem;
top: 8.5vh;
/* justify-content: space-between;  */
float: left;
/* margin-right: 6%; */
margin: 1%



  



/* Inside auto layout */






`;

export const EmployeeCardBackgroundStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 120px 25px 25px;

position: absolute;
width: 14.56rem;
height: 10.125rem;
left: calc(50% - 265px/2);
top: calc(50% - 290px/2 + 30.5px);

background: #E0E8DD;
border-radius: 30px;

${EmployeeCardContainerStyled}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 145px 25px 25px;

    position: absolute;
    width: 15.8rem;
    height: 20.25rem;
    left: calc(50% - 285px/2);
    top: calc(50% - 356px/2 + 34.5px);

    background: #E0E8DD;

    /* Card_Equipo */
    box-shadow: 0px 4px 18px rgba(183, 194, 184, 0.22);
    border-radius: 30px;}

`;

export const EmployeeCardImageStyled = styled.div<{photo:string}>`

position: absolute;
width: 9.25rem;
height: 9.25rem;
left: calc(50% - 130px/2 + 0.32px);
top: calc(50% - 160px/2 - 95.5px);
border-radius:50%;
z-index:3;

background: url(${({photo}) =>photo});
background-size: cover;

${EmployeeCardContainerStyled}:hover & {
    display: flex;
    position: absolute;
    width: 11.25rem;
    height: 11.25rem;
    left: calc(50% - 10.25rem/2);
    top: calc(50% - 180px/2 - 122.5px);}

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

${EmployeeCardContainerStyled}:hover & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 217px;
    height: 49px;
    left: 34px;
    top: 165.5px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;}

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

${EmployeeCardContainerStyled}:hover & {
    position: static;
    width: 217px;
    height: 28px;
    left: 0px;
    top: 0px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    /* Grises/negro carbon */
    color: #1C1C1F;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;}

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
${EmployeeCardContainerStyled}:hover & {
    position: static;
    width: 217px;
    height: 21px;
    left: 0px;
    top: 28px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    /* Primario/MALVA */
    color: #7F516A;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;}

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
${EmployeeCardContainerStyled}:hover & {
    position: static;
    width: 217px;
    height: 80px;
    left: 34px;
    top: 230.5px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    /* or 125% */
    text-align: center;

    /* Grises/negro carbon */
    color: #1C1C1F;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 16px 0px;}

`;
export const EmployeeCardText2Styled = styled.p`

display:inline;
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
color: #7F516A;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 16px 0px;
${EmployeeCardContainerStyled}:hover & {
    position: static;
    width: 217px;
    height: 80px;
    left: 34px;
    top: 230.5px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    /* or 125% */
    text-align: center;

    /* Grises/negro carbon */
    color: #7F516A;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 16px 0px;}

`;





