import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";

// * Styled primary button
export const TertiaryButtonStyled = styled.button`
  border: none;
  background: none;
  font-size: ${Tokens.Text.Size};
  color: ${Tokens.Text.Color.TertiaryR};
  padding: ${Tokens.Padding.TertiaryR};
  heigth: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.TertiaryR}
`;
