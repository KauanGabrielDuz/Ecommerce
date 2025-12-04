import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="navbar-custom" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>MERCADO EMPÓRIO RENASCER</Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/descontos">Descontos</Nav.Link>
          <Nav.Link as={Link} to="/carrinho">Carrinho 🛒</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
