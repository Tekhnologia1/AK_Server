import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import proImage from "../../../assets/images/doughnut.jpeg"
import "./history.css";
import { FaFilePowerpoint } from "react-icons/fa";
import PurchaseGenerator from "./purchaseOrder";
import { countItems } from "../../../Utils/utils";

const DetailModal = ({ showModal, handleCloseModal, data }) => {
    const orders = data?.products ? data.products : [];
    const [showPurchase, setShowPurchase] = useState(false);

    return (
        <>
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
                onHide={handleCloseModal}
                className="order_pro"
            >
                <Modal.Header>
                    <Modal.Title>Your Order Details:</Modal.Title>
                    <Button className="download_btn me-2" onClick={() => { setShowPurchase(true) }}><FaFilePowerpoint /> <span>Purchase Order</span></Button>
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
                                        <td>₹ {order.rate}</td>
                                        <td>₹ {order.sub_total_amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className="total_items_text">You have total {countItems(data?.products)} No. of Items !</p>
                    </div>
                </Modal.Body>
            </Modal>
            <PurchaseGenerator show={showPurchase} setShow={setShowPurchase} data={data} />
        </>
    )
}

export default DetailModal;