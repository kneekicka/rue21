import React from "react";

const Person = (props: any) => {
  return (
    <tr>
      <td>{props.person.personId}</td>
      <td>{props.person.externalId}</td>
      <td>{props.person.folder}</td>
      <td>{props.person.name}</td>
      <td>{props.person.email}</td>
      <td>{props.person.state.toString()}</td>
    </tr>
  );
};

export default Person;
