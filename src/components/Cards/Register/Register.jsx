import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { inputRegister } from '../../../redux/actions/register'
// import { Link } from 'react-router-dom';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import './Register.scss';
import axios from 'axios';

function RegisterCard() {
  const navigate = useNavigate();

  const nameField = useRef("");
  const emailField = useRef("");
  const passwordField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onRegister = async (e) => {
    e.preventDefault();

    try {
      const useToRegisterPayload = {
        name: nameField.current.value,
        email: emailField.current.value,
        password: passwordField.current.value
      }

      const registerRequest = await axios.post(
        "http://localhost:3000/api/users/register", useToRegisterPayload
      );
      console.log(registerRequest)

      const registerResponse = registerRequest;

      if (registerResponse.status) navigate("/login");

    } catch (err) {
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  }

  return (
    <Container className="mt-5">
      <Card className="register mx-auto">
        <Card.Body>
          <Card.Title className="mb-5 register-title">Let's Go!</Card.Title>
          <Card.Text className="form-register">
            <Form onSubmit={onRegister}>
              <Form.Group className="mb-3 register-form">
                <Form.Label className="form-label">Full Name</Form.Label>
                <Form.Control
                  placeholder="Jane Doe"
                  className="text"
                  ref={nameField}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  className="text"
                  ref={emailField}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minimum 8 characters"
                  className="text"
                  ref={passwordField}
                />
              </Form.Group>
              {errorResponse.isError && (
                <Alert variant="danger">{errorResponse.message}</Alert>
              )}
              <Button type="submit" className="register-btn">
                Check
              </Button>

              <div className="text-center mt-4 mb-3">
                <Form.Group className="mx-auto">
                  <Form.Text style={{ textAlign: 'center' }}>Already have an account? </Form.Text>
                  <Link to="/login" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#06A788', fontWeight: 'bold' }}>Log In Here</Form.Text></Link>
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