import React from "react";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../../logo.svg";

const NavBar = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand onClick={goHome} className="Navbar-link">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
