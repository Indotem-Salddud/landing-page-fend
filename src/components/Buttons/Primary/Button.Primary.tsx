import React from "react";
import * as PropTypes from "prop-types";
import { PrimaryButtonStyled } from "./ButtonPrimaryStyled";

// * Define proptypes
const PrimaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// * Define typealias for proptypes
type PrimaryButtonProps = PropTypes.InferProps<typeof PrimaryButtonProptypes>;

/**
 * ! Primary button Component
 * * ricardodsb, stefaranzazu - 2022/02/11
 * @param props {any}
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = (props: any) => (
  <PrimaryButtonStyled
    type="button"
    role="button"
    onClick={() => props.handleClick()}
  >
    {props.title}
  </PrimaryButtonStyled>
);

// * Define proptypes
PrimaryButton.propTypes = PrimaryButtonProptypes;

// * Export component
export default PrimaryButton;
