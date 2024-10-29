// import React from "react";
// import { useState } from "react";
// import InputBox from "../../commancomponet/InputBox";
// import CommanButton from "../../commancomponet/CommanButton";
// import Table from "react-bootstrap/Table";
// import Tablecom from "../../commancomponet/Tablecom";
// import { Button } from "react-bootstrap";
// import SelectBox from "../../commancomponet/SelectBox";
// import SearchBox from "../../commancomponet/Searchbox";

// import Note from "../../commancomponet/Note";
// function Orderplace() {
//   const [name, setName] = useState("");
//   const genderOptions = [
//     { label: "City", value: "male" },
//     { label: "Female", value: "female" },
//     { label: "Other", value: "other" },
//   ];

//   return (
//     <div>
//       <div className="p-lg-5 ">
//         <div className="row m-0 border rounded pb-3">
//           <div className="col-lg-12 p-4 ">
//             <div className="row m-0 justify-content-center">
//               <div className="col-lg-8 bg-dark"></div>
//             </div>
//             <div className="row m-0 ">
//               <div className="col-lg-4 gy-5">
//                 <InputBox
//                   placeholder="Order Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-5">
//                 <SelectBox
//                   defaultValue="Cafe Name"
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                 />
//               </div>
//               <div className="col-lg-4 gy-5 ">
//                 <SelectBox
//                   defaultValue="City"
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                 />
//               </div>
//             </div>

//             <div className="row m-0 ">
//               <div className="col-lg-4 gy-5">
//                 <InputBox
//                   placeholder="Payment Term"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-5">
//                 <SelectBox
//                   defaultValue="Total Payment"
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                 />
//               </div>
//               <div className="col-lg-4 gy-5 ">
//                 <SelectBox
//                   defaultValue="Payment Status"
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                 />
//               </div>
//             </div>

//             <div className="row m-0 justify-content-center pt-4">
//             <div className="col-lg-10">
//               <Note
//                 placeholder="Note"
//               />
//             </div>
//           </div>

//           </div>

//           <div className="d-flex justify-content-center">
//             <CommanButton
//               label="Add"
//               onClick={() => alert("Button clicked!")}
//               variant="#7B3F0080"
//               className="mb-3 ps-4 pe-4"
//               style={{ borderRadius: "5px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Orderplace;

import React, { useEffect, useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import SelectBox from "../../commancomponet/SelectBox";
import Note from "../../commancomponet/Note";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DateInputBox from "../../commancomponet/Dateinputbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../store/routeSlice";

function Orderplace() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const cities = useSelector((state) => state.areas.cities);

  // Consolidated state for all form fields
  const [formData, setFormData] = useState({
    orderName: "",
    cafeName: "",
    orderDate: "",
    paymentTerm: "",
    totalPayment: "",
    paymentStatus: "",
    note: "",
  });


  useEffect(()=>{
    dispatch(fetchCities());
  },[])

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));

  const genderOptions = [
    { label: "Cafe Name", value: "cafe" },
    { label: "City", value: "city" },
    { label: "Payment Status", value: "status" },
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-lg-5 ">
      <div className="pb-2 ps-2">
        <span
          onClick={() => {
            navigate("/dashboard/adminpanel");
          }}
          style={{ color: "#7B3F00", cursor: "pointer" }}
          className="fs-5 fw-bold"
        >
          Adminpanel
        </span>
        <span style={{ color: "#7B3F00" }}>
          {" "}
          <FaArrowRight />
        </span>
        <span className="fs-5 fw-bold " style={{ color: "#7B3F00" }}>
          {" "}
          Place order
        </span>
      </div>

      <div>
        <div className="">
          <div className="row m-0 border rounded pb-3">
            <div className="col-lg-12 p-4 ">
              <div className="row m-0 justify-content-center">
                <div className="col-lg-8 bg-dark"></div>
              </div>
              <div className="row m-0 ">
                <div className="col-lg-4 gy-5">
                  <InputBox
                    placeholder="Order Number"
                    value={formData.orderName}
                    onChange={handleChange}
                    name="orderName"
                  />
                </div>
                <div className="col-lg-4 gy-5">
                  <SelectBox
                    defaultValue="Cafe Name"
                    options={genderOptions}
                    value={formData.cafeName}
                    onChange={handleChange}
                    name="cafeName"
                  />
                </div>
                <div className="col-lg-4 gy-5 ">
                  {/* <SelectBox
                  defaultValue="City"
                  options={genderOptions}
                  value={formData.city}
                  onChange={handleChange}
                  name="city"
                /> */}

                  <DateInputBox
                    value={formData.orderDate}
                    onChange={handleChange}
                    placeholder="Date"
                    name="orderDate"
                    className="my-date-input"
                  />
                </div>
              </div>

              <div className="row m-0 ">
                <div className="col-lg-4 gy-5">
                  <InputBox
                    placeholder="Payment Term"
                    value={formData.paymentTerm}
                    onChange={handleChange}
                    name="paymentTerm"
                  />
                </div>
                <div className="col-lg-4 gy-5">
                  <SelectBox
                    defaultValue="Total Payment"
                    options={genderOptions}
                    value={formData.totalPayment}
                    onChange={handleChange}
                    name="totalPayment"
                  />
                </div>
                <div className="col-lg-4 gy-5 ">
                  <SelectBox
                    defaultValue="Payment Status"
                    options={genderOptions}
                    value={formData.paymentStatus}
                    onChange={handleChange}
                    name="paymentStatus"
                  />
                </div>
              </div>

              <div className="row m-0 justify-content-center pt-4">
                <div className="col-lg-10">
                  <Note
                    placeholder="Note"
                    value={formData.note}
                    onChange={(e) =>
                      handleChange({
                        target: { name: "note", value: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <CommanButton
                label="Select Product"
                onClick={() => {
                  navigate("/dashboard/adminpanel/order/home");
                }}
                variant="#7B3F0080"
                className="mb-3 ps-4 pe-4"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderplace;
