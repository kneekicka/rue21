import React, { useState } from "react";
import "./Login.css";
import { Button, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import api from "../../Services/api";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    api
      .get(
        `/login/job?textName=${form.loginName.value}&textPassword=${form.loginPassword.value}`
      )
      .then((res: any) => {
        console.log("res.data", res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const validateForm = () => {
    return name.length > 0 && password.length > 0;
  };

  return (
    <Jumbotron className="Login">
      <Container>
        <Row>
          <Col>
            <h3>Sign in</h3>
            <Form onSubmit={handleLogin} className="Login-form">
              <Form.Group controlId="loginName">
                <Form.Control
                  autoFocus
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name..."
                />
              </Form.Group>
              <Form.Group controlId="loginPassword">
                <Form.Control
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password..."
                />
              </Form.Group>
              <Button variant="info" disabled={!validateForm()} type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Login;
