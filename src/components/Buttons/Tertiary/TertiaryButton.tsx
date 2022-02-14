import React from "react";
import * as PropTypes from "prop-types";
import { TertiaryButtonStyled } from "./TertiaryButtonStyled";

// * Define proptypes
const TertiaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// * Define typealias for proptypes
type TertiaryButtonProps = PropTypes.InferProps<typeof TertiaryButtonProptypes>;

/**
 * ! Terciary button Component
 * * Carlos y Javi - 2022/02/11
 * @param props {any}
 */
const TertiaryButton: React.FC<TertiaryButtonProps> = (props: any) => (
  <TertiaryButtonStyled
    type="button"
    role="button"
    onClick={() => props.handleClick()}
  >
    {props.title}
  </TertiaryButtonStyled>
);

// * Define proptypes
TertiaryButton.propTypes = TertiaryButtonProptypes;

// * Export component
export default TertiaryButton;
