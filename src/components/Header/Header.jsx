import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Header.scss';

function Header() {
  return (
    <Container>
      <Row>
        <Col xs={6} className="list-img">
          <img src={process.env.PUBLIC_URL + '/images/list.gif'} alt="list" />
        </Col>
        <Col xs={6} className="list-desc">
          <h3>What is CheckList?</h3>
          <p>CheckList is a to do list website to make your life more structured with many benefits and it's all FREE. So, what are you waiting for? Click the button below and start make a list!</p>
          <Link to="/user/list/:id">
            <Button variant="primary" className="list-btn">Get Started</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;