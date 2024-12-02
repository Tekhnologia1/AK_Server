import React from "react";
import { Modal, Button, } from "react-bootstrap";

function ShowModal({ show, setShow, title, bodyContent, onConfirm ,data}) {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body className="text-center p-4">

        <h5 className="modal-title mb-3 fw-bold pt-2 pb-2" style={{color:'#7B3F00'}}>{title}</h5>

        <div className="modal-content-body">
          {bodyContent ? (
            bodyContent
          ) : (
            <p>No content provided.</p>
          )}
        </div>
        <div className="d-flex justify-content-center mt-4 pb-2">
          <Button
            variant="outline-light"
            onClick={handleClose}
            className="me-2"
          >
            Cancel
          </Button>
         
        </div>
      </Modal.Body>
    </Modal>
  );
}



export default ShowModal;
