import React from "react";
import { ListGroup } from "react-bootstrap";

const JobSingleDetail = (props: any) => {
  return (
    <>
      <h4>Details</h4>
      <ListGroup>
        <ListGroup.Item>Job id: {props.job.id}</ListGroup.Item>
        <ListGroup.Item>Full job number: {props.job.number}</ListGroup.Item>
        <ListGroup.Item>Job code: {props.job.title}</ListGroup.Item>
        <ListGroup.Item>
          Open positions: {props.job.openPositions}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default JobSingleDetail;
