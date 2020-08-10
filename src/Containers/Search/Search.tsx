import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import "./Search.css";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";
import mockedJobs from "../../MockData/jobs";
import mockedPeople from "../../MockData/people";
import ModalContainer from "../../Components/Modal/Modal";

const Search = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleJobTitleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    api
      .get(`/search/job?title= ${form.formSearchJobTitle.value}`)
      .then((res) => {
        history.push("/job", { jobs: res.data });
      })
      .catch((error) => {
        setShowModal(true);
        console.log("error", error);
      });
  };

  const handlePersonSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    api
      .get(
        `/search/job?name=${form.formSearchName.value}&email=${form.formSearchEmail.value}`
      )
      .then((res) => {
        history.push("/people", { people: res.data });
      })
      .catch((error) => {
        setShowModal(true);
        console.log("error", error);
      });
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
        <ModalContainer show={showModal} onClose={handleClose} />
      </Container>
    </Jumbotron>
  );
};

export default Search;
