import React from "react";
import * as PropTypes from "prop-types";
import { EmployeeCardContainerStyled,EmployeeCardBackgroundStyled,EmployeeCardImageStyled,EmployeeCardTextPositionStyled,EmployeeCardTextTitleStyled,EmployeeCardTextStyled,EmployeeCardTitleContainerStyled } from "../Employee_card/EmployeeCardStyled";
import Photo from"../../../sample/ExamplePhoto.png"

// * Define proptypes
const EmployeeCardProptypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};

// * Define typealias for proptypes
type EmployeeCardProps = PropTypes.InferProps<typeof EmployeeCardProptypes>;

/**
 * ! Primary button Component
 * * whitehatdevv - 2022/02/09
 * @param props {any}
 */
const EmployeeCard: React.FC<EmployeeCardProps> = (props: any) => (
<EmployeeCardContainerStyled>
  <EmployeeCardImageStyled photo={Photo}/>
  <EmployeeCardBackgroundStyled>
    <EmployeeCardTitleContainerStyled>
    <EmployeeCardTextTitleStyled>{props.name}</EmployeeCardTextTitleStyled>
    <EmployeeCardTextPositionStyled>{props.position}</EmployeeCardTextPositionStyled>
    </EmployeeCardTitleContainerStyled>
    <EmployeeCardTextStyled>{props.text}</EmployeeCardTextStyled>
  </EmployeeCardBackgroundStyled>
</EmployeeCardContainerStyled>
)
// * Define proptypes
EmployeeCard.propTypes = EmployeeCardProptypes;

// * Export component
export default EmployeeCard;
