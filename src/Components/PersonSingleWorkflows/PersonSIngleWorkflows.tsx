import React from "react";
import { Table } from "react-bootstrap";
import "./PersonSIngleWorkflows.css";
import Workflow from "../Workflow/Workflow";

const PersonSingleWorkflows = (props: any) => {
  return (
    <>
      <h4 className="Workflows-header">Workflows</h4>
      <div className="Workflows-table">
        <Table className="Workflows-table" size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Job id</th>
              <th>Job title</th>
              <th>Applied date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.workflows.map((workflow) => (
              <Workflow key={workflow.personId} workflow={workflow} />
            ))}
          </tbody>
          <thead>
            <tr>
              <th>Job id</th>
              <th>Job title</th>
              <th>Applied date</th>
              <th>Status</th>
            </tr>
          </thead>
        </Table>
      </div>
    </>
  );
};

export default PersonSingleWorkflows;
