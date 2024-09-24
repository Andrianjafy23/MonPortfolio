// Head.jsx
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BiAdjust } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useTheme } from './ThemeContext'; 
import { Link } from 'react-router-dom';  // Import Link

function Head() {
  const { theme, changeTheme, getBackgroundColor } = useTheme(); 

  return (
    <Navbar style={{ backgroundColor: 'whitesmoke', width: '100%', position: 'fixed' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>  {/* Utilisez Link pour la navigation */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-home">Home</Nav.Link>
            <Nav.Link as={Link} to="/service" className="nav-link-services">Parcours</Nav.Link>
            <Nav.Link as={Link} to="/projet" className="nav-link-projects">Projects</Nav.Link>
            <NavDropdown title={<MdLightMode style={{ fontSize: '30px', color: '#f7d1cf ' }} />} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => changeTheme('dark')}>
                <MdDarkMode style={{ fontSize: '20px' }} /> Dark
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeTheme('light')}>
                <CiLight style={{ fontSize: '20px', color: '#f69439' }} /> Light
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeTheme('auto')}>
                <BiAdjust style={{ fontSize: '20px' }} /> Auto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
