import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.scss';

function NavbarList() {
  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mx-auto" alt="list"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <h5>Hello</h5>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarList;