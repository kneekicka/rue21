import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./JobSingle.css";
import api from "../../Services/api";
import JobSingleDetail from "../../Components/JobSingleDetail/JobSIngleDetail";
import JobSingleCandidates from "../../Components/JobSingleCandidates/JobSIngleCandidates";

const JobSingle = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [job, setJob]: any = useState({});
  const [candidates, setCandidates]: any[] = useState([]);

  const fetchJob = () => {
    return api.get(`/job/profile?id=${location.state.id}`);
  };

  useEffect(() => {
    const getJob = async () => {
      /* setJob(mockedJob);
      setCandidates(mockedJob.candidates);
      console.log("candidates", candidates); */
      setLoading(true);
      fetchJob()
        .then((res: any) => {
          setJob(res.jobProfile);
          setCandidates(res.jobProfile.candidates);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
          setLoading(false);
        });
    };

    getJob();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="Job-single">
      <h3>Job Profile</h3>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <JobSingleDetail job={job} />
          </Col>
          <Col sm={8}>
            <JobSingleCandidates candidates={candidates} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobSingle;
