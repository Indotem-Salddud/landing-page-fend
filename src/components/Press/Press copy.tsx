import React from "react";
import * as PropTypes from "prop-types";
import { PressStyled } from "./PressStyle";
import { dataPress } from "./PressData";

// * Define proptypes
const PressProptypes = {
  
  text: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  logoColor: PropTypes.string.isRequired,
  logoByn: PropTypes.string.isRequired
};

// * Define typealias for proptypes
type PressButtonProps = PropTypes.InferProps<typeof PressProptypes>;

/**
 * ! Press Component
 * * Carlos y Javi - 2022/03/13
 * @param props {any}
 */
const Press: React.FC<PressButtonProps> = (props: any) => (
  <PressStyled>
    <div className="imgContainer">
      <div>{props.logoColor}</div>
      <div>{props.logoByn}</div>

    </div>
    <p>{props.text}</p>
    <h3>{props.company}</h3>
  </PressStyled>
);

// * Define proptypes
Press.propTypes = PressProptypes;

// * Export component
export default Press;
