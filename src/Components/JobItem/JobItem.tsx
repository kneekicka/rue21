import React from "react";
import { useHistory } from "react-router-dom";
import "./JobItem.css";

const JobItem = (props: any) => {
  const history = useHistory();
  const handleOnClick = () => {
    console.log("Job title clicked");
    history.push(`/job-profile/${props.job.jobId}`, { id: props.job.jobId });
  };

  return (
    <tr>
      <td>{props.job.jobId}</td>
      <td className="job-clickable" onClick={handleOnClick}>
        {props.job.jobTitle}
      </td>
      <td>{props.job.createdDate}</td>
      <td>{props.job.folder}</td>
      <td>{props.job.state.toString()}</td>
    </tr>
  );
};

export default JobItem;
