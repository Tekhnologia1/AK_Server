import React from "react";
import { Button, Modal } from "react-bootstrap";

const CommonModal = ({ show, handleClose, isUpdate, component, title, message, handleConfirm }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop={isUpdate ? "static" : true}
            keyboard={false}
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            {isUpdate ?
                <Modal.Body>{component}</Modal.Body> :
                <Modal.Body>{message}</Modal.Body>}
            {!isUpdate && <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Delete
                </Button>
            </Modal.Footer>}
        </Modal>
    )
}

export default CommonModal;