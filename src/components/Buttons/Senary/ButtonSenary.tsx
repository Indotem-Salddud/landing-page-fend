import React from "react";
import * as PropTypes from "prop-types";
import { SenaryButtonStyled} from "./ButtonSenaryStyled";


// * Define proptypes

const SenaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};


// * Define typealias for proptypes
type SenaryButtonProps = PropTypes.InferProps<typeof SenaryButtonProptypes>;

/**
 * ! Senary button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */
const SenaryButton: React.FC<SenaryButtonProps> = (props: any) => (
  <SenaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </SenaryButtonStyled>
  
);


// * Define proptypes
SenaryButton.propTypes = SenaryButtonProptypes;

// * Export component
export default SenaryButton;