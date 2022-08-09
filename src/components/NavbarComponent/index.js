import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar className='navbar navbar-dark bg-dark'>
      <NavbarBrand href='/' className='me-auto'>
        Perícias
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='me-2' />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/about'>Quem Somos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/clients'>Clientes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/contact'>Contato</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
