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

