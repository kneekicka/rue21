import React from "react";
import { Table } from "react-bootstrap";
import IForm from "../IForm/IForm";
import "./PersonSIngleIforms.css";

const PersonSingleIforms = (props: any) => {
  return (
    <>
      <h4>iForms</h4>
      <div className="Iforms-table">
        <Table size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Form data id</th>
              <th>Form text</th>
              <th>Form data status</th>
              <th>Completed Date</th>
              <th>Job id</th>
              <th>Job title</th>
              <th>iForm download</th>
            </tr>
          </thead>
          <tbody>
            {props.iForms.map((iForm) => (
              <IForm key={iForm.id} iForm={iForm} />
            ))}
          </tbody>
          <thead>
            <tr>
              <th>Form data id</th>
              <th>Form text</th>
              <th>Form data status</th>
              <th>Completed Date</th>
              <th>Job id</th>
              <th>Job title</th>
              <th>iForm download</th>
            </tr>
          </thead>
        </Table>
      </div>
    </>
  );
};

export default PersonSingleIforms;
