import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";

// * Styled primary button
export const TertiaryButtonStyled = styled.button` 
  border: none;
  background: none;
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.Tertiary};
  padding: ${Tokens.Padding.TertiaryP};
  heigth: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.TertiaryR};
  &:active{
      background: ${Tokens.Colors.Buttons.TertiaryPressed};
      color: ${Tokens.Text.Color.Tertiary};
      border: none;}
   &:hover{
      text-decoration: underline;}
   &:disabled{
      color: ${Tokens.Text.Color.TertiaryDisabled};
   }
`;

