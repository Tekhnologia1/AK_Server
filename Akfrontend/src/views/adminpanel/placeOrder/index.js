import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './placeOrder.css';
import NewOrder from "./newOrder";
import OrderList from "./orderList";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DateInputs from "../../../commancomponet/DateInput";
import { fetchCafes } from "../../store/cafeSlice";
import { fetchOrders } from "../../store/orderSlice";
import Backpage from "../../../commancomponet/Backpage";
import CommanButton from "../../../commancomponet/CommanButton";
import { useNavigate } from "react-router-dom";

const MemoizedBackpage = React.memo(Backpage);

function Orderplace() {
    const navigate=useNavigate()
    const cafes = useSelector((state) => state.cafes.cafes);
    const [orderType, setOrderType] = useState('New');
    const { data } = useSelector((state) => state.placeOrder);
    const orders = useSelector((state) => state.orders.orders);
    const [listData, setListData] = useState([]);
    const [formData, setFormData] = useState({
        cafeId: null,
        orderDate: new Date()
    })
    const dispatch = useDispatch();

    const cafeList = [
        { label: "All", option: "" }, 
        ...cafes.map((cafedata) => ({
            label: cafedata.cafe_name,
            option: cafedata.cafe_id,
        }))
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === 'cafeId') {
            if (value !== '') {
                const d = orders.filter(order => order.cafe_id === formData.cafeId);
                setListData(d);
            } else {
                setListData(orders)
            }
        }
    };

    const getOrders = async () => {
        await dispatch(fetchOrders());
        setFormData({ ...formData, cafeId: '' })
    }

    useEffect(() => {
        dispatch(fetchCafes());
        getOrders();
    }, [])

    useEffect(() => {
        if (formData.cafeId !== '') {
            const d = orders.filter(order => order.cafe_id === formData.cafeId);
            setListData(d);
        } else {
            setListData(orders)
        }
    }, [formData.cafeId])

    return (
        <div className="p-lg-5 p-3">
            <div className="d-md-flex justify-content-between mb-2">
                <MemoizedBackpage
                    mainPage="Admin Panel"
                    mainPagePath="/adminpanel"
                    currentPage="Order"
                />
                <div>
                    
                <CommanButton
          label={"Order History"}
          variant="#7B3F0080"
          className="mb-3 ps-4 pe-4"
          style={{ borderRadius: "5px" }}
          onClick={()=>{navigate('/adminpanel/order/history')}
          }
        />


                    {/* <NavLink to={'/adminpanel/order/history'} className={'link_btn'}>Order History</NavLink> */}
                </div>
            </div>

            <div>
                <div className="">
                    <div className="row m-0 form_container pb-3">
                        <div className="col-lg-12 p-4 ">
                            <div className="pb-4 d-flex justify-content-center toggler_cont">
                                <ButtonGroup className="toggle-group">
                                    <Button
                                        className={`toggle-button ${orderType === "New" ? "active" : "outline-btn"
                                            }`}
                                        onClick={() => { setOrderType("New"); setFormData({ ...formData, cafeId: '' }) }}
                                    >
                                        New Order
                                    </Button>
                                    <Button
                                        className={`toggle-button ${orderType === "Repeat" ? "active" : "outline-btn"
                                            }`}
                                        onClick={() => setOrderType("Repeat")}
                                    >
                                        Repeat Order
                                    </Button>
                                </ButtonGroup>
                            </div>
                            {
                                orderType === "Repeat" ?
                                    <div className="row m-0 justify-content-center">
                                        {/* <div className="col-lg-4 gy-4">
                                            <label className="pb-2" style={{color:"#7B3F00"}}>Filter the data</label>
                                            <SearchDropdown
                                                name={"cafeId"}
                                                placeholder="Cafe Name"
                                                isSearchabel={true}
                                                options={cafeList}
                                                onChange={handleChange}
                                                value={formData.cafeId}
                                                className={"p-1"} />
                                        </div> */}

                                        <div className="col-lg-4 gy-4 ">
                                        <label className="pb-2" style={{color:"#7B3F00"}}>Enter the date</label>

                                            <DateInputs                                          
                                                value={formData.orderDate}
                                                onChange={handleChange}
                                                placeholder="Date"
                                                name="orderDate"
                                            />
                                        </div>

                                    </div>
                                    :
                                    <NewOrder />
                            }
                        </div>
                    </div>
                    {
                        orderType === "Repeat" &&
                        <OrderList orderData={listData} setOrderData={setFormData} formData={formData} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Orderplace;
