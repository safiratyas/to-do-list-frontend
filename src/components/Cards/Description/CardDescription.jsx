// import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

function CardDescription() {
  return (
    <Container className="mt-5 mb-5">
      <div className="card-desc">
        <h5>Why Choose Us?</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam voluptates error adipisci commodi, laudantium perferendis modi impedit, atque autem voluptatem aliquid assumenda recusandae, maiores quod! Iste sequi accusamus inventore?</p>
      </div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card className="list-description">
              <img src={process.env.PUBLIC_URL + '/images/litter_box.jpg'} alt="pet" />
              <Card.Body>
                <Card.Title>Litter Box</Card.Title>
                <Card.Text style={{ color: 'grey' }}>This is litter box</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardDescription;