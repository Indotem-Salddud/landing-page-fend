import styled from "styled-components";
import { Tokens } from "../../../common/Tokens";





// * Styled septenary button (whatsapp)
export const SeptenaryButtonStyled = styled.button` 

position: absolute;
width: ${Tokens.Icons.Width.Septenary};
height: ${Tokens.Icons.Height.Septenary};
border-radius: ${Tokens.Icons.BorderRadius.Septenary};
border:none;
background: ${Tokens.Colors.Buttons.Septenary};
box-shadow:${Tokens.Icons.BoxShadow.Septenary};
&:hover{  
  background:${Tokens.Colors.Buttons.SeptenaryHover};}

`;
export const SeptenaryIconStyled = styled.div<{ background: string }>` 

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

background-image: url(${({ background }) => background});
position: absolute;
width: ${Tokens.Icons.Width.SeptenaryIcon};
height: ${Tokens.Icons.Width.SeptenaryIcon};
left: 16px;
top: 15px;

`;
