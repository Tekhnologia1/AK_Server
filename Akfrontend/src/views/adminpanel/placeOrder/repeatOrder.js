import React, { useEffect, useState } from "react";
import SearchDropdown from "../../../commancomponet/SearchDropdown";
import DateInputs from "../../../commancomponet/DateInput";
import { fetchCafes, fetchSpecialDeals } from "../../store/cafeSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/placeOrderSlice";
import { validateRepeatOrderForm } from "../../validation/Validationall";

const RepeatOrder = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cafes = useSelector((state) => state.cafes.cafes);
    const paymentTerm = useSelector((state) => state.cafes.specialDeals);
    const [errors, setErrors] = useState({})
    // Consolidated state for all form fields
    const [formData, setFormData] = useState({
        orderNumber: "",
        cafeId: "",
        orderDate: new Date(),
        paymentTerm: "",
        totalPayment: "",
        paymentStatus: "",
        note: "",
    });
    const cafeList = [
        { label: "All", option: "" }, // Add this object as the first element
        ...cafes.map((cafedata) => ({
            label: cafedata.cafe_name,
            option: cafedata.cafe_id,
        }))
    ];

    useEffect(() => {
        dispatch(fetchCafes());
        dispatch(fetchSpecialDeals());
    }, [])

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateRepeatOrderForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            const values = {
                cafeId: formData.cafeId,
                orderDate: formData.orderDate.toISOString().split('T')[0],
                paymentTerm: formData.paymentTerm,
                paymentStatus: formData.paymentStatus,
                note: formData.note,
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

            <div className="row m-0 justify-content-center">
                <div className="col-lg-4 gy-4">
                    <SearchDropdown
                        name={"cafeId"}
                        placeholder="Cafe Name"
                        isSearchabel={true}
                        options={cafeList} 
                        onChange={handleChange}
                        value={formData.cafeId}
                        className={"p-1"} />
                </div>
                <div className="col-lg-4 gy-4 ">
     
                    <DateInputs
                        // label={"Enter the date"}
                        value={formData.orderDate}
                        onChange={handleChange}
                        placeholder="Date"
                        name="orderDate"
                    />
                    {errors.orderDate && <p className="text-danger error_text">{errors.orderDate}</p>}
                </div>

                <div className="col-lg-4 gy-4 ">
     {errors.orderDate && <p className="text-danger error_text">{errors.orderDate}</p>}
 </div>


{/* 
<div className="col-lg-4 gy-4">
  <label htmlFor="orderDate" className="form-label">
    Enter the date
  </label>
  <DateInputs
    id="orderDate"
    label={"Enter the date"}
    value={formData.orderDate}
    onChange={handleChange}
    placeholder="Date"
    name="orderDate"
  />
  {errors.orderDate && <p className="text-danger error_text">{errors.orderDate}</p>}
</div> */}


            </div>
        </>
    )
}

export default RepeatOrder;