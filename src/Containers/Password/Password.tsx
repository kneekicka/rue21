import React, { useState } from "react";
import "./Password.css";
import { Button, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import api from "../../Services/api";

const Password = () => {
  const [name, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    api
      .get(
        `/password/job?textName=${form.loginName.value}&textPassword=${form.loginPassword.value}`
      )
      .then((res: any) => {
        console.log("res.data", res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const validateForm = () => {
    return name.length > 0 && oldPassword.length > 0 && newPassword.length > 0;
  };

  return (
    <Jumbotron className="Password">
      <Container>
        <Row>
          <Col>
            <h3>Change password</h3>
            <Form onSubmit={handleLogin} className="Password-form">
              <Form.Group controlId="passwordName">
                <Form.Control
                  value={name}
                  required
                  type="text"
                  placeholder="Name..."
                />
              </Form.Group>
              <Form.Group controlId="passwordOldPassword">
                <Form.Control
                  value={oldPassword}
                  required
                  type="password"
                  placeholder="Old password..."
                />
              </Form.Group>
              <Form.Group controlId="passwordNewPassword">
                <Form.Control
                  value={newPassword}
                  required
                  type="password"
                  placeholder="New password..."
                />
              </Form.Group>
              <Button variant="info" type="submit" disabled={!validateForm()}>
                Change password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Password;
