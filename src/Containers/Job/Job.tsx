import React, { useState, useEffect } from "react";
import { Table, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./Job.css";
import JobItem from "../../Components/JobItem/JobItem";
import PeoplePagination from "../../Components/Pagination/Pagination";
import PeopleDropDown from "../../Components/PeopleDropdown/PeopleDropdown";
// @ts-ignore
import IJob from "../../Models/Job.model";
import { useLocation } from "react-router-dom";

const Job = () => {
  const location = useLocation();
  const [job, setJob] = useState<IJob[]>([]);
  const [displayJob, setDisplayJob] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobPerPage, setJobPerPage] = useState(10);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      const res = location.state.jobs;
      setJob(res);
      setDisplayJob(res);
      setLoading(false);
    };

    fetchJob();
  }, []);

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const setJobPerPageNumber = (perPageNumber: number) => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
    setJobPerPage(perPageNumber);
  };

  const filterJob = (event: any) => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
    const searchTerm = escape(event.target.value.toLowerCase());
    const currentJob = [...job];

    const filteredJob = currentJob.filter((job) => {
      return (
        escape(job.jobId.toString()).includes(searchTerm) ||
        escape(job.jobTitle.toLowerCase()).includes(searchTerm) ||
        escape(job.createdDate).includes(searchTerm) ||
        escape(job.folder.toLowerCase()).includes(searchTerm)
      );
    });

    setDisplayJob(filteredJob);
  };

  // Get current posts
  const indexOfLastPerson = currentPage * jobPerPage;
  const indexOfFirstPost = indexOfLastPerson - jobPerPage;
  const currentJob = displayJob.slice(indexOfFirstPost, indexOfLastPerson);
  const showingJob = (
    <p className="Job-showing">
      Showing {indexOfLastPerson + 1 - jobPerPage} to{" "}
      {indexOfLastPerson >= displayJob.length
        ? displayJob.length
        : indexOfLastPerson}{" "}
      of {displayJob.length} entries
    </p>
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="Job">
      <h3>Jobs</h3>
      <Row>
        <Col sm={9}>
          <div className="Job-title">
            <PeopleDropDown
              perPage={jobPerPage}
              setPeoplePerPage={setJobPerPageNumber}
            />
          </div>
        </Col>
        <Col sm={3}>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">
                Search
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={filterJob}
              aria-label="Search"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Col>
      </Row>
      <Table className="Job-table" size="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Job id</th>
            <th>Job title</th>
            <th>Created date</th>
            <th>Folder</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {currentJob.map((job) => (
            <JobItem key={job.jobId} job={job} />
          ))}
        </tbody>
        <thead>
          <tr>
            <th>Job id</th>
            <th>Job title</th>
            <th>Created date</th>
            <th>Folder</th>
            <th>State</th>
          </tr>
        </thead>
      </Table>
      <Row>
        <Col>{showingJob}</Col>
        <Col>
          <PeoplePagination
            totalItems={displayJob.length}
            itemsPerPage={jobPerPage}
            active={currentPage}
            paginate={paginate}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Job;
