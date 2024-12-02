import React from "react";
import { Modal } from "react-bootstrap";
import proImage from "../../../assets/images/doughnut.jpeg"
import "./placeOrder.css";

const ProductModal = ({ showModal, handleCloseModal, data }) => {
    
    const orders = data ? data : [];
    
    return (
        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
            onHide={handleCloseModal}
            className="order_details"
        >
            <Modal.Header>
                <Modal.Title>Your Order Details:</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">

                <div className="container p-0 mt-4">
                    <table className="table order_table">
                        <thead className="thead-light">
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="name_column">
                                        <img
                                            src={proImage} // Replace with your image path
                                            alt={order.name}
                                            // style={{ width: '50px', marginRight: '10px' }}
                                        />
                                        <p>{order.name}</p>
                                        </div>
                                    </td>
                                    <td>{order.quantity.toString().padStart(2, '0')}</td>
                                    {/* <td>{order.date}</td> */}
                                    <td>₹ {order.rate}</td>
                                    <td>₹ {order.sub_total_amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </Modal.Body>
            {/* <Modal.Footer>
              <CommanButton
                label="Add to Cart"
                onClick={() => alert("Button clicked!")}
                variant="#7B3F0080"
                className="mb-3 ps-4 pe-4 w-100"
                style={{ borderRadius: "5px" }}
              />
            </Modal.Footer> */}
        </Modal>
    )
}

export default ProductModal;