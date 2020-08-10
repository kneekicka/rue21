import React from "react";
import { ListGroup } from "react-bootstrap";

const PersonSingleDetail = (props: any) => {
  return (
    <>
      <h4>Details</h4>
      <ListGroup>
        <ListGroup.Item>Person id: {props.person.id}</ListGroup.Item>
        <ListGroup.Item>External id: {props.person.externalId}</ListGroup.Item>
        <ListGroup.Item>Folder: {props.person.folder}</ListGroup.Item>
        <ListGroup.Item>First name: {props.person.firstName}</ListGroup.Item>
        <ListGroup.Item>Middle name: {props.person.middleName}</ListGroup.Item>
        <ListGroup.Item>Last name: {props.person.lastName}</ListGroup.Item>
        <ListGroup.Item>Email: {props.person.email}</ListGroup.Item>
        <ListGroup.Item>Gender: {props.person.gender}</ListGroup.Item>
        <ListGroup.Item>Race: {props.person.race}</ListGroup.Item>
        <ListGroup.Item>
          Created date: {props.person.createdDate}
        </ListGroup.Item>
        <ListGroup.Item>
          Updated date: {props.person.updatedDate}
        </ListGroup.Item>
        <ListGroup.Item>Street: {props.person.street}</ListGroup.Item>
        <ListGroup.Item>City: {props.person.city}</ListGroup.Item>
        <ListGroup.Item>Zip: {props.person.zip}</ListGroup.Item>
        <ListGroup.Item>Country: {props.person.country}</ListGroup.Item>
        <ListGroup.Item>State: {props.person.state}</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PersonSingleDetail;
