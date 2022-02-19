import React from "react";
import * as PropTypes from "prop-types";
import { FooterDivInstagramStyled, FooterDivFacebookStyled, FooterStyled, FooterLogoStyled, FooterFirstContainerStyled, FooterTextStyled, FooterSecondContainerStyled, FooterText2Styled } from "./FooterStyled";
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
       
          <a href= "https://twitter.com/indotem"><img src={twitter} alt=""/></a> 
          <FooterDivInstagramStyled>
          <a href="https://www.instagram.com/salud.indotem/?hl=es"><img src={instagram} alt=""/></a> 
          </FooterDivInstagramStyled>
          <FooterDivFacebookStyled>
            <a href="https://www.facebook.com/indotem.es/"><img src={facebook} alt=""/></a> 
          </FooterDivFacebookStyled>
          <FooterTextStyled>{props.policy}</FooterTextStyled>
            
      </FooterSecondContainerStyled>
      </FooterFirstContainerStyled>
      <FooterText2Styled>{props.copyright}</FooterText2Styled>
    </FooterStyled>
  );
  
  
  // * Export component
  export default Footer;