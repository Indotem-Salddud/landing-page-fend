import React from "react";
import * as Proptypes from "prop-types"
import { SecondaryButtonStyled } from "./ButtonSecondaryStyled";

// * Define proptypes

const  SecondaryButtonProptypes ={
    title : Proptypes.string.isRequired,
    handleClick: Proptypes.func.isRequired,
}

// * Define typealias for proptypes
type SecondaryButtonProps=Proptypes.InferProps<typeof SecondaryButtonProptypes>;

/**
 * !Secondary button Component
 *   * gabriel 2022/2/12
 * @param props {any}
 *
 */

const SecondaryButton : React.FC<SecondaryButtonProps>=(props:any)=>{

    return(
    
    <>
      <SecondaryButtonStyled type = "button" role="button" onClick={()=>props.handleClick()}>
      {props.title}
      </SecondaryButtonStyled>
    </>
    )
}
SecondaryButton.propTypes=SecondaryButtonProptypes;
export default SecondaryButton