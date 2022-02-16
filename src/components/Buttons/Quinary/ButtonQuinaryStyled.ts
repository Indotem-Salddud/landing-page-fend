import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";




// * Styled Quinary button
export const QuinaryButtonStyled = styled.button` 
  border: none;
  background: ${Tokens.Colors.Buttons.Quinary};
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.Quinary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
   &:hover{
      background: ${Tokens.Colors.Buttons.QuinaryHover};
      color: ${Tokens.Text.Color.Quinary};}
   &:active{
      background: ${Tokens.Colors.Buttons.QuinaryPressed};
      color: ${Tokens.Text.Color.Quinary};
      box-shadow: ${Tokens.BoxShadow.Medium};}
   &:disabled{
      color: ${Tokens.Text.Color.QuinaryDisabled};
   }
`;
