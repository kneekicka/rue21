import React from "react";
import { Table } from "react-bootstrap";
import IForm from "../IForm/IForm";

const PersonSingleIforms = (props: any) => {
  return (
    <>
      <h4>iForms</h4>
      <Table className="Iforms-table" size="sm" striped bordered hover>
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
    </>
  );
};

export default PersonSingleIforms;
