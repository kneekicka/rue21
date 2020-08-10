import React from "react";
import { useHistory } from "react-router-dom";
import "./Candidate.css";

const Candidate = (props: any) => {
  const history = useHistory();
  const handleOnClick = () => {
    console.log("Person name clicked");
    history.push(`/person-profile/${props.candidate.personId}`, {
      id: props.candidate.personId,
    });
  };

  return (
    <tr>
      <td>{props.candidate.personId}</td>
      <td className="candidate-clickable" onClick={handleOnClick}>
        {props.candidate.fullName}
      </td>
      <td>{props.candidate.appliedDate}</td>
      <td>{props.candidate.status}</td>
    </tr>
  );
};

export default Candidate;
