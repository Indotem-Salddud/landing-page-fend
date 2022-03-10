import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";

// * Styled Secondary button
export const SecondaryButtonStyled = styled.button` 
  border: none;
  margin: ${Tokens.Margin.Small};
  background: ${Tokens.Colors.Buttons.Secondary};
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.Secondary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
  &:hover{
      background: ${Tokens.Colors.Buttons.SecondaryHover};
      color: ${Tokens.Text.Color.Secondary};
      }
  &:active{
      background: ${Tokens.Colors.Buttons.SecondaryPressed};
      color: ${Tokens.Text.Color.Secondary};
      box-shadow: ${Tokens.BoxShadow.Medium};
    }
  &:disabled{
      color: ${Tokens.Text.Color.SecondaryDisabled};
   }
`;