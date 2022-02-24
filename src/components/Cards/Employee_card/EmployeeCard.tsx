import React from "react";
import * as PropTypes from "prop-types";
import { EmployeeCardContainerStyled,EmployeeCardBackgroundStyled,EmployeeCardImageStyled,EmployeeCardTextPositionStyled,EmployeeCardTextTitleStyled,EmployeeCardTextStyled,EmployeeCardTitleContainerStyled, EmployeeCardText2Styled } from "../Employee_card/EmployeeCardStyled";


// * Define proptypes
const EmployeeCardProptypes = {
  photo:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string

};


// * Define typealias for proptypes
type EmployeeCardProps = PropTypes.InferProps<typeof EmployeeCardProptypes>;


/**
 * ! Employee Cards Component
 * * Javi y Carlos 2022/02/16
 * @param props {any}
 */
const EmployeeCard: React.FC<EmployeeCardProps> = (props: any) => (
<EmployeeCardContainerStyled>
  <EmployeeCardImageStyled photo={props.photo}/>
  <EmployeeCardBackgroundStyled>
    <EmployeeCardTitleContainerStyled>
    <EmployeeCardTextTitleStyled>{props.name}</EmployeeCardTextTitleStyled>
    <EmployeeCardTextPositionStyled>{props.position}</EmployeeCardTextPositionStyled>
    </EmployeeCardTitleContainerStyled>
    <EmployeeCardTextStyled>{props.text}
    <EmployeeCardText2Styled>{props.text2}</EmployeeCardText2Styled> 
    </EmployeeCardTextStyled>
  </EmployeeCardBackgroundStyled>
</EmployeeCardContainerStyled>
)


// * Define proptypes
EmployeeCard.propTypes = EmployeeCardProptypes;


// * Export component
export default EmployeeCard;

