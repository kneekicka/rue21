import React from "react";
import { useHistory } from "react-router-dom";

const Candidate = (props: any) => {
  const history = useHistory();
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push(`/person-profile/${props.candidate.personId}`, {
      id: props.candidate.personId,
    });
  };

  return (
    <tr>
      <td>{props.candidate.personId}</td>
      <td>
        <a href="#" onClick={handleOnClick}>
          {props.candidate.fullName}
        </a>
      </td>
      <td>{props.candidate.appliedDate}</td>
      <td>{props.candidate.status}</td>
    </tr>
  );
};

export default Candidate;
