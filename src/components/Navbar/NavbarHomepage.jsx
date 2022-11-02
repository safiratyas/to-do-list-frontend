import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.scss';

function NavbarHomepage() {
  return (
    <>
      <Navbar bg="light" className="navbar-home">
        <Container>
          <Navbar.Brand href="#home">Check List</Navbar.Brand>
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">
              <Button variant="primary">Primary</Button>
            </Nav.Link> */}
            <Nav.Link href="#features">
              <Button variant="primary" className="signup">Sign Up</Button>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Button variant="primary" className="login">Log In</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarHomepage;