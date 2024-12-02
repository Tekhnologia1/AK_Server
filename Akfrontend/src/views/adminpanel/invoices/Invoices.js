import React, { useEffect, useState } from "react";
import { Table, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { PiFileArrowDownLight } from "react-icons/pi"
import { IoEyeOutline } from "react-icons/io5"
import SearchBox from "../../../commancomponet/Searchbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/orderSlice";
import SearchDropdown from "../../../commancomponet/SearchDropdown";
import { fetchCafes } from "../../store/cafeSlice";
import ProductModal from "../placeOrder/orderProductsDetails";
import Pagination1 from "../../../commancomponet/Pagination1";
import DateInputs from "../../../commancomponet/DateInput";
import Backpage from "../../../commancomponet/Backpage";
import { formatDate, isMobileView } from "../../../Utils/utils";
import DateRangeInput from "../../../commancomponet/DateRangeInput";
import './invoices.css';
import InvoiceGenerator from "../InvoicePdfGenerate";
const MemoizedBackpage = React.memo(Backpage);

const Invoices = () => {
    const columns = [
        "Invoice No.",
        "Cafe Name",
        "Invoice Date",
        "No. of product",
        "Total Amount",
        "Payment Status",
        "Action"
    ];

    const orders = useSelector((state) => state.orders.orders);
    const cafes = useSelector((state) => state.cafes.cafes);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pageOrders, setPageOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({ invoiceDate: null, orderNumber: null });
    const [orderDetails, setOrderDetails] = useState()
    const [selectedCafe, setSelectedCafe] = useState();
    const [invoiceDate, setInvoiceDate] = useState();
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
    }, [orders, currentPage, invoiceDate, selectedCafe])

    function filterOrders() {
        let filteredOrders = orders;

        // Filter by cafe name
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

        // Filter by selected date range if it is not empty
        if (invoiceDate && invoiceDate.length === 2) {
            const [startDate, endDate] = invoiceDate.map(date => new Date(date));
            filteredOrders = filteredOrders.filter(order => {
                const orderDate = new Date(order.order_date);
                return orderDate >= startDate && orderDate <= endDate;
            });
        }

        // Implement pagination
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        setTotalPages(Math.ceil(filteredOrders.length / pageSize));
        return filteredOrders.slice(startIndex, endIndex);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPageOrders(filterOrders());
        setCurrentPage(1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedOrder((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    return (
        <div className="p-5 invoices">
            <MemoizedBackpage
                mainPage="Admin Panel"
                mainPagePath="/adminpanel"
                currentPage="Invoices"
            />
            <div className="form_container pb-4">
                <div className="row m-0 justify-content-center">
                    <div className="col-lg-4 gy-4 ">
                        <DateInputs
                            value={selectedOrder?.invoiceDate}
                            onChange={handleChange}
                            placeholder="Invoice Date"
                            name="invoiceDate"
                        />
                    </div>
                    <div className="col-lg-4 gy-4">
                        <SearchDropdown
                            name={"orderNumber"}
                            placeholder="Selecet Order Number"
                            isSearchabel={true}
                            options={cafeList}
                            onChange={handleChange}
                            value={selectedOrder?.orderNumber}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-4">
                    <Button
                        onClick={() => { alert("Generate Invoice") }}
                        disabled={selectedOrder.invoiceDate === null || selectedOrder.orderNumber === null}
                        className="common_outline_btn"
                    >Generate Invoice</Button>
                </div>
            </div>

            <div className=" pt-4">
                <div className="row justify-content-end">
                    <div className="col-lg-4 gy-4 gy-lg-2">
                        <DateRangeInput
                            className='p-0'
                            value={invoiceDate}
                            onChange={(e) => { setInvoiceDate(e.value) }}
                            placeholder="Invoice Date Range"
                        />
                    </div>
                    <div className="col-lg-4 gy-4 gy-lg-2">
                        <SearchBox
                            placeholder="Search by Order No.         "
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
                                    <td style={{ color: item.payment_status === 1 ? "green" : "#379AE6" }}  >{item.payment_status === 1 ? "Done" : "Pending"}   </td>
                                    <td className="d-flex justify-content-between">
                                        {isMobileView() ?
                                            <button className="icon_blue"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowDetails(true);
                                                    setOrderDetails(item.products);
                                                }}>
                                                <IoEyeOutline
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
                                                        setOrderDetails(item);
                                                    }}>
                                                    <IoEyeOutline />
                                                </button>
                                            </OverlayTrigger>}

                                        {isMobileView() ?
                                            <button className="icon_pink"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowDetails(true);
                                                    setOrderDetails(item.products);
                                                }}>
                                                <PiFileArrowDownLight />
                                            </button>
                                            :
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip id="tooltip-bottom">Invoice</Tooltip>
                                                }
                                            >
                                                <button className="icon_pink"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setPurchase(item);
                                                        setShowInvoice(true);
                                                    }}>
                                                    <PiFileArrowDownLight />
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
            <InvoiceGenerator show={showInvoice} setShow={setShowInvoice} data={purchase} />
            <ProductModal showModal={showDetails} data={orderDetails?.products} handleCloseModal={() => { setShowDetails(false) }} />
        </div>
    )
}

export default Invoices;