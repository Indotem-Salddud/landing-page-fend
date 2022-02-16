import React from "react";
import * as PropTypes from "prop-types";
import { EmployeeCarouselStyled } from "../Employee_carousel/EmployeeCarouselStyled";

// * Define proptypes
const PrimaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// * Define typealias for proptypes
type PrimaryButtonProps = PropTypes.InferProps<typeof PrimaryButtonProptypes>;

/**
 * ! Primary button Component
 * * whitehatdevv - 2022/02/09
 * @param props {any}
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = (props: any) => (
  <EmployeeCarouselStyled
    type="button"
    role="button"
    onClick={() => props.handleClick()}
  >
    {props.title}
  </EmployeeCarouselStyled>
);

// * Define proptypes
PrimaryButton.propTypes = PrimaryButtonProptypes;

// * Export component
export default PrimaryButton;
