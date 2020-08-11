import React from "react";
import { useHistory } from "react-router-dom";

const Person = (props: any) => {
  const history = useHistory();
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push(`/person-profile/${props.person.personId}`);
  };

  return (
    <tr>
      <td>{props.person.personId}</td>
      <td>{props.person.externalId}</td>
      <td>{props.person.folder}</td>
      <td>
        <a href="#" onClick={handleOnClick}>
          {props.person.name}
        </a>
      </td>
      <td>{props.person.email}</td>
      <td>{props.person.state.toString()}</td>
    </tr>
  );
};

export default Person;
