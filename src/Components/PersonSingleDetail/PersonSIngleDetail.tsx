import React from "react";
import { ListGroup } from "react-bootstrap";

const PersonSingleDetail = (props: any) => {
  return (
    <>
      <h4>Details</h4>
      <ListGroup>
        <ListGroup.Item>Person id: {props.person.id}</ListGroup.Item>
        {props.person.externalId && (
          <ListGroup.Item>
            External id: {props.person.externalId}
          </ListGroup.Item>
        )}
        {props.person.folder && (
          <ListGroup.Item>Folder: {props.person.folder}</ListGroup.Item>
        )}
        {props.person.firstName && (
          <ListGroup.Item>First name: {props.person.firstName}</ListGroup.Item>
        )}
        {props.person.middleName && (
          <ListGroup.Item>
            Middle name: {props.person.middleName}
          </ListGroup.Item>
        )}
        {props.person.lastName && (
          <ListGroup.Item>Last name: {props.person.lastName}</ListGroup.Item>
        )}
        {props.person.email && (
          <ListGroup.Item>Email: {props.person.email}</ListGroup.Item>
        )}
        {props.person.gender && (
          <ListGroup.Item>Gender: {props.person.gender}</ListGroup.Item>
        )}
        {props.person.race && (
          <ListGroup.Item>Race: {props.person.race}</ListGroup.Item>
        )}
        {props.person.disability && (
          <ListGroup.Item>Disability: {props.person.disability}</ListGroup.Item>
        )}
        {props.person.veteran && (
          <ListGroup.Item>Veteran: {props.person.veteran}</ListGroup.Item>
        )}
        {props.person.createdDate && (
          <ListGroup.Item>
            Created date: {props.person.createdDate}
          </ListGroup.Item>
        )}
        {props.person.updatedDate && (
          <ListGroup.Item>
            Updated date: {props.person.updatedDate}
          </ListGroup.Item>
        )}
        {props.person.street && (
          <ListGroup.Item>Street: {props.person.street}</ListGroup.Item>
        )}
        {props.person.street2 && (
          <ListGroup.Item>Street 2: {props.person.street2}</ListGroup.Item>
        )}
        {props.person.city && (
          <ListGroup.Item>City: {props.person.city}</ListGroup.Item>
        )}
        {props.person.zip && (
          <ListGroup.Item>Zip: {props.person.zip}</ListGroup.Item>
        )}
        {props.person.country && (
          <ListGroup.Item>Country: {props.person.country}</ListGroup.Item>
        )}
        {props.person.state && (
          <ListGroup.Item>State: {props.person.state}</ListGroup.Item>
        )}
      </ListGroup>
    </>
  );
};

export default PersonSingleDetail;
