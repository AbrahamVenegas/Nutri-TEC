import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarNutri() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">NutriTEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/GProductos">Gestion de Productos</Nav.Link>
            <Nav.Link href="/AsociacionCliente">Asociacion de Cliente</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/GPlanes">Gestion de Planes</NavDropdown.Item>
              <NavDropdown.Item href="/AsignacionPlan">Asignacion de Planes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Cerrar Sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="/">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNutri;