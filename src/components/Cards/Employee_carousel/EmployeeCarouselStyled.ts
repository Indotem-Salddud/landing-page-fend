import styled from "styled-components";
//import { Tokens } from "../../../common/Tokens";

// * Styled card component
export const EmployeeCarouselStyled = styled.div`
  display: flex;
  position: relative;
  margin: 25px;
  /* left: 500px; */
  min-width: 200px;
  height: 250px;
  background-color: grey;
`;

// * Styled card component

export const ContainerStyled = styled.div`
  /* display: flex; */
  position: absolute;
  margin: 50px;
  display: flex;
  width: 50%;
  overflow-x: scroll;
  overflow-y: hidden;
  left: 250px;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  border: 2px solid black;
`
