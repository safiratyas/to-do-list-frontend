import { userLogout } from '../../redux/actions/logout';
import { useDispatch } from 'react-redux';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.scss';

function NavbarLogin() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    window.location.href = '/';
  }

  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mx-auto" alt="list"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Button
              variant="primary"
              className="nav-signup me-3"
              onClick={logout}
            >Log Out</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarLogin;