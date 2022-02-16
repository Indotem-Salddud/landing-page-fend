import React from "react";
import * as PropTypes from "prop-types";
import { QuaternaryButtonStyled} from "./ButtonQuaternaryStyled";


// * Define proptypes

const QuaternaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};


// * Define typealias for proptypes
type QuaternaryButtonProps = PropTypes.InferProps<typeof QuaternaryButtonProptypes>;

/**
 * ! Quaternary button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */
const QuaternaryButton: React.FC<QuaternaryButtonProps> = (props: any) => (
  <QuaternaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </QuaternaryButtonStyled>
  
);

// * Define proptypes
QuaternaryButton.propTypes = QuaternaryButtonProptypes;

// * Export component
export default QuaternaryButton;
