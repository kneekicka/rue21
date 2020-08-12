import React from "react";
import { useHistory } from "react-router-dom";

const Person = (props: any) => {
  const history = useHistory();
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push(`/person-profile/${props.person.id}`, { id: props.person.id });
  };

  const returnState = (state) => {
    if (state === false || state === true) {
      return state.toString();
    } else {
      return "";
    }
  };

  return (
    <tr>
      <td>{props.person.id}</td>
      <td>{props.person.externalId}</td>
      <td>{props.person.folder}</td>
      <td>
        <a href="#" onClick={handleOnClick}>
          {props.person.fullName}
        </a>
      </td>
      <td>{props.person.email}</td>
      <td>{returnState(props.person.state)}</td>
    </tr>
  );
};

export default Person;
