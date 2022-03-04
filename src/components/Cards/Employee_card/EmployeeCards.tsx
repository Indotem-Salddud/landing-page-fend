import React from "react";
import * as PropTypes from "prop-types";
import { EmployeeCardContainer, EmployeeCardImage} from "./EmployeeCardStyled";



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

<EmployeeCardContainer className="img-fluid">
  <div className="cardBackGround">
    <div className="pictureContainer"><EmployeeCardImage className="card-img-top" photo={props.photo}/></div>
    <div className="card-title">
    <div className="title">{props.name}</div>
    <div className="position">{props.position}</div>
    </div>
    <div className="textContainer">
    <div className="text">
    {props.text}
    <div className="text2">{props.text2}</div> 
    </div>
    </div>
  </div>
</EmployeeCardContainer>

)


// * Define proptypes
EmployeeCard.propTypes = EmployeeCardProptypes;


// * Export component
export default EmployeeCard;