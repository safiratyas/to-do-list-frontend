import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserList } from '../../../redux/actions/createList';
import axios from 'axios';
import { BsFillCircleFill } from 'react-icons/bs';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardList({ userData, listData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [userList, setUserList] = useState('');
  const nameField = useRef("");

  const createList = async (e) => {
    e.preventDefault();

    try {
      const createListPayload = {
        email: nameField.current.value,
      }

      const token = localStorage.getItem('token');
      const listRequest = await axios.post(
        "http://localhost:3000/api/lists", createListPayload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );
      console.log(listRequest);
      const loginReponse = listRequest;
      console.log(loginReponse);

      if (loginReponse.status) {
        localStorage.setItem("token", loginReponse.data.token);

        navigate("/")
      }

    } catch (err) {
      const response = err.response.data;
    }
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const body = {
  //     name: userList,
  //   };

  //   console.log(body);
  //   await dispatch(createUserList(body));
  // }

  // const handleChangeList = (e) => {
  //   setUserList(e);
  //   console.log(userList)
  // };

  // useEffect(() => {
  //   // window.location.reload();
  // }, [userList])

  return (
    <Container className="mt-5">
      <Form className="form-description" onSubmit={createList}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Row>
            <Col xs={11}>
              <Form.Control
                className="form-list"
                type="text"
                placeholder="What is your list today?"
                ref={nameField}
              />
            </Col>
            <Col xs={1}>
              <Button className="list-btn" style={{ backgroundColor: '#06A788', borderColor: '#06A788' }}>List</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {listData.map((data) => {
        console.log(data)
        return (
          <>
            <Card className="list-description">
              <Row>
                <Col xs={2}>
                  <BsFillCircleFill style={{ margin: '14% 10% 0 20%' }} />
                </Col>
                <Col xs={10}>
                  <Card.Body>
                    <Card.Title className="mt-1" style={{ fontSize: '16px' }}>{data.name}</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </>
        )
      })}
    </Container>
  )
}

export default CardList;