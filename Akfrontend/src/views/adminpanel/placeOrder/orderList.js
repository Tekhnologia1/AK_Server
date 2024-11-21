import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";
import SearchBox from "../../../commancomponet/Searchbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/orderSlice";
import ProductModal from "./orderProductsDetails";
import './placeOrder.css';
import { saveRepeat } from "../../store/placeOrderSlice";
import { useNavigate } from "react-router-dom";
import { fetchCafes } from "../../store/cafeSlice";
import Pagination1 from "../../../commancomponet/Pagination1";
import { CListGroup } from "@coreui/react";

const OrderList = ({ orderData, setOrderData, formData }) => {
    const columns = [
        "#",
        "Order",
        "Order Date",
        "Cafe Name",
        "Total",
        "Order Status",
        "View"
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pageOrders, setPageOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    const pageSize = 10;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cafes = useSelector((state) => state.cafes.cafes);

    // useEffect(() => {
    //     const filteredOrders = orderData.filter((order) =>
    //         order.order_number?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    //     );
    //     setPageOrders(filteredOrders);
    //     setCurrentPage(1)
    // }, [orderData, currentPage, searchTerm])

    useEffect(() => {
        // dispatch(fetchOrders());
        dispatch(fetchCafes())
    }, [dispatch]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleOrder = () => {
        if (selectedOrder) {
            // console.log(cafes)
            // console.log(cafes.find(cafe => cafe.cafe_id === formData.cafeId));


            console.log("selectedOrder",selectedOrder)
            dispatch(saveRepeat({
                data: {
                    cafeId: formData.cafeId,
                    routeId: selectedOrder.route_id,
                    orderDate: formData.orderDate,
                    paymentTerm: selectedOrder.payment_terms_id,
                    paymentStatus: selectedOrder.payment_status,
                    note: selectedOrder.note,
                    orderNumber: ``
                },
                products: selectedOrder.products,
                cafe: cafes.find(cafe => cafe.cafe_id === formData.cafeId)
            }));
            navigate('/adminpanel/order/home');
        } else {

        }
    }

    useEffect(() => {
        const filteredOrders = orderData.filter((order) =>
            order.order_number?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
        );
    
        const pages = Math.ceil(filteredOrders.length / pageSize);
        setTotalPages(Math.ceil(filteredOrders.length / pageSize));
        if(currentPage > pages){
            setCurrentPage(1);
        }
        setPageOrders(
          filteredOrders.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )
        );
      }, [orderData, currentPage, searchTerm])

    const handleData = (item) => {
        console.log(item)
        setOrderData({
            cafeId: item.cafe_id,
            orderDate: new Date(),
        });
        setSelectedOrder(item);
    }

    return (
        <>
            <div className="pt-5">
                <div className="row justify-content-end">
                    <div className="col-lg-4">
                        <SearchBox
                            placeholder="Search by Order No."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>

            <div className="pt-4 order_list">
                <Table responsive="sm">
                    <thead>
                        <tr className="text-center">
                            {columns.map((column, index) => (
                                <th key={index} style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}>
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {pageOrders.length > 0 ? (
                            pageOrders.map((item, rowIndex) => (
                                <tr key={item.cafe_order_id}
                                    className="text-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => { handleData(item) }}>
                                    <td
                                        style={{ background: item.cafe_order_id === selectedOrder?.cafe_order_id ? "rgb(255, 244, 208, 0.3)" : "" }}
                                    >{rowIndex + 1 + (currentPage - 1) * pageSize}</td>
                                    <td style={{ background: item.cafe_order_id === selectedOrder?.cafe_order_id ? "rgb(255, 244, 208, 0.3)" : "" }}>{item.order_number}</td>
                                    <td style={{ background: item.cafe_order_id === selectedOrder?.cafe_order_id ? "rgb(255, 244, 208, 0.3)" : "" }}>{item?.order_date.split("T")[0]}</td>
                                    <td style={{ background: item.cafe_order_id === selectedOrder?.cafe_order_id ? "rgb(255, 244, 208, 0.3)" : "" }}>{item.cafe_name}</td>
                                    <td style={{ background: item.cafe_order_id === selectedOrder?.cafe_order_id ? "rgb(255, 244, 208, 0.3)" : "" }}>{item.total_amount}</td>
                                    <td style={{ background: item.cafe_order_id === selectedOrder?.cafe_order_id ? "rgb(255, 244, 208, 0.3)" : "" }}>{"Completed"}</td>
                                    <td style={{ background: item.cafe_order_id === selectedOrder?.cafe_order_id ? "rgb(255, 244, 208, 0.3)" : "" }}>
                                        <Button variant="" size="sm" className="me-2" onClick={(e) => { e.stopPropagation(); setShowDetails(true); setOrderDetails(item.products) }}>
                                            <FaEye />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center">
                                    Data not found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                {totalPages > 1 && <Pagination1
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />}
                <div className="text-center">
                    <Button disabled={!selectedOrder} className="btn-brown mt-3" onClick={handleOrder}>Place Order</Button>
                </div>
            </div>
            <ProductModal showModal={showDetails} data={orderDetails} handleCloseModal={() => { setShowDetails(false) }} />
        </>
    )
}

export default OrderList;