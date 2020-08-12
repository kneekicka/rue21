import React from "react";
import { useHistory } from "react-router-dom";

const JobItem = (props: any) => {
  const history = useHistory();
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push(`/job-profile/${props.job.id}`, { id: props.job.id });
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
      <td>{props.job.id}</td>
      <td>
        <a href="#" onClick={handleOnClick}>
          {props.job.title}
        </a>
      </td>
      <td>{props.job.createdDate}</td>
      <td>{props.job.folder}</td>
      <td>{returnState(props.job.state)}</td>
    </tr>
  );
};

export default JobItem;
