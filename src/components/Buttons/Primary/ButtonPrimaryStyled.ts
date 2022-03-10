import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";

// * Styled Primary button
export const PrimaryButtonStyled = styled.button` 
  border: none;
  margin: ${Tokens.Margin.Small};
  background: ${Tokens.Colors.Buttons.Primary};
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.Primary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
  &:hover{
      background: ${Tokens.Colors.Buttons.PrimaryHover};
      color: ${Tokens.Text.Color.Primary};
      }
  &:active{
      background: ${Tokens.Colors.Buttons.PrimaryPressed};
      color: ${Tokens.Text.Color.Primary};
      box-shadow: ${Tokens.BoxShadow.Medium};
    }
  &:disabled{
      color: ${Tokens.Text.Color.PrimaryDisabled};
   }
`;