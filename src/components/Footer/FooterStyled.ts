import styled from "styled-components";
import { Tokens } from "../../common/Tokens";

// * Styled Footer
export const FooterStyled = styled.footer` 
    background: ${Tokens.Footer.Color};
    position: ${Tokens.Footer.Position};
    width: ${Tokens.Footer.Width};
    height: ${Tokens.Footer.Height};
    left: ${Tokens.Footer.Left};

`;


export const FooterFirstContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: absolute;
    width: 204px;
    height: 204px;
    left: 618px;
    top: 20px;

`;

export const FooterSecondContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 140px;
    height: 75px;
    left: 32px;
    top: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;

`;

export const FooterLogoTwitterStyled = styled.img` 
    position: static;
    left: 2%;
    right: 2%;
    top: 2%;
    bottom: 2%;
    width: 20%
    height: 34,56px
    top: 0,72px
    left: 0,72px

`;

export const FooterLogoInstagramStyled = styled.img` 
    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    padding-left:18px

`;

export const FooterLogoFacebookStyled = styled.img` 
    position: static;
    left: 2%;
    right: 2%;
    top: 2%;
    bottom: 2%;
    padding-left:16px


`;

export const FooterLogoStyled = styled.img` 
    position: static;
    width: 106px;
    height: 62px;
    left: 49px;
    top: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 24px 0px;

`;

export const FooterTextStyled = styled.p`
    height: 19px;
    width: 204px;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 70%;
    bottom: 0%;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #616161;

`;

export const FooterText2Styled = styled.p`
    position: absolute;
    width: 88px;
    height: 15px
    left: 1290px;
    top: 181px;
    left: 90%;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #616161;
    
`;

