import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Search.css";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";
import ModalContainer from "../../Components/Modal/Modal";

const Search = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleJobTitleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    api
      .get(`/searchBy/job?searchText=${form.formSearchJobTitle.value}`)
      .then((res: any) => {
        history.push("/jobs", { jobs: res });
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
        `/searchBy/person?textName=${form.formSearchName.value}&textEmail=${form.formSearchEmail.value}`
      )
      .then((res: any) => {
        localStorage.setItem("rue21-people", JSON.stringify(res.data));
        history.push("/people");
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
