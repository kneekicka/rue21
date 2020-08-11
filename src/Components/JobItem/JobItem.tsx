import React from "react";
import { useHistory } from "react-router-dom";

const JobItem = (props: any) => {
  const history = useHistory();
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push(`/job-profile/${props.job.jobId}`, { id: props.job.jobId });
  };

  return (
    <tr>
      <td>{props.job.jobId}</td>
      <td>
        <a href="#" onClick={handleOnClick}>
          {props.job.jobTitle}
        </a>
      </td>
      <td>{props.job.createdDate}</td>
      <td>{props.job.folder}</td>
      <td>{props.job.state.toString()}</td>
    </tr>
  );
};

export default JobItem;
