import React from "react";
import { ListGroup } from "react-bootstrap";

const JobSingleDetail = (props: any) => {
  return (
    <>
      <h4>Details</h4>
      <ListGroup>
        <ListGroup.Item>Job id: {props.job.id}</ListGroup.Item>
        <ListGroup.Item>Full job number: {props.job.number}</ListGroup.Item>
        {props.job.code && (
          <ListGroup.Item>Job code: {props.job.code}</ListGroup.Item>
        )}
        <ListGroup.Item>Job title: {props.job.title}</ListGroup.Item>
        <ListGroup.Item>
          Open positions: {props.job.openPositions}
        </ListGroup.Item>
        {props.job.positionType && (
          <ListGroup.Item>
            Position type: {props.job.positionType}
          </ListGroup.Item>
        )}
        <ListGroup.Item>Job type: {props.job.jobType}</ListGroup.Item>
        {props.job.dueDate && (
          <ListGroup.Item>Due date: {props.job.dueDate}</ListGroup.Item>
        )}
        {props.job.startDate && (
          <ListGroup.Item>Start date: {props.job.startDate}</ListGroup.Item>
        )}
        <ListGroup.Item>Created date: {props.job.createdDate}</ListGroup.Item>
        <ListGroup.Item>Last updated: {props.job.lastUpdated}</ListGroup.Item>
        <ListGroup.Item>External id: {props.job.externalId}</ListGroup.Item>
        <ListGroup.Item>Folder: {props.job.folder}</ListGroup.Item>
        <ListGroup.Item>Street: {props.job.street}</ListGroup.Item>
        <ListGroup.Item>Street 2: {props.job.street2}</ListGroup.Item>
        <ListGroup.Item>City: {props.job.city}</ListGroup.Item>
        <ListGroup.Item>Zip: {props.job.zip}</ListGroup.Item>
        <ListGroup.Item>State: {props.job.state}</ListGroup.Item>
        <ListGroup.Item>Country: {props.job.country}</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default JobSingleDetail;
