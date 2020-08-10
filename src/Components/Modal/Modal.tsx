import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalContainer = (props: any) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search result</Modal.Title>
        </Modal.Header>
        <Modal.Body>Search unsuccessful</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContainer;
