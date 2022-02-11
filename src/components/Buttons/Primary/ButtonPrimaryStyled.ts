import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";

// * Styled primary button
export const PrimaryButtonStyled = styled.button`
  border: none;
  background-color: ${Tokens.Colors.Buttons.Primary};
  color: #fff;
  border-radius: ${Tokens.Borders.Radius.PrimaryR};
  padding: ${Tokens.Padding.PrimaryP};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large}

`;
