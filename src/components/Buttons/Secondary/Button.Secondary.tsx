import React from "react";
import * as PropTypes from "prop-types";
import { SecondaryButtonStyled } from "./ButtonSecondaryStyled";

// * Define proptypes
const SecondaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// * Define typealias for proptypes
type SecondaryButtonProps = PropTypes.InferProps<typeof SecondaryButtonProptypes>;

/**
 * ! Secondary button Component
 * * ricardodsb, stefaranzazu - 2022/02/11
 * @param props {any}
 */
const SecondaryButton: React.FC<SecondaryButtonProps> = (props: any) => (
  <SecondaryButtonStyled
    type="button"
    role="button"
    onClick={() => props.handleClick()}
  >
    {props.title}
  </SecondaryButtonStyled>
);

// * Define proptypes
SecondaryButton.propTypes = SecondaryButtonProptypes;

// * Export component
export default SecondaryButton;