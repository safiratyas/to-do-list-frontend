// import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardDescription() {
  return (
    <Container>
      <div className="card-desc mb-5">
        <h3>Why Choose CheckList?</h3>
      </div>
      <Row xs={1} md={4} className="g-4 text-center">
        <Col>
          <Card className="list-description">
            <img src={process.env.PUBLIC_URL + '/images/document.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title>Easy To List</Card.Title>
              <Card.Text style={{ color: 'grey' }}>List everything every day</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="list-description">
            <img src={process.env.PUBLIC_URL + '/images/edit.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title>Edit List</Card.Title>
              <Card.Text style={{ color: 'grey' }}>Easy to edit list</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="list-description">
            <img src={process.env.PUBLIC_URL + '/images/target.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title>Maintain Your Target</Card.Title>
              <Card.Text style={{ color: 'grey' }}>Best way to maintain target</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="list-description">
            <img src={process.env.PUBLIC_URL + '/images/circle.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title>Structured</Card.Title>
              <Card.Text style={{ color: 'grey' }}>Structured your life</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CardDescription;