import { Link } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './Login.scss';

function LoginCard() {
  return (
    <Container className="mt-5">
      <Card className="login mx-auto">
        <Card.Body>
          <Card.Title className="mb-5 login-title">Welcome Back!</Card.Title>
          <Card.Text className="form-login">
            <Form>
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
              <Button variant="primary" type="submit" className="login-btn">
                Check
              </Button>

              <div className="text-center mt-4 mb-3">
                <Form.Group className="mx-auto">
                  <Form.Text style={{ textAlign: 'center' }}>Don't have an account? </Form.Text>
                  <Link to="/register" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#06A788', fontWeight: 'bold' }}>Sign Up Here</Form.Text></Link>
                </Form.Group>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default LoginCard;