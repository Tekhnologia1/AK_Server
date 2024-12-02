import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsExclamationCircle } from "react-icons/bs";
import "./logout.css";
import { useNavigate } from "react-router-dom";
function LogoutConfirmation({ show, setShow }) {
  const navigate = useNavigate();
  //const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    // Handle logout logic here
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/login"); // Redirect to login page
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center p-4">
          <div className="mb-3">
            <BsExclamationCircle size={40} color="#a0522d" />
          </div>
          <h5 className="mb-3">Are you leaving?</h5>
          <p>
            Are you sure want to log out? All your unsaved data should be lost.
          </p>
          <div className="d-flex justify-content-end mt-4">
            <Button
              variant="outline-light"
              onClick={handleClose}
              className="me-2"
            >
              Cancel
            </Button>
            <Button
              variant="warning"
              onClick={handleLogout}
              className="text-white"
            >
              Yes <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LogoutConfirmation;
