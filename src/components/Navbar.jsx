import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import Carrito from "./Carrito";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">KIMURA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/Rashguards" as={NavLink}>
              Rashguards
            </Nav.Link>
            <Nav.Link to="/category/Kimonos" as={NavLink}>
              Kimonos
            </Nav.Link>
            <Nav.Link to="/category/Bermudas" as={NavLink}>
              Bermudas
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
