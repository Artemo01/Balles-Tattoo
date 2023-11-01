import React, { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Contact from "../Contact/Contact";
import Tattoos from "../Tattoos/Tattoos";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

import logo from "../../images/logo.jpg";

import "./NavBar.css";

interface INavBar {
  changePage: (page: JSX.Element) => void;
}

const NavBar: FC<INavBar> = ({ changePage }) => {
  return (
    <Navbar
      className="position-sticky sticky-top"
      bg="black"
      data-bs-theme="dark">
      <Container>
        <Nav className="w-100 justify-content-around">
          <Nav.Link
            onClick={() => changePage(<Home changePage={changePage} />)}>
            Start
          </Nav.Link>
          <Nav.Link onClick={() => changePage(<Projects />)}>Projekty</Nav.Link>
        </Nav>
        <Navbar.Brand
          onClick={() => changePage(<Home changePage={changePage} />)}>
          <img
            alt="Logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top navbar-logo"
          />
        </Navbar.Brand>
        <Nav className="w-100 justify-content-around">
          <Nav.Link onClick={() => changePage(<Tattoos />)}>Tatuaże</Nav.Link>
          <Nav.Link onClick={() => changePage(<Contact />)}>Kontakt</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
