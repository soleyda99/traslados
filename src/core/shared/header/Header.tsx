import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/img/logoSinTexto.png';

export const Header = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="sticky-top"
      style={{ height: '80px' }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo goDrive"
            width={170}
            height={130}
            style={{
              objectFit: 'contain'
            }}
            className="mt-2"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#servicios">Servicios</Nav.Link>
          <Nav.Link href="#metodos-de-pago">Pagos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
