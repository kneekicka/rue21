import React from "react";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand onClick={goHome} className="Navbar-link">
        Home
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
