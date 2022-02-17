import React from "react";
import * as PropTypes from "prop-types";
import { FooterStyled, FooterLogoStyled, FooterFirstContainerStyled, FooterTextStyled, FooterSecondContainerStyled, FooterText2Styled, FooterLogoTwitterStyled, FooterLogoInstagramStyled, FooterLogoFacebookStyled, FooterThirdContainerStyled } from "./FooterStyled";
import logo from "./../../resources/static/Indotem.Logo.png";
import twitter from "./../../resources/static/twitter.png";
import instagram from "./../../resources/static/instagram.png";
import facebook from "./../../resources/static/facebook.png";



// * Define proptypes
const FooterProptypes = {
    policy: PropTypes.string.isRequired,
    copyright: PropTypes.string.isRequired,
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
      <FooterFirstContainerStyled>
        <FooterLogoStyled src={logo}/>
      <FooterSecondContainerStyled>
            <FooterLogoTwitterStyled src={twitter}/>
            <FooterLogoInstagramStyled src={instagram}/>
            <FooterLogoFacebookStyled src={facebook}/>
            <FooterTextStyled>{props.policy}</FooterTextStyled>
            <FooterText2Styled>{props.copyright}</FooterText2Styled>
      </FooterSecondContainerStyled>
      </FooterFirstContainerStyled>
    </FooterStyled>
  );
  
  
  // * Export component
  export default Footer;