import styled from "styled-components";
import { Tokens } from "../../common/Tokens";

// * Styled Footer
export const FooterStyled = styled.footer` 
    background: ${Tokens.Footer.Color};
    height: ${Tokens.Footer.Height}
`;


export const FooterTextStyled = styled.p`;
    position: ${Tokens.FooterText.Position};
    font-family: ${Tokens.FooterText.FontFamily};
    font-style: ${Tokens.FooterText.FontStyle};
    font-weight: ${Tokens.FooterText.FontWeight};
    font-size: ${Tokens.FooterText.FontSize};
    line-height: ${Tokens.FooterText.LineHeight};
    color: ${Tokens.FooterText.Color};


`;

export const FooterText2Styled = styled.p`
    position: ${Tokens.FooterText2.Position};
    font-family: ${Tokens.FooterText2.FontFamily};
    font-style: ${Tokens.FooterText2.FontStyle};
    font-weight: ${Tokens.FooterText2.FontWeight};
    font-size: ${Tokens.FooterText2.FontSize};
    line-height: ${Tokens.FooterText2.LineHeight};
    letter-spacing: ${Tokens.FooterText2.LetterSpacing};
    color:${Tokens.FooterText2.Color};
    
`;

