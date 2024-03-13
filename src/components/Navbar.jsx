import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">KIMURA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Rashguards</Nav.Link>
            <Nav.Link href="#features">Kimono</Nav.Link>
            <Nav.Link href="#pricing">Bermudas</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
