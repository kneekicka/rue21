import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Candidate from "../Candidate/Candidate";
import mockedJobs from "../../MockData/jobs";

const JobSingleCandidates = (props: any) => {
  return (
    <>
      <h4>Candidates</h4>
      <Table className="People-table" size="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Person Id</th>
            <th>Name</th>
            <th>Applied date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate) => (
            <Candidate key={candidate.personId} candidate={candidate} />
          ))}
        </tbody>
        <thead>
          <tr>
            <th>Person Id</th>
            <th>Name</th>
            <th>Applied date</th>
            <th>Status</th>
          </tr>
        </thead>
      </Table>
    </>
  );
};

export default JobSingleCandidates;
