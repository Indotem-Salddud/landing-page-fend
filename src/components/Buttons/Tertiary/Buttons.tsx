import React from "react";
import * as PropTypes from "prop-types";
import { AlterPrimaryButtonStyled, AlterSecondaryButtonStyled, AlterTertiaryButtonStyled, TertiaryButtonStyled, SeptenaryButtonStyled} from "./ButtonsStyled";


// * Define proptypes
const TertiaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
const AlterPrimaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
const AlterSecondaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
const AlterTertiaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const SeptenaryButtonProptypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// * Define typealias for proptypes
type TertiaryButtonProps = PropTypes.InferProps<typeof TertiaryButtonProptypes>;
type AlterPrimaryButtonProps = PropTypes.InferProps<typeof AlterPrimaryButtonProptypes>;
type AlterSecondaryButtonProps = PropTypes.InferProps<typeof AlterSecondaryButtonProptypes>;
type AlterTertiaryButtonProps = PropTypes.InferProps<typeof AlterTertiaryButtonProptypes>;
type SeptenaryButtonProps = PropTypes.InferProps<typeof SeptenaryButtonProptypes>;

/**
 * ! Tertiary button Component
 * * Carlos y Javi - 2022/02/11
 * @param props {any}
 */
export const TertiaryButton: React.FC<TertiaryButtonProps> = (props: any) => (
  <TertiaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </TertiaryButtonStyled>
  
);

/**
 * ! Alter Primary button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */
export const AlterPrimaryButton: React.FC<AlterPrimaryButtonProps> = (props: any) => (
  <AlterPrimaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </AlterPrimaryButtonStyled>
  
);

/**
 * ! Alter Seconday button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */
export const AlterSecondaryButton: React.FC<AlterSecondaryButtonProps> = (props: any) => (
  <AlterSecondaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </AlterSecondaryButtonStyled >
  
);

/**
 * ! Alter Tertiary button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */
export const AlterTertiaryButton: React.FC<AlterTertiaryButtonProps> = (props: any) => (
  <AlterTertiaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </AlterTertiaryButtonStyled>
  
);

/**
 * ! Septenary button Component
 * * Carlos y Javi - 2022/02/15
 * @param props {any}
 */
 export const SeptenaryButton: React.FC<SeptenaryButtonProps> = (props: any) => (
  <SeptenaryButtonStyled 
    type="button"
    role="button"
    onClick={() => props.handleClick()}
 
  >
    {props.title}
  </SeptenaryButtonStyled>
  
);


// * Define proptypes
TertiaryButton.propTypes = TertiaryButtonProptypes;
AlterPrimaryButton.propTypes = AlterPrimaryButtonProptypes;
AlterSecondaryButton.propTypes = AlterSecondaryButtonProptypes;
AlterTertiaryButton.propTypes = AlterTertiaryButtonProptypes;
SeptenaryButton.propTypes = SeptenaryButtonProptypes;

