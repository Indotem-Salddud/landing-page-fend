import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";
import quaternary_button1 from "../../../resources/static/quaternary_button1.png"


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

// * Styled alter primary button
export const AlterPrimaryButtonStyled = styled.button` 
  border: none;
  background: ${Tokens.Colors.Buttons.AlterPrimary};
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.AlterPrimary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
   &:hover{
      background: ${Tokens.Colors.Buttons.AlterPrimaryHover};
      color: ${Tokens.Text.Color.AlterPrimary};}
   &:active{
      background: ${Tokens.Colors.Buttons.AlterPrimaryPressed};
      color: ${Tokens.Text.Color.AlterPrimary};
      box-shadow: ${Tokens.BoxShadow.Medium};}
   &:disabled{
      color: ${Tokens.Text.Color.AlterPrimaryDisabled};
   }
`;

// * Styled alter secondary button
export const AlterSecondaryButtonStyled = styled.button` 
  border: none;
  background: ${Tokens.Colors.Buttons.AlterSecondary};
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.AlterSecondary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
&:hover{
       background: ${Tokens.Colors.Buttons.AlterSecondaryHover};
      color: ${Tokens.Text.Color.AlterSecondary};
      }
  &:active{
      background: ${Tokens.Colors.Buttons.AlterSecondaryPressed};
      color: ${Tokens.Text.Color.AlterSecondary};
      box-shadow: ${Tokens.BoxShadow.Medium};}
   &:disabled{
      color: ${Tokens.Text.Color.AlterSecondaryDisabled};
   }
`;

// * Styled alter tertiary button
export const AlterTertiaryButtonStyled = styled.button` 
  border: none;
  background: none;
  font-size: ${Tokens.Text.Size};
  font-weight: ${Tokens.Text.Weight};
  color: ${Tokens.Text.Color.AlterTertiary};
  padding: ${Tokens.Padding.Medium};
  height: ${Tokens.Height.Large};
  width: ${Tokens.Width.Large};
  border-radius: ${Tokens.Borders.Radius.Medium};
   &:hover{
      text-decoration: underline;}
   &:active{
      background: ${Tokens.Colors.Buttons.AlterTertiaryPressed};
      color: ${Tokens.Text.Color.AlterTertiary};}
   &:disabled{
      color: ${Tokens.Text.Color.AlterTertiaryDisabled};
   }
`;

// * Styled septenary button (whatsapp)
export const SeptenaryButtonStyled = styled.button` 
  width: ${Tokens.Icons.Width};
  height: ${Tokens.Icons.Height};
  background-image: ${quaternary_button1}
`;
