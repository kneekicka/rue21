import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./PersonSingle.css";
import api from "../../Services/api";
import PersonSingleDetail from "../../Components/PersonSingleDetail/PersonSIngleDetail";
import PersonSingleIforms from "../../Components/PersonSingleIforms/PersonSIngleIforms";
import mockedPerson from "../../MockData/person";

const PersonSingle = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [person, setPerson]: any = useState({});
  const [workflows, setWorflows]: any[] = useState([]);
  const [iForms, setiForms]: any[] = useState([]);

  const fetchPerson = () => {
    //return api.get(`/person/profile?id=${location.state.id}`);
  };

  useEffect(() => {
    const getPerson = async () => {
      setPerson(mockedPerson);
      setWorflows(mockedPerson.workflows);
      setiForms(mockedPerson.iForms);
      console.log("person", person);
      console.log("workflows", workflows);
      console.log("iForms", iForms);
      /*setLoading(true);
      fetchPerson()
        .then((res) => {
          setPerson(res);
          setWorflows(res.workflows);
          setiForms(res.iForms);
        })
        .catch((error) => {
          console.log("error", error);
        });
      setLoading(false);*/
    };

    getPerson();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="Person-single">
      <h3>Person Profile</h3>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <PersonSingleDetail person={person} />
          </Col>
          <Col sm={9}>
            <PersonSingleIforms iForms={iForms} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonSingle;
