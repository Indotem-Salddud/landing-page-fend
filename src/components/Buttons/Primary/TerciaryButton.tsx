import React from "react";
import * as PropTypes from "prop-types";
import { TerciaryButtonStyled } from "./TerciaryButtonStyled";

// * Define proptypes
const TerciaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// * Define typealias for proptypes
type TerciaryButtonProps = PropTypes.InferProps<typeof TerciaryButtonProptypes>;

/**
 * ! Terciary button Component
 * * Carlos y Javi - 2022/02/11
 * @param props {any}
 */
const TerciaryButton: React.FC<TerciaryButtonProps> = (props: any) => (
  <TerciaryButtonStyled
    type="button"
    role="button"
    onClick={() => props.handleClick()}
  >
    {props.title}
  </TerciaryButtonStyled>
);

// * Define proptypes
TerciaryButton.propTypes = TerciaryButtonProptypes;

// * Export component
export default TerciaryButton;
