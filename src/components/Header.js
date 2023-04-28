import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Navbar
      style={{
        backgroundColor: "#f0f4f9",
        position: "sticky",
        zIndex: "1000",
        top: "0",
      }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="h1 fs-1" as={NavLink} end to={"/"}>
          <i className="bi bi-robot p-3"></i>
          Chat Bot
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link
              className="text-dark fw-semibold"
              eventKey={1}
              as={NavLink}
              to={"/chatting"}
            >
              Chatting
            </Nav.Link>

            <Nav.Link
              className="text-dark fw-semibold"
              eventKey={3}
              as={NavLink}
              to={"/About"}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="text-dark fw-semibold"
              eventKey={4}
              as={NavLink}
              to={"/Privacy"}
            >
              Privacy
            </Nav.Link>

            <Button
              className="fw-semibold ms-2"
              as={NavLink}
              to={"/register"}
              style={{ backgroundColor: "#1c4e78", borderColor: "#1c4e78" }}
            >
              Register
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
