import React from "react";
import { Dropdown } from "react-bootstrap";
import "./PeopleDropdown.css";

const PeopleDropDown = (props: any) => {
  return (
    <div className="People-dropdown">
      <span>Show </span>
      <Dropdown>
        <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
          {props.perPage}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              props.setPeoplePerPage(10);
            }}
          >
            10
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              props.setPeoplePerPage(20);
            }}
          >
            20
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              props.setPeoplePerPage(50);
            }}
          >
            50
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <span> entries</span>
    </div>
  );
};

export default PeopleDropDown;
