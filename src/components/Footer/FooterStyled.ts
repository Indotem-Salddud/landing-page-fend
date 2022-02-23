import styled from "styled-components";
import { Tokens } from "../../common/Tokens";

// * Styled Footer
export const FooterStyled = styled.footer` 
    background: ${Tokens.Footer.Color};
    height: ${Tokens.Footer.Height};
    

`;


export const FooterTextStyled = styled.p`
    position: ${Tokens.Footer.FooterText.Position}
    font-family: ${Tokens.Footer.FooterText.FontFamily}
    font-style: ${Tokens.Footer.FooterText.FontStyle}
    font-weight: ${Tokens.Footer.FooterText.FontWeight}
    font-size: ${Tokens.Footer.FooterText.FontSize}
    line-height: ${Tokens.Footer.FooterText.LineHeight}
    color: ${Tokens.Footer.FooterText.Color}


`;

export const FooterText2Styled = styled.p`
    position: ${Tokens.Footer.FooterText2.Position}
    font-family: ${Tokens.Footer.FooterText2.FontFamily}
    font-style: ${Tokens.Footer.FooterText2.FontStyle}
    font-weight: ${Tokens.Footer.FooterText2.FontWeight}
    font-size: ${Tokens.Footer.FooterText2.FontSize}
    line-height: ${Tokens.Footer.FooterText2.LineHeight}
    letter-spacing: ${Tokens.Footer.FooterText2.LetterSpacing}
    color:${Tokens.Footer.FooterText2.Color}
    
`;

