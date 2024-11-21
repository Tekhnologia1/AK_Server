// import React, { useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import './placeOrder.css';
// import NewOrder from "./newOrder";
// import RepeatOrder from "./repeatOrder";
// import OrderList from "./orderList";
// import { Button, ButtonGroup } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import SearchDropdown from "../../../commancomponet/SearchDropdown";
// import DateInputs from "../../../commancomponet/DateInput";
// import { fetchCafes } from "../../store/cafeSlice";
// import { fetchOrders } from "../../store/orderSlice";

// function Orderplace() {
//     const navigate = useNavigate();
//     const cafes = useSelector((state) => state.cafes.cafes);
//     const [orderType, setOrderType] = useState('New');
//     const { data } = useSelector((state) => state.placeOrder);
//     const orders = useSelector((state) => state.orders.orders);
//     const [listData, setListData] = useState([]);
//     const [formData, setFormData] = useState({
//         cafeId: null,
//         orderDate: new Date()
//     })
//     const dispatch = useDispatch();

//     const cafeList = [
//         { label: "All", option: "" }, // Add this object as the first element
//         ...cafes.map((cafedata) => ({
//             label: cafedata.cafe_name,
//             option: cafedata.cafe_id,
//         }))
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//         if (name === 'cafeId') {
//             if (value !== '') {
//                 const d = orders.filter(order => order.cafe_id === formData.cafeId);
//                 setListData(d);
//             }else{
//                 setListData(orders)
//             }
//         }
//     };

//     const getOrders = async () => {
//         await dispatch(fetchOrders());
//         setFormData({...formData, cafeId: ''})
//     }

//     useEffect(() => {
//         dispatch(fetchCafes());
//         getOrders();
//     }, [])

//     useEffect(() => {
//         if (formData.cafeId !== '') {
//             const d = orders.filter(order => order.cafe_id === formData.cafeId);
//             setListData(d);
//         }else{
//             setListData(orders)
//         }
//     }, [formData.cafeId])

//     return (
//         <div className="p-lg-5 p-3">
//             <div className="pb-2 ps-2">
//                 <span
//                     onClick={() => {
//                         navigate("/adminpanel");
//                     }}
//                     style={{ color: "#7B3F00", cursor: "pointer" }}
//                     className="fs-5 fw-bold"
//                 >
//                     Adminpanel
//                 </span>
//                 <span style={{ color: "#7B3F00" }}>
//                     {" "}
//                     <FaArrowRight />
//                 </span>
//                 <span className="fs-5 fw-bold " style={{ color: "#7B3F00" }}>
//                     {" "}
//                     {orderType} order
//                 </span>
//             </div>

//             <div>
//                 <div className="">
//                     <div className="row m-0 form_container pb-3">
//                         <div className="col-lg-12 p-4 ">
//                             <div className="pb-4 d-flex justify-content-center toggler_cont">
//                                 <ButtonGroup className="toggle-group">
//                                     <Button
//                                         className={`toggle-button ${orderType === "New" ? "active" : "outline-btn"
//                                             }`}
//                                         onClick={() => {setOrderType("New"); setFormData({...formData, cafeId: ''})}}
//                                     >
//                                         New Order
//                                     </Button>
//                                     <Button
//                                         className={`toggle-button ${orderType === "Repeat" ? "active" : "outline-btn"
//                                             }`}
//                                         onClick={() => setOrderType("Repeat")}
//                                     >
//                                         Repeat Order
//                                     </Button>
//                                 </ButtonGroup>
//                             </div>
//                             {/* <div className="d-flex rounded p-2 mb-3 radio_cont">
//                                 <div className="form-check ps-1 mr-3 custom-radio">
//                                     <input
//                                         className="form-check-input"
//                                         type="radio"
//                                         name="orderType"
//                                         id="newOrder"
//                                         value="new"
//                                         checked={orderType === 'New'}
//                                         onChange={() => setOrderType('New')}
//                                     />
//                                     <label className="form-check-label" htmlFor="newOrder" style={{ color: orderType === 'New' ? '#7B3F00' : '#000000' }}>
//                                         New Order
//                                     </label>
//                                 </div>
//                                 <div className="form-check custom-radio">
//                                     <input
//                                         className="form-check-input"
//                                         type="radio"
//                                         name="orderType"
//                                         id="repeatOrder"
//                                         value="repeat"
//                                         checked={orderType === 'Repeat'}
//                                         onChange={() => setOrderType('Repeat')}
//                                     />
//                                     <label className="form-check-label" htmlFor="repeatOrder" style={{ color: orderType === 'Repeat' ? '#7B3F00' : '#000000' }}>
//                                         Repeat Order
//                                     </label>
//                                 </div>
//                             </div> */}
//                             {
//                                 orderType === "Repeat" ?
//                                     <div className="row m-0 justify-content-center">
//                                         <div className="col-lg-4 gy-4">
//                                             <SearchDropdown
//                                                 name={"cafeId"}
//                                                 placeholder="Cafe Name"
//                                                 isSearchabel={true}
//                                                 options={cafeList}
//                                                 onChange={handleChange}
//                                                 value={formData.cafeId}
//                                                 className={"p-1"} />
//                                         </div>
//                                         <div className="col-lg-4 gy-4 ">
//                                             <DateInputs
//                                                 value={formData.orderDate}
//                                                 onChange={handleChange}
//                                                 placeholder="Date"
//                                                 name="orderDate"
//                                             />
//                                         </div>

