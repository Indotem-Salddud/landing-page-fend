import React from "react";
import * as PropTypes from "prop-types";
import {SeptenaryButtonStyled} from "./ButtonSeptenaryStyled";

/**
 * ! Septenary button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */


// * Define proptypes

const SeptenaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};


// * Define typealias for proptypes
type SeptenaryButtonProps = PropTypes.InferProps<typeof SeptenaryButtonProptypes>;

const SeptenaryButton: React.FC<SeptenaryButtonProps> = (props: any) => (
  <SeptenaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </SeptenaryButtonStyled>
  
);


// * Define proptypes
SeptenaryButton.propTypes = SeptenaryButtonProptypes;

// * Export component
export default SeptenaryButton;
