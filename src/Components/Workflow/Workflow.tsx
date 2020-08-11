import React from "react";
import { useHistory } from "react-router-dom";
import "./Workflow.css";

const Workflow = (props: any) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/job-profile/${props.workflow.jobId}`);
  };

  return (
    <tr>
      <td className="Workflow-clickable" onClick={handleOnClick}>
        {props.workflow.jobId}
      </td>
      <td>{props.workflow.jobTitle}</td>
      <td>{props.workflow.appliedDate}</td>
      <td>{props.workflow.status}</td>
    </tr>
  );
};

export default Workflow;
