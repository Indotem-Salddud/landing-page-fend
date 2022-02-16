import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";



// * Styled Quaternary button
export const QuaternaryButtonStyled = styled.button` 
  border: none;
  background: ${Tokens.Colors.Buttons.Quaternary};
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.Quaternary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
&:hover{
    background: ${Tokens.Colors.Buttons.QuaternaryHover};
    color: ${Tokens.Text.Color.Quaternary};
      }
&:active{
    background: ${Tokens.Colors.Buttons.QuaternaryPressed};
    color: ${Tokens.Text.Color.Quaternary};
    box-shadow: ${Tokens.BoxShadow.Medium};}
&:disabled{
    color: ${Tokens.Text.Color.QuaternaryDisabled};
   }
`;
