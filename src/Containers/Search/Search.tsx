import React from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Search.css";
import api from "../../Services/api";

const Search = () => {
  const handleJobTitleSubmit = (event: any) => {
    const form = event.currentTarget;
    api
      .get(`/search/job?title= ${form.formSearchJobTitle.value}`)
      .then((res) => {
        console.log("res data", res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    event.preventDefault();
    event.stopPropagation();
  };

  const handlePersonSubmit = (event: any) => {
    const form = event.currentTarget;
    console.log("name", form.formSearchName.value);
    console.log("email", form.formSearchEmail.value);
    api
      .get(
        `/search/job?name=${form.formSearchName.value}&email=${form.formSearchEmail.value}`
      )
      .then((res) => {
        console.log("res data", res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Jumbotron className="Search-jumbotron">
      <Container>
        <Row>
          <Col>
            <h3>Person search</h3>
            <Form onSubmit={handlePersonSubmit} className="Search-form">
              <Form.Group controlId="formSearchName">
                <Form.Control required type="text" placeholder="Name..." />
              </Form.Group>
              <Form.Group controlId="formSearchEmail">
                <Form.Control required type="email" placeholder="Email..." />
              </Form.Group>
              <Button variant="info" type="submit">
                Search
              </Button>
            </Form>
            <h3>Job title search</h3>
            <Form onSubmit={handleJobTitleSubmit}>
              <Form.Group controlId="formSearchJobTitle">
                <Form.Control required type="text" placeholder="Job Title..." />
              </Form.Group>
              <Button variant="info" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Search;
