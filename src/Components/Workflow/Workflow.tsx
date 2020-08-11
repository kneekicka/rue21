import React from "react";
import { useHistory } from "react-router-dom";
import "./Workflow.css";

const Workflow = (props: any) => {
  const history = useHistory();
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push(`/job-profile/${props.workflow.jobId}`, {
      id: props.job.jobId,
    });
  };

  return (
    <tr>
      <td>{props.workflow.jobId}</td>
      <td>
        <a href="#" onClick={handleOnClick}>
          {props.workflow.jobTitle}
        </a>
      </td>
      <td>{props.workflow.appliedDate}</td>
      <td>{props.workflow.status}</td>
    </tr>
  );
};

export default Workflow;
