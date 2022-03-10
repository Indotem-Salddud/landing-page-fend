import styled from "styled-components";
import { Tokens } from "../../common/Tokens";

export const NavbarStyled = styled.nav` 
    height: ${Tokens.Navbar.Height};
    justify-content: ${Tokens.Navbar.Justify};
    display: ${Tokens.Navbar.Display};
    flex-direction: ${Tokens.Navbar.FlexDirection};
    align-items: ${Tokens.Navbar.AlignItems};
    top: ${Tokens.Navbar.Top}

`;
export const NavbarDivStyled = styled.div`
    height: ${Tokens.NavbarDiv.Height};
    left: ${Tokens.NavbarDiv.Left};
    width: ${Tokens.NavbarDiv.Width};
    display: ${Tokens.NavbarDiv.Display};
    flex-direction: ${Tokens.NavbarDiv.FlexDirection};
    justify-content: ${Tokens.NavbarDiv.JustifyContent};
    align-items: ${Tokens.NavbarDiv.AlignItems};
    position: ${Tokens.NavbarDiv.Position};

`;

export const NavbarLogoStyled = styled.image`
    position: ${Tokens.NavbarLogo.Position};
    width: ${Tokens.NavbarLogo.Width};
    height: ${Tokens.NavbarLogo.Height};
    top: ${Tokens.NavbarLogo.Top};
    margin: ${Tokens.NavbarLogo.Margin};

`;




export const NavbarTextStyled = styled.text`
    height: ${Tokens.NavbarText.Height};
    width: ${Tokens.NavbarText.Width};
    right: ${Tokens.NavbarText.Right};
    font-family: ${Tokens.NavbarText.FontFamily};
    font-style: ${Tokens.NavbarText.FontStyle};
    font-weight: ${Tokens.NavbarText.FontWeight};
    font-size: ${Tokens.NavbarText.FontSize};
    line-height: ${Tokens.NavbarText.LineHeight};
    display: ${Tokens.NavbarText.Display};
    align-items: ${Tokens.NavbarText.AlignItems};
    color: ${Tokens.NavbarText.Color};

`;

export const NavbarText2Styled = styled.text`
    height: ${Tokens.NavbarText2.Height};
    width: ${Tokens.NavbarText2.Width};
    font-family: ${Tokens.NavbarText2.FontFamily};
    font-size: ${Tokens.NavbarText2.FontSize};
    font-style: ${Tokens.NavbarText2.FontStyle};
    font-weight: ${Tokens.NavbarText2.FontWeight};
    line-height: ${Tokens.NavbarText2.LineHeight};
    -align: ${Tokens.NavbarText2.TextAlign};
    color: ${Tokens.NavbarText2.Color}
`;

export const NavbarText3Styled = styled.text`
    height: ${Tokens.NavbarText3.Height};
    width: ${Tokens.NavbarText3.Width};
    font-family: ${Tokens.NavbarText3.FontFamily};
    font-size: ${Tokens.NavbarText3.FontSize};
    font-style: ${Tokens.NavbarText3.FontStyle};
    font-weight: ${Tokens.NavbarText3.FontWeight};
    line-height: ${Tokens.NavbarText3.LineHeight};
    text-align: ${Tokens.NavbarText3.TextAlign};
    right: ${Tokens.NavbarText3.Right};
    display: ${Tokens.NavbarText3.Display};
    align-items: ${Tokens.NavbarText3.AlignItems};
    color: ${Tokens.NavbarText3.Color};
`;

export const NavbarButtonStyled = styled.button`
    display: ${Tokens.NavbarButton.Display};
    flex-direction: ${Tokens.NavbarButton.FlexDirection};
    justify-content: ${Tokens.NavbarButton.JustifyContent};
    align-items: ${Tokens.NavbarButton.AlignItems};
    padding: ${Tokens.NavbarButton.Padding};
    position: ${Tokens.NavbarButton.Position};
    width: ${Tokens.NavbarButton.Width};
    height: ${Tokens.NavbarButton.Height};
    left: ${Tokens.NavbarButton.Left};
    top: ${Tokens.NavbarButton.Top};
    background: ${Tokens.NavbarButton.Background};
    box-shadow: ${Tokens.NavbarButton.BoxShadow};
    border-radius: ${Tokens.NavbarButton.BorderRadius};
    font-family: ${Tokens.NavbarButton.FontFamily};
    font-size: ${Tokens.NavbarButton.FontSize};
    font-style: ${Tokens.NavbarButton.FontStyle};
    font-weight: ${Tokens.NavbarButton.FontWeight};
    line-height: ${Tokens.NavbarButton.LineHeight};
`;

export const NavbarIconStyled = styled.div`
    position: ${Tokens.NavbarIcon.Position};
    width: ${Tokens.NavbarIcon.Width};
    height: ${Tokens.NavbarIcon.Height};
    left: ${Tokens.NavbarIcon.Left};
    border-radius: ${Tokens.NavbarIcon.BorderRadius};
    margin: ${Tokens.NavbarIcon.Margin};

`;
