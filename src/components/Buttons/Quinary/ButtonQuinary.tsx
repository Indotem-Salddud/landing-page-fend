import React from "react";
import * as PropTypes from "prop-types";
import { QuinaryButtonStyled} from "./ButtonQuinaryStyled";


// * Define proptypes

const QuinaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};


// * Define typealias for proptypes
type QuinaryButtonProps = PropTypes.InferProps<typeof QuinaryButtonProptypes>;

/**
 * ! Quinary button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */
const QuinaryButton: React.FC<QuinaryButtonProps> = (props: any) => (
  <QuinaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </QuinaryButtonStyled>
  
);


// * Define proptypes
QuinaryButton.propTypes = QuinaryButtonProptypes;

// * Export component
export default QuinaryButton;