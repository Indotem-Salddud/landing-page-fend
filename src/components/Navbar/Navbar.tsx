import React from "react";
import * as PropTypes from "prop-types";
import { NavbarAnchor2Styled, NavbarAnchor3Styled, NavbarButtonStyled, NavbarAnchorStyled, NavbarDivStyled, NavbarStyled } from "./NavbarStyled";

// * Define proptypes
const NavbarProptypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
  };
  
  // * Define typealias for proptypes
  type NavbarProps = PropTypes.InferProps<typeof NavbarProptypes>;

/**
 * ! Navbar Component
 * * ricardodsb - 2022/02/23
 * @param props {any}
 */
 const Navbar: React.FC<NavbarProps> = (props: any) => (
  <NavbarStyled className="navbar navbar-expand-xl navbar-dark fs-3 ms-auto bg-light">
      <div className="container">
        <NavbarDivStyled>
          
            <NavbarAnchorStyled>{props.text1}</NavbarAnchorStyled>
          
          
            <NavbarAnchor2Styled>{props.text2}</NavbarAnchor2Styled>
          
          
            <NavbarAnchor3Styled>{props.text3}</NavbarAnchor3Styled>
          
          
            <NavbarButtonStyled></NavbarButtonStyled>
          
        </NavbarDivStyled>
      </div>
  </NavbarStyled>
  );
  
  
  // * Export component
  export default Navbar;