import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.scss';

function NavbarList({ userData }) {
  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mx-auto" alt="list"
              />
            </Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            <h5>Hello, {userData.name}</h5>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarList;