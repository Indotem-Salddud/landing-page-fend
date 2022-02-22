import styled from "styled-components";
import { Tokens } from "../../common/Tokens";

// * Styled Footer
export const FooterStyled = styled.footer` 
    background: ${Tokens.Footer.Color};
    height: ${Tokens.Footer.Height};
    

`;


export const FooterTextStyled = styled.p`
    position: absolute;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #616161;


`;

export const FooterText2Styled = styled.p`
    position: absolute;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    letter-spacing: -0.02em;
    color: #616161;
    
`;

