import React from "react";

const IForm = (props: any) => {
  const handleOnClick = () => {
    console.log("Pdf clicked");
  };

  return (
    <tr>
      <td>{props.iForm.id}</td>
      <td>{props.iForm.text}</td>
      <td>{props.iForm.status}</td>
      <td>{props.iForm.completedDate}</td>
      <td>{props.iForm.jobId}</td>
      <td>{props.iForm.jobTitle}</td>
      <td>{props.iForm.jobTitle}</td>
    </tr>
  );
};

export default IForm;