//                                     </div>
//                                     :
//                                     <NewOrder />
//                             }
//                         </div>
//                     </div>
//                     {
//                         orderType === "Repeat" &&
//                         <OrderList orderData={listData} setOrderData={setFormData} formData={formData} />
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Orderplace;
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './placeOrder.css';
import NewOrder from "./newOrder";
import RepeatOrder from "./repeatOrder";
import OrderList from "./orderList";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchDropdown from "../../../commancomponet/SearchDropdown";
import DateInputs from "../../../commancomponet/DateInput";
import { fetchCafes } from "../../store/cafeSlice";
import { fetchOrders } from "../../store/orderSlice";

function Orderplace() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Redux state
    const cafes = useSelector((state) => state.cafes.cafes || []);
    const orders = useSelector((state) => state.orders.orders || []);

    // Local state
    const [orderType, setOrderType] = useState("New");
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        cafeId: null,
        orderDate: new Date(),
    });

    // Cafe dropdown options
    const cafeList = [
        { label: "All", option: "" }, // Default option
        ...cafes.map((cafedata) => ({
            label: cafedata.cafe_name,
            option: cafedata.cafe_id,
        })),
    ];

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "cafeId") {
            if (value !== "") {
                const filteredOrders = orders.filter(
                    (order) => order.cafe_id === value
                );
                setListData(filteredOrders);
            } else {
                setListData(orders);
            }
        }
    };

    // Fetch orders and initialize formData
    const getOrders = async () => {
        await dispatch(fetchOrders());
        setFormData({ ...formData, cafeId: "" });
    };

    // Fetch cafes and orders on component mount
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchCafes());
            await getOrders();
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);

    // Update listData when cafeId changes
    useEffect(() => {
        if (formData.cafeId !== "") {
            const filteredOrders = orders.filter(
                (order) => order.cafe_id === formData.cafeId
            );
            setListData(filteredOrders);
        } else {
            setListData(orders);
        }
    }, [formData.cafeId, orders]);

    // Show loading while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-lg-5 p-3">
            <div className="pb-2 ps-2">
                <span
                    onClick={() => navigate("/adminpanel")}
                    style={{ color: "#7B3F00", cursor: "pointer" }}
                    className="fs-5 fw-bold"
                >
                    Adminpanel
                </span>
                <span style={{ color: "#7B3F00" }}>
                    {" "}
                    <FaArrowRight />
                </span>
                <span className="fs-5 fw-bold" style={{ color: "#7B3F00" }}>
                    {" "}
                    {orderType} order
                </span>
            </div>

            <div>
                <div className="row m-0 form_container pb-3">
                    <div className="col-lg-12 p-4">
                        <div className="pb-4 d-flex justify-content-center toggler_cont">
                            <ButtonGroup className="toggle-group">
                                <Button
                                    className={`toggle-button ${
                                        orderType === "New"
                                            ? "active"
                                            : "outline-btn"
                                    }`}
                                    onClick={() => {
                                        setOrderType("New");
                                        setFormData({ ...formData, cafeId: "" });
                                    }}
                                >
                                    New Order
                                </Button>
                                <Button
                                    className={`toggle-button ${
                                        orderType === "Repeat"
                                            ? "active"
                                            : "outline-btn"
                                    }`}
                                    onClick={() => setOrderType("Repeat")}
                                >
                                    Repeat Order
                                </Button>
                            </ButtonGroup>
                        </div>
                        {orderType === "Repeat" ? (
                            <div className="row m-0 justify-content-center">
                                <div className="col-lg-4 gy-4">
                                    <SearchDropdown
                                        name="cafeId"
                                        placeholder="Cafe Name"
                                        isSearchable={true}
                                        options={cafeList}
                                        onChange={handleChange}
                                        value={formData.cafeId}
                                        className="p-1"
                                    />
                                </div>
                                <div className="col-lg-4 gy-4">
                                    <DateInputs
                                        value={formData.orderDate}
                                        onChange={handleChange}
                                        placeholder="Date"
                                        name="orderDate"
                                    />
                                </div>
                            </div>
                        ) : (
                            <NewOrder />
                        )}
                    </div>
                </div>
                {orderType === "Repeat" && (
                    <OrderList
                        orderData={listData}
                        setOrderData={setFormData}
                        formData={formData}
                    />
                )}
            </div>
        </div>
    );
}

export default Orderplace;
