import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import placeorderBox from "../../../assets/images/delivery package boxes.png";
import "./placeOrder.css";
import { useNavigate } from "react-router-dom";
 
function PlaceOrderConfirmation({ show, setShow, id }) {
  const navigate = useNavigate();
  //   const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleLogout = () => {
    navigate("/adminpanel"); // Redirect to login page
    handleClose();
  };
 
  return (
    <>
      <Modal show={show} onHide={handleClose} centered size="md" className="thank_order">
        <Modal.Body className="text-center p-4">
          <div className="mb-3">
            <img
              src={placeorderBox}
              style={{ height: "150px", width: "180px" }}
              color="#a0522d"
            />
          </div>
          <h5 className="mb-2 fw-normal" style={{ color: "#0E8546" }}>
            Your order has been confirmed!
          </h5>
 
          <div className="fs-3 fw-bold" style={{ color: "#7B3F00" }}>
            Thank you for your purchase!
          </div>
          <div>Your order number is <span style={{fontWeight: '500', color: '#0B0A0A'}}>{id ? id : '#1234567890'}</span></div>
          <div style={{color: '#0B0A0A'}}>You’ll get an email confirmation for your order details</div>
          <div className="d-flex justify-content-center mt-4 ">
            <Button
              className="nav_dashboard"
              variant="outline-light"
              onClick={handleLogout}
            >
              Go to Dashboard
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
 
export default PlaceOrderConfirmation;