import React from "react";
import * as PropTypes from "prop-types";
import { FooterStyled, FooterTextStyled, FooterText2Styled } from "./FooterStyled";
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
  <FooterStyled className="container-fluid">

  <div className="row p-4 ">

    <div className="col"></div>
    
    <div className="col-sm-12 col-md-4 col-lg-3 ">

      <div className="d-flex justify-content-center mb-3">
        <img className="" src={logo} alt="" />
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-3"></div>
        <div className="col-2 d-flex justify-content-center">
          <a href="https://www.instagram.com/salud.indotem/?hl=es"><img src={instagram} alt=""/></a>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <a href="https://www.facebook.com/indotem.es/"><img src={facebook} alt=""/></a>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <a href="https://twitter.com/indotem"><img src={twitter} alt=""/></a>
        </div>
        <div className="col-3"></div>
        <div className="row">
          <div className="d-flex justify-content-center mt-3 ">
            <FooterTextStyled>{props.policy}</FooterTextStyled>
          </div>
        </div>
      </div>
    </div>

    <div className="col"></div>

  </div>
  <div className="col-12 d-flex justify-content-end p-2 mt-3">
    <FooterText2Styled><p>{props.copyright}</p></FooterText2Styled>
  </div>
</FooterStyled>
  );
  
  
  // * Export component
  export default Footer;