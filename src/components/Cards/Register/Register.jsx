import { Link } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './Register.scss';

function RegisterCard() {
  return (
    <Container className="mt-5">
      <Card className="register mx-auto">
        <Card.Body>
          <Card.Title className="mb-5 register-title">Let's Go!</Card.Title>
          <Card.Text className="form-register">
            <Form>
              <Form.Group className="mb-3 register-form">
                <Form.Label className="form-label">Full Name</Form.Label>
                <Form.Control placeholder="Jane Doe"
                  className="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com"
                  className="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control type="password" placeholder="Minimum 8 characters"
                  className="text" />
              </Form.Group>
              <Button variant="primary" type="submit" className="register-btn">
                Check
              </Button>

              <div className="text-center mt-4 mb-3">
                <Form.Group className="mx-auto">
                  <Form.Text style={{ textAlign: 'center' }}>Belum punya akun? </Form.Text>
                  <Link to="/register" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#7126B5', fontWeight: 'bold' }}>Daftar di sini</Form.Text></Link>
                </Form.Group>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default RegisterCard;