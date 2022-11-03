import { BsFillCircleFill } from 'react-icons/bs';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardList() {
  return (
    <Container className="mt-5">
      <Form className="form-description">
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Row>
            <Col xs={11}>
              <Form.Control className="form-list" type="text" placeholder="What is your list today?" />
            </Col>
            <Col xs={1}>
              <Button className="list-btn" style={{ backgroundColor: '#06A788', borderColor: '#06A788' }}>List</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Card className="list-description mb-2">
        <Card.Body>
          <Card.Title className="mt-1" style={{ fontSize: '16px' }}>TANGGAL</Card.Title>
        </Card.Body>
      </Card>
      <Card className="list-description">
        <Row>
          <Col xs={2}>
            <BsFillCircleFill style={{ margin: '14% 10% 0 20%' }} />
          </Col>
          <Col xs={10}>
            <Card.Body>
              <Card.Title className="mt-1" style={{ fontSize: '16px' }}>One app that can change your life to the fullest!</Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default CardList;