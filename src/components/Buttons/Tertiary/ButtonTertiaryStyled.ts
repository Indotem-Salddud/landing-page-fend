import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";



// * Styled tertiary button
export const TertiaryButtonStyled = styled.button` 
  border: none;
  background: none;
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.Tertiary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
  &:active{
      background: ${Tokens.Colors.Buttons.TertiaryPressed};
      color: ${Tokens.Text.Color.Tertiary};}
   &:hover{
      text-decoration: underline;}
   &:disabled{
      color: ${Tokens.Text.Color.TertiaryDisabled};
   }
`;

