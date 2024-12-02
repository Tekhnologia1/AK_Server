import React, { useEffect, useState } from "react";
import { Table, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import SearchBox from "../../../commancomponet/Searchbox";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "./orderProductsDetails";
import "./placeOrder.css";
import { saveRepeat } from "../../store/placeOrderSlice";
import { useNavigate } from "react-router-dom";
import { fetchCafes } from "../../store/cafeSlice";
import Pagination1 from "../../../commancomponet/Pagination1";
import { isMobileView, tableDateFormat } from "../../../Utils/utils";
import { fetchOrders } from "../../store/orderSlice";
import SearchDropdown from "../../../commancomponet/SearchDropdown";
import { MdRepeat } from "react-icons/md";
import { PiEyeBold, PiRepeatBold } from "react-icons/pi";

const OrderList = ({ orderData, setOrderData, formData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State from Redux
  const cafes = useSelector((state) => state.cafes.cafes);
  const orders = useSelector((state) => state.orders.orders);

  // Local State
  const [formData1, setFormData1] = useState({ ...formData, cafeId: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageOrders, setPageOrders] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const pageSize = 10;

  // Fetch orders and cafes on mount
  useEffect(() => {
    dispatch(fetchCafes());
    dispatch(fetchOrders());
  }, [dispatch]);

  // Update filtered and paginated data when relevant state changes
  useEffect(() => {
    const filteredOrders = orders.filter((order) =>
      order.order_number?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pages = Math.ceil(filteredOrders.length / pageSize);
    setTotalPages(pages);

    if (currentPage > pages) {
      setCurrentPage(1);
    }

    setPageOrders(
      filteredOrders.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    );
  }, [orders, searchTerm, currentPage]);

  // Handle changes in search and dropdown
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "cafeId") {
      const filteredOrders = value
        ? orders.filter((order) => order.cafe_id === value)
        : orders;
      setPageOrders(filteredOrders.slice(0, pageSize));
      setCurrentPage(1);
      setTotalPages(Math.ceil(filteredOrders.length / pageSize));
    }
  };

  const handleOrder = (item) => {
    dispatch(
      saveRepeat({
        data: {
          cafeId: item.cafe_id,
          routeId: item.route_id,
          orderDate: formData.orderDate,
          paymentTerm: item.payment_terms_id,
          paymentStatus: item.payment_status,
          note: item.note,
          orderNumber: "",
          deliveryCharges: item.delivery_charges,
        },
        products: item.products,
        cafe: cafes.find((cafe) => cafe.cafe_id === item.cafe_id),
      })
    );
    navigate("/adminpanel/order/paymentcheckout");
  };

  // Dropdown options
  const cafeList = [
    { label: "All Cafes", option: "" },
    ...cafes.map((cafe) => ({
      label: cafe.cafe_name,
      option: cafe.cafe_id,
    })),
  ];

  // Table columns
  const columns = [
    "Order",
    "Order Date",
    "Cafe Name",
    "Total",
    // "Order Status",
    "Action",
  ];

  return (
    <>
      <div className="pt-5">
        <div className="row justify-content-between gy-3">
          <div className="col-lg-4 ">
            <SearchDropdown
              name="cafeId"
              placeholder="Cafe Name"
              isSearchable={true}
              options={cafeList}
              onChange={handleChange}
              value={formData1.cafeId}
              className="p-0"
            />
          </div>

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
                <th
                  key={index}
                  style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageOrders.length > 0 ? (
              pageOrders.map((item) => (
                <tr key={item.cafe_order_id} className="text-center">
                  <td>{item.order_number}</td>
                  <td>{tableDateFormat(item?.order_date.split("T")[0])}</td>
                  <td>{item.cafe_name}</td>
                  <td>{item.total_amount}</td>
                  {/* <td>{"Completed"}</td> */}
                  <td className="d-flex justify-content-center gap-2">
                    {isMobileView() ?
                      <button className="icon_blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDetails(true);
                          setOrderDetails(item.products);
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
                            setOrderDetails(item.products);
                          }}
                        >
                          <PiEyeBold />
                        </button>
                      </OverlayTrigger>}
                    {isMobileView() ?
                      <button className="icon_purple"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOrder(item);
                        }}
                      >
                        <PiRepeatBold />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">Repeat Order</Tooltip>
                        }
                      >
                        <button className="icon_purple"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOrder(item);
                          }}>
                          <PiRepeatBold />
                        </button>
                      </OverlayTrigger>}
                  </td>
                  {/* <td>
                    {isMobileView() ?
                      <FaRegEye
                        className="me-2"
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDetails(true);
                          setOrderDetails(item.products);
                        }}
                      />
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">View</Tooltip>
                        }
                      >
                        <span>
                          <FaRegEye
                            className="me-2"
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowDetails(true);
                              setOrderDetails(item.products);
                            }}
                          />
                        </span>
                      </OverlayTrigger>}

                    {isMobileView() ?
                    <MdRepeat
                    className="me-2"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOrder(item);
                    }}
                  />
                  : <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-bottom">Repeat Order</Tooltip>
                      }
                    >
                      <span>
                        <MdRepeat
                          className="me-2"
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOrder(item);
                          }}
                        />
                      </span>
                    </OverlayTrigger>}
                  </td> */}
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
        {totalPages > 1 && (
          <Pagination1
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
      <ProductModal
        showModal={showDetails}
        data={orderDetails}
        handleCloseModal={() => {
          setShowDetails(false);
        }}
      />
    </>
  );
};

export default OrderList;
