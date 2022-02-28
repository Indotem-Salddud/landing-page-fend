import React from "react";
import * as PropTypes from "prop-types";
import { NavbarText2Styled, NavbarText3Styled, NavbarButtonStyled, NavbarTextStyled, NavbarDivStyled, NavbarStyled, NavbarLogoStyled, NavbarIconStyled} from "./NavbarStyled";
import navbaricon from "./../../resources/static/Navbar.Icon.png";
import navbarlogo from "./../../resources/static/Navbar.Logo.png";

// * Define proptypes
const NavbarProptypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    title: PropTypes.string,
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

        
        <NavbarLogoStyled> <img src={navbarlogo} /> </NavbarLogoStyled>
        
        <NavbarDivStyled>
          
            <NavbarTextStyled>{props.text1}</NavbarTextStyled>
          
          
            <NavbarText2Styled>{props.text2}</NavbarText2Styled>
          
          
            <NavbarText3Styled>{props.text3}</NavbarText3Styled>
          
          
            <NavbarButtonStyled type="button" role="button" >{props.title}</NavbarButtonStyled>

            
            <NavbarIconStyled> <img src={navbaricon} /></NavbarIconStyled>
          
        </NavbarDivStyled>

        
      
  </NavbarStyled>
  );
  
  
  // * Export component
  export default Navbar;