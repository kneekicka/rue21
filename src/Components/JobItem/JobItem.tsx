import React from "react";

const JobItem = (props: any) => {
  return (
    <tr>
      <td>{props.job.jobId}</td>
      <td>{props.job.jobTitle}</td>
      <td>{props.job.createdDate}</td>
      <td>{props.job.folder}</td>
      <td>{props.job.state.toString()}</td>
    </tr>
  );
};

export default JobItem;
