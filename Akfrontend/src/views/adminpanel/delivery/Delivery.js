import React, { useEffect, useState } from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import SearchBox from "../../../commancomponet/Searchbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, updateOrderStatus } from "../../store/orderSlice";
import SearchDropdown from "../../../commancomponet/SearchDropdown";
import ProductModal from "../placeOrder/orderProductsDetails";
import Pagination1 from "../../../commancomponet/Pagination1";
import Backpage from "../../../commancomponet/Backpage";
import { fetchRoutes } from "../../store/routeSlice";
import StepProgressBar from "../../../commancomponet/Progressbar";
import { FaEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import DateInputs from "../../../commancomponet/DateInput";
import './delivery.css';
import { formatDate, isMobileView } from "../../../Utils/utils";
import { PiEyeBold } from "react-icons/pi";
const MemoizedBackpage = React.memo(Backpage);

const Delivery = () => {
  const columns = [
    "Order No.",
    "Cafe Name",
    "No. of product",
    "Total Amount",
    "Payment Status",
    "Delivery Status",
    "Action"
  ];

  const orders = useSelector((state) => state.orders.orders);
  const route = useSelector((state) => state.routes.routes);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [pageOrders, setPageOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState("")
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(0);
  const [orderDate, setOrderDate] = useState(new Date());
  const pageSize = 10;
  const dispatch = useDispatch();

  const routeList = [
    { label: "All Routes", option: "" },
    ...route.map((routes) => ({
      label: routes.route_name,
      option: routes.routes_id,
    }))
  ];

  const setStepData = (sortedOrders) => {
    const stepsData = sortedOrders.map(order => ({
      cafe_order_id: order.cafe_order_id || "",
      cafe_name: order.cafe_name || "",
      address: order.address || "",
      order_number: order.order_number || "",
      delivery_status: order?.delivery_status ? order.delivery_status : 0
    }));
    setSteps(stepsData);
  }

  useEffect(() => {
    setPageOrders(orders);
    setStepData(orders)
  }, [orders])

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchRoutes());
  }, [dispatch]);

  useEffect(() => {
    setPageOrders(filterOrders())
  }, [orders, currentPage, selectedRoute, orderDate, searchTerm])

  function filterOrders() {
    let filteredOrders = orders;

    //filter by route
    if (selectedRoute !== "") {
      filteredOrders = filteredOrders.filter(obj =>
        obj.route_id === selectedRoute
      );
    }

    // Filter by search term if it is not empty
    if (searchTerm.trim() !== "") {
      filteredOrders = filteredOrders.filter((order) =>
        order.order_number?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
      );
      console.log("search ",filteredOrders)
    }

    // Filter by selected date if it is not empty

    if (orderDate) {
      filteredOrders = filteredOrders.filter(order => {
        const sel = new Date(order.order_date);
        return formatDate(sel) === formatDate(orderDate);
      });
    }

    // Implement pagination
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setTotalPages(Math.ceil(filteredOrders.length / pageSize))

    //set steps for progressbar
    setStepData(filteredOrders);

    console.log("filtered orders ", filteredOrders.slice(startIndex, endIndex))
    return filteredOrders.slice(startIndex, endIndex);
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleChange = (e) => {
    setSearchTerm("")
    if (e.target.value === "") {
      setPageOrders(orders);
    } else {
      const routeOrders = orders.filter((order) =>
        order.route_id === e.target.value
      );
      setPageOrders(routeOrders)
    }
    setSelectedRoute(e.target.value);
    setCurrentPage(1)
  };

  const handleStepClicked = (value) => {
    setCurrentStep(value);
    if (value > completedStep) {
      setCompletedStep(value - 1);
    }
  };

  const updateStatus = (name, item, value) => {
    const updatedData = {
      "payment_status": name === "payment_status" ? value : item.payment_status,
      "delivery_status": name === "delivery_status" ? value : item.delivery_status
    }
    dispatch(updateOrderStatus({ updatedData, id: item.cafe_order_id }))
  }

  const dateFilter = (e) => {
    setOrderDate(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div className=" p-lg-5 p-3 pt-lg-2 order_delivery">
      <MemoizedBackpage
        mainPage="Admin Panel"
        mainPagePath="/adminpanel"
        currentPage="Delivery"
      />
      {steps.length > 0 && <StepProgressBar
        steps={steps}
        currentStep={currentStep}
        completedStep={completedStep}
        disableNavigation={false}
        handleStepClicked={handleStepClicked}
      />}
      <div className=" pt-4">
        <div className="row justify-content-end">
          <div className="col-lg-2 gy-4 gy-lg-2">
            <SearchDropdown
              name={"route"}
              placeholder="Route"
              isSearchabel={true}
              options={routeList}
              onChange={handleChange}
              value={selectedRoute}
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
              placeholder="Search By Order No"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      {/* <div className=" pt-4">
        <div className="row justify-content-end">

          <div className="col-lg-2 gy-4 gy-lg-2">
            <SearchDropdown
              name={"route"}
              placeholder="Route"
              isSearchabel={true}
              options={routeList}
              onChange={handleChange}
              value={selectedRoute}
              className={"p-0"} />
          </div>
          <div className="col-lg-4 gy-4 gy-lg-2">
            <SearchBox
              placeholder="Search By Order No"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div> */}

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
                  <td>{item?.products.length}</td>
                  <td>{item.total_amount}</td>
                  <td style={{ color: item.payment_status === 1 ? "green" : "red" }}>
                    {item.payment_status === 1 ? <>
                      Done
                      <span style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => { updateStatus("payment_status", item, 0) }}>&#x2713;</span>
                    </> : <>
                      Pending
                      <MdClose style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => { updateStatus("payment_status", item, 1) }} />
                    </>}
                  </td>
                  <td style={{ color: item.delivery_status === 1 ? "green" : "red" }}>
                    {item.delivery_status === 1 ? <>
                      Completed
                      <span style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => { updateStatus("delivery_status", item, 0) }}>&#x2713;</span>
                    </> : <>
                      Pending
                      <MdClose style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => { updateStatus("delivery_status", item, 1) }} />
                    </>}
                  </td>
                  <td className="text-center">
                  {isMobileView() ?
                      <button className="icon_blue m-auto"
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
                        <button className="icon_blue m-auto"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDetails(true);
                            setSelectedOrder(item);
                          }}
                        >
                          <PiEyeBold />
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
      <ProductModal showModal={showDetails} data={selectedOrder?.products} handleCloseModal={() => { setShowDetails(false) }} />
    </div>
  )
}

export default Delivery;
