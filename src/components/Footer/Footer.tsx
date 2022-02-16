import React from "react";
import * as PropTypes from "prop-types";
import { FooterStyled, FooterLogoStyled } from "./FooterStyled";
import logo from "./../../resources/static/Indotem.Logo.png";


// * Define proptypes
const FooterProptypes = {
    policy: PropTypes.string.isRequired,
    copyright: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
  };
  
  // * Define typealias for proptypes
  type FooterProps = PropTypes.InferProps<typeof FooterProptypes>;

/**
 * ! Footer Component
 * * ricardodsb, stefaranzazu - 2022/02/16
 * @param props {any}
 */
 const Footer: React.FC<FooterProps> = (props: any) => (
    <FooterStyled>
		<div>
			<div>
                <FooterLogoStyled src={logo}/> 
                {props.policy}
            </div>
		</div>
        <div> {props.copyright}</div>

    </FooterStyled>
  );
  
  
  // * Export component
  export default Footer;