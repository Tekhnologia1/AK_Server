import React, { useEffect, useState } from "react";
import SearchDropdown from "../../../commancomponet/SearchDropdown";
import DateInputs from "../../../commancomponet/DateInput";
import Note from "../../../commancomponet/Note";
import CommanButton from "../../../commancomponet/CommanButton";
import { fetchCafes, fetchSpecialDeals } from "../../store/cafeSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/placeOrderSlice";
import { validatePlaceOrderForm } from "../../validation/Validationall";

const NewOrder = () => {

    const { data, cartProducts, cafe } = useSelector((state) => state.placeOrder);

    const paymentStatus = [
        {
            label: "Yes",
            option: 1,
        },
        {
            label: "No",
            option: 0,
        },
    ];
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cafes = useSelector((state) => state.cafes.cafes);
    const paymentTerm = useSelector((state) => state.cafes.specialDeals);
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        orderNumber: "",
        cafeId: data?.cafeId || "",
        orderDate: data?.orderDate ? new Date(data.orderDate) :new Date(),
        paymentTerm: data?.paymentTerm || "",
        totalPayment: "",
        paymentStatus: data?.paymentStatus || "",
        note: data?.note || "",
    });

    const cafeList = cafes.map((cafedata) => ({
        label: cafedata.cafe_name,
        option: cafedata.cafe_id,
    }));

    const transformedpaymentterm = paymentTerm.map((paymentterm) => ({
        label: paymentterm.name,
        option: paymentterm.payment_terms_id,
    }));

    console.log(data)

    useEffect(()=>{
        setFormData({
            orderNumber: "",
            cafeId: data?.cafeId || "",
            orderDate: data?.orderDate ? new Date(data.orderDate) :new Date(),
            paymentTerm: data?.paymentTerm || "",
            totalPayment: "",
            paymentStatus: data?.paymentStatus === 1 ? 1 : data?.paymentStatus === 0 ? 0 : "",
            note: data?.note || "",
        })
    },[data])

    useEffect(() => {
        dispatch(fetchCafes());
        dispatch(fetchSpecialDeals());
    }, [])

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validatePlaceOrderForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            const values = {
                cafeId: formData.cafeId,
                orderDate: formData.orderDate.toISOString().split('T')[0],
                paymentTerm: formData.paymentTerm,
                paymentStatus: formData.paymentStatus,
                note: formData.note,
                orderNumber: ``
            }
            const cafe = cafes.find(item => item.cafe_id === formData.cafeId)
            dispatch(setData({ values, cafe }))
            navigate('/adminpanel/order/home')
          
            setErrors({})
        } else {
            setErrors(validationErrors);
        }
    }
    return (
        <>
            <div className="row m-0">
     
                <div className="col-lg-4 gy-4">
                    <SearchDropdown
                        name={"cafeId"}
                        placeholder="Cafe Name"
                        isSearchabel={true}
                        options={cafeList}
                        onChange={handleChange}
                        value={formData.cafeId}
                    />
                    {errors.cafeId && <p className="text-danger error_text">{errors.cafeId}</p>}
                </div>
                <div className="col-lg-4 gy-4 ">
               
                    <DateInputs
                        value={formData.orderDate}
                        onChange={handleChange}
                        placeholder="Date"
                        name="orderDate"
                    />
                    {errors.orderDate && <p className="text-danger error_text">{errors.orderDate}</p>}

                </div>


                {/* <div className="col-lg-4 gy-4 ">
                    <SearchDropdown
                        name={"paymentStatus"}
                        placeholder="Payment Status"
                        isSearchabel={false}
                        options={paymentStatus}
                        onChange={handleChange}
                        value={formData.paymentStatus}
                    />
                    {errors.paymentStatus && <p className="text-danger error_text">{errors.paymentStatus}</p>}
                </div> */}

{/* 
                <div className="col-lg-4 gy-4">
                    <SearchDropdown
                        name={"paymentTerm"}
                        placeholder="Payment Term"
                        isSearchabel={false}
                        options={transformedpaymentterm}
                        onChange={handleChange}
                        value={formData.paymentTerm}
                    />
                    {errors.paymentTerm && <p className="text-danger error_text">{errors.paymentTerm}</p>}

                </div> */}


                <div className="col-lg-4 gy-3">
                    <Note
                        placeholder="Note"
                        value={formData.note}
                        onChange={(e) =>
                            handleChange({
                                target: { name: "note", value: e.target.value },
                            })
                        }
                    />
                    {errors.note && <p className="text-danger error_text">{errors.note}</p>}
                </div>

            </div>

            <div className="d-flex justify-content-center">
                <CommanButton
                    label="Select Product"
                    onClick={handleSubmit}
                    variant="#7B3F0080"
                    className="my-3 ps-4 pe-4"
                    style={{ borderRadius: "5px" }}
                />
            </div>
        </>
    )
}

export default NewOrder;