import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu } from "./HeaderElements";


import logo from "../../Assets/home-icon.png";


const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={logo}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item text-decoration-none" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item text-decoration-none" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item text-decoration-none" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
