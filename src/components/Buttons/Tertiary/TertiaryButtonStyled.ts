import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";

// * Styled primary button
export const TertiaryButtonStyled = styled.button`
  border: none;
  background: none;
  color: ${Tokens.Text.Color.TertiaryR};
  font-size: ${Tokens.Text.Size};
  border-radius: ${Tokens.Borders.Radius.TertiaryR};
  padding: ${Tokens.Padding.TertiaryR};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large}

`;
