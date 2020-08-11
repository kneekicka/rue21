import React from "react";
import "./IForm.css";
import { FaFilePdf } from "react-icons/fa";
import api from "../../Services/api";

const IForm = (props: any) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    return api.get(`/person/person/downloadiForm?formId=${props.iForm.id}`);
  };

  return (
    <tr>
      <td>{props.iForm.id}</td>
      <td>{props.iForm.text}</td>
      <td>{props.iForm.status}</td>
      <td>{props.iForm.completedDate}</td>
      <td>{props.iForm.jobId}</td>
      <td>{props.iForm.jobTitle}</td>
      <td className="IForm-link">
        <a href="#" onClick={handleOnClick} download>
          <FaFilePdf />
        </a>
      </td>
    </tr>
  );
};

export default IForm;
