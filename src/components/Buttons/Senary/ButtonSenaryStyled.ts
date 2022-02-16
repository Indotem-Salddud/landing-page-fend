import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";


// * Styled alter tertiary button
export const SenaryButtonStyled = styled.button` 
  border: none;
  background: none;
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.Senary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
   &:hover{
      text-decoration: underline;}
   &:active{
      background: ${Tokens.Colors.Buttons.SenaryPressed};
      color: ${Tokens.Text.Color.Senary};}
   &:disabled{
      color: ${Tokens.Text.Color.SenaryDisabled};
   }
`;