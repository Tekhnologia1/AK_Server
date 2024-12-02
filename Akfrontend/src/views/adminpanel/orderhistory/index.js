import React, { useEffect, useState } from "react";
import { Table, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaArrowRight, FaEdit, FaEllipsisV, FaEye, FaDownload } from "react-icons/fa";
import SearchBox from "../../../commancomponet/Searchbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/orderSlice";
import SearchDropdown from "../../../commancomponet/SearchDropdown";
import { fetchCafes } from "../../store/cafeSlice";
import ProductModal from "../placeOrder/orderProductsDetails";
import { useNavigate } from "react-router-dom";
import Pagination1 from "../../../commancomponet/Pagination1";
import DateInputs from "../../../commancomponet/DateInput";
import "./history.css";
import PurchaseGenerator from "./purchaseOrder";
import Backpage from "../../../commancomponet/Backpage";
import InvoiceGenerator from "../InvoicePdfGenerate";
import DetailModal from "./orderDetails";
import { isMobileView } from "../../../Utils/utils";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { PiEyeBold } from "react-icons/pi";
import { TbFileDownload } from "react-icons/tb"

const MemoizedBackpage = React.memo(Backpage);

const OrderHistory = () => {
    const columns = [
        "Order No.",
        "Cafe Name",
        "Order Date",
        "No. of product",
        "Total Amount",
        "Payment Status",
        // "Invoice Status",
        "View"
    ];

    const orders = useSelector((state) => state.orders.orders);
    const cafes = useSelector((state) => state.cafes.cafes);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pageOrders, setPageOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedCafe, setSelectedCafe] = useState();
    const [orderDate, setOrderDate] = useState();
    const [showPurchase, setShowPurchase] = useState(false);
    const [showInvoice, setShowInvoice] = useState(false)
    const [purchase, setPurchase] = useState();
    const pageSize = 10;
    const dispatch = useDispatch();

    const cafeList = [
        { label: "All", option: "" },
        ...cafes.map((cafedata) => ({
            label: cafedata.cafe_name,
            option: cafedata.cafe_id,
        }))
    ];

    useEffect(() => {
        setPageOrders(orders)
        setSelectedCafe("")
    }, [orders])

    useEffect(() => {
        dispatch(fetchOrders());
        dispatch(fetchCafes())
    }, [dispatch]);

    useEffect(() => {
        setPageOrders(filterOrders())
    }, [orders, currentPage, orderDate, selectedCafe])

    function searchInObjects() {
        if (searchTerm.trim() !== "") {
            // Check that orders exist and are properly filtered
            return orders.filter(obj => {
                return Object.values(obj).some(value => {
                    console.log(value)
                    // Check if value is not null or undefined before calling toString()
                    return value != null && value.toString().toLowerCase().includes(searchTerm.toLowerCase());
                });
            });
        } else {
            // Return the original orders if search term is empty
            return orders;
        }
    }

    function filterOrders() {
        let filteredOrders = orders;

        //filter by cafe name
        if (selectedCafe !== "") {
            filteredOrders = filteredOrders.filter(obj =>
                obj.cafe_id === selectedCafe
            );
        }

        // Filter by search term if it is not empty
        if (searchTerm.trim() !== "") {
            filteredOrders = filteredOrders.filter(obj =>
                Object.values(obj).some(value =>
                    value != null && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }

        // Filter by selected date if it is not empty

        if (orderDate) {
            filteredOrders = filteredOrders.filter(order => {
                const sel = new Date(order.order_date);
                console.log("filter on date ", formatDate(sel), formatDate(orderDate))
                return formatDate(sel) === formatDate(orderDate);
            });
        }

        // Implement pagination
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        setTotalPages(Math.ceil(filteredOrders.length / pageSize))
        return filteredOrders.slice(startIndex, endIndex);

    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPageOrders(filterOrders());
        setCurrentPage(1);
    };

    const formatDate = (orderDate) => {
        const date = new Date(orderDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }

    const handleChange = (e) => {
        setSearchTerm("")
        if (e.target.value === "") {
            setPageOrders(orders);
        } else {
            const cafeOrders = orders.filter((order) =>
                order.cafe_id === e.target.value
            );
            setPageOrders(cafeOrders)
        }
        setSelectedCafe(e.target.value);
        setCurrentPage(1)
    }

    const dateFilter = (e) => {
        console.log(e.target.value.getFullYear())
        setOrderDate(e.target.value);
        // setPageOrders(filterOrders());
        setCurrentPage(1);
    }

    return (
        <div className="container order_history p-lg-5">
            <MemoizedBackpage
                mainPage="Admin Panel"
                mainPagePath="/adminpanel"
                currentPage="Order History"
            />
            <div className=" pt-4">
                <div className="row justify-content-end">

                    <div className="col-lg-2 gy-4 gy-lg-2">
                        <SearchDropdown
                            name={"cafeId"}
                            placeholder="Cafe Name"
                            isSearchabel={true}
                            options={cafeList}
                            onChange={handleChange}
                            value={selectedCafe}
                            className={"p-0"} />
                    </div>
                    <div className="col-lg-2 gy-4 gy-lg-2">
                        <DateInputs
                            value={orderDate}
                            onChange={dateFilter}
                            placeholder="Order Date" />
                    </div>
                    <div className="col-lg-4 gy-4 gy-lg-2">
                        <SearchBox
                            placeholder="Search Order"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>

            <div className="pt-5 order_list">
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
                                    className="text-center">
                                    <td>{item.order_number}</td>
                                    <td >{item.cafe_name}</td>
                                    <td>{formatDate(item?.order_date)}</td>
                                    <td>{item?.products.length}</td>
                                    <td>{item.total_amount}</td>
                                    <td style={{ color: item.payment_status === 1 ? "green" : "#379AE6" }}>{item.payment_status === 1 ? "Completed" : "Pending"}</td>
                                    {/* <td>
                                        {item.PaymentTermName}
                                        <LiaFileInvoiceDollarSolid onClick={() => { alert("Generate Invoice") }} />
                                    </td> */}
                                    <td className="d-flex justify-content-center gap-2">
                                        {isMobileView() ?
                                            <button className="icon_blue"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowDetails(true);
                                                    setSelectedOrder(item);
                                                }}
                                            >
                                                <PiEyeBold
                                                    style={{ cursor: 'pointer' }}
                                                />
                                            </button>
                                            :
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip id="tooltip-bottom">View</Tooltip>
                                                }
                                            >
                                                <button className="icon_blue"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowDetails(true);
                                                        setSelectedOrder(item);
                                                    }}
                                                >
                                                    <PiEyeBold />
                                                </button>
                                            </OverlayTrigger>}

                                        {isMobileView() ?
                                            <button className="icon_red"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowPurchase(true);
                                                    setPurchase(item);
                                                }}
                                            >
                                                <TbFileDownload />
                                            </button>
                                            :
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip id="tooltip-bottom">Purchase</Tooltip>
                                                }
                                            >
                                                <button className="icon_red"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowPurchase(true);
                                                        setPurchase(item);
                                                    }}>
                                                    <TbFileDownload />
                                                </button>
                                            </OverlayTrigger>}
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
            </div>
            {totalPages > 1 && <Pagination1
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />}
            <PurchaseGenerator show={showPurchase} setShow={setShowPurchase} data={purchase} />
            <InvoiceGenerator show={showInvoice} setShow={setShowInvoice} data={purchase} />
            <DetailModal showModal={showDetails} data={selectedOrder} handleCloseModal={() => { setShowDetails(false) }} />
        </div>
    )
}

export default OrderHistory;