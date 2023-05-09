import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        className="postion-sticky sticky-top py-3 mb-5"
      >
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Filmalisa
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
