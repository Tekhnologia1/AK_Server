
// import React from "react";
// import { useState } from "react";
// import InputBox from "../../commancomponet/InputBox";
// import CommanButton from "../../commancomponet/CommanButton";
// import Table from "react-bootstrap/Table";
// import Tablecom from "../../commancomponet/Tablecom";
// import { Button } from "react-bootstrap";
// import SelectBox from "../../commancomponet/SelectBox";
// import SearchBox from "../../commancomponet/Searchbox";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Colors } from "chart.js";

// function Enquiry() {
//   const [name, setName] = useState("");
//   const genderOptions = [
//     { label: "City", value: "" },
//     { label: "pune", value: "pune" },
//     { label: "Mumbai", value: "mumbai" },
//   ];

//   const columns = ["SR.NO.", "Employee Name", "Employee Type", "Contact No"];

//   const data = [
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//   ];

//   return (
//     <div className="p-lg-5">
//       <div className=" ">
//         <div className="row m-0 border rounded  pb-3">
//           <div className="col-lg-12 p-4 ">
//             <div className="row m-0 ">
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Address"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Area"
//                 />
//               </div>
//             </div>

//             <div className="row m-0 ">
//               <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Roue Name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="City"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Special Deal"
//                 />
//               </div>
//             </div>

//             <div className="row m-0 justify-content-center">
//             <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Cafe Deal"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Payment Term"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//             </div>


//             <div className="pt-2">
//                 <hr style={{color:'#EAA44D'}}/>
//             </div>


//             <div className="row m-0 ">
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder=" Contact Person Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Contact Person NO."
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Owner Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//             </div>



//             <div className="row m-0 ">
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder=" Owner Contact No."
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Follow Up Date."
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Product Requirments"
//                 />
//               </div>
//             </div>


//           </div>

//           <div className="d-flex justify-content-center">
//             <CommanButton
//               label="Create"
//               onClick={() => alert("Button clicked!")}
//               variant="#7B3F0080"
//               className="mb-3 ps-4 pe-4"
//               style={{ borderRadius: "5px" }}
//             />
//           </div>
//         </div>

//         <div className="pt-5">
//           <div className="row justify-content-end m-0">
//             <div className="col-lg-4">
//               <SearchBox
//                 placeholder="Type to search..."
//                 value={"searchTerm"}
//                 // onChange={handleSearchChange}
//                 // onSearch={handleSearchClick}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-4 ">
//         <Tablecom columns={columns} data={data} />
//       </div>

//       <div className=" ">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination justify-content-end">
//             <li className="page-item disabled">
//               <a className="page-link" href="#" tabIndex="-1">
//                 <FaChevronLeft /> {/* Left arrow icon */}
//               </a>
//             </li>
//             <li className="page-item ">
//               <a
//                 className="page-link text-white"
//                 style={{ backgroundColor: " #7B3F00" }}
//                 href="#"
//               >
//                 1
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 2
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 ...
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 3
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 <FaChevronRight /> {/* Right arrow icon */}
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>


//     </div>
//   );
// }

// export default Enquiry;






import React, { useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Tablecom from "../../commancomponet/Tablecom";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';  

function Enquiry() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    contactPersonName: "",
    contactPersonNo: "",
    ownerName: "",
    ownerContactNo: "",
    followUpDate: "",
    paymentTerm: "",
    area: "",
    routeName: "",
    specialDeal: "",
    cafeDeal: "",
    productRequirements: "",
  });

  const genderOptions = [
    { label: "City", value: "" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];

  const columns = ["SR.NO.", "Employee Name", "Employee Type", "Contact No"];
  const data = [
    [1, "Kothrud", "Pune", "7845120202"],
    [2, "Pune", "Pune", "7845120202"],
    [3, "Mumbai", "Mumbai", "7845120202"],
    [4, "Thane", "Thane", "7845120202"],
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-lg-5">

      <div className="pb-2">
        <span onClick={()=>{navigate('/dashboard/adminpanel')}}  style={{ color: '#7B3F00', cursor: 'pointer' }}
 className="fs-5 fw-bold">Adminpanel</span><span style={{color:'#7B3F00'}}> <FaArrowRight/></span><span className="fs-5 fw-bold " style={{color:'#7B3F00'}}> Enquiry</span>  


      </div>
      <div className="row m-0 border rounded pb-3">
        <div className="col-lg-12 p-4 ">
          <div className="row m-0 ">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                name="address"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={genderOptions}
                value={formData.city}
                onChange={handleChange}
                name="city"
                defaultValue="Area"
              />
            </div>
          </div>

          <div className="row m-0 ">
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={genderOptions}
                value={formData.routeName}
                onChange={handleChange}
                name="routeName"
                defaultValue="Route Name"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                name="city"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={genderOptions}
                value={formData.specialDeal}
                onChange={handleChange}
                name="specialDeal"
                defaultValue="Special Deal"
              />
            </div>
          </div>

          <div className="row m-0 justify-content-center">
            <div className="col-lg-4 gy-4">
              <SelectBox
                options={genderOptions}
                value={formData.cafeDeal}
                onChange={handleChange}
                name="cafeDeal"
                defaultValue="Cafe Deal"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Payment Term"
                value={formData.paymentTerm}
                onChange={handleChange}
                name="paymentTerm"
              />
            </div>
          </div>

          <div className="pt-2">
            <hr style={{ color: "#EAA44D" }} />
          </div>

          <div className="row m-0 ">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Contact Person Name"
                value={formData.contactPersonName}
                onChange={handleChange}
                name="contactPersonName"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Contact Person No."
                value={formData.contactPersonNo}
                onChange={handleChange}
                name="contactPersonNo"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Owner Name"
                value={formData.ownerName}
                onChange={handleChange}
                name="ownerName"
              />
            </div>
          </div>

          <div className="row m-0 ">
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Owner Contact No."
                value={formData.ownerContactNo}
                onChange={handleChange}
                name="ownerContactNo"
              />
            </div>
            <div className="col-lg-4 gy-4">
              <InputBox
                placeholder="Follow Up Date."
                value={formData.followUpDate}
                onChange={handleChange}
                name="followUpDate"
              />
            </div>
            <div className="col-lg-4 gy-4 ">
              <SelectBox
                options={genderOptions}
                value={formData.productRequirements}
                onChange={handleChange}
                name="productRequirements"
                defaultValue="Product Requirements"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <CommanButton
            label="Create"
            onClick={() => alert("Button clicked!")}
            variant="#7B3F0080"
            className="mb-3 ps-4 pe-4"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </div>

      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <SearchBox
              placeholder="Type to search..."
              value={"searchTerm"}
              // onChange={handleSearchChange}
              // onSearch={handleSearchClick}
            />
          </div>
        </div>
      </div>

      <div className="pt-4 ">
        <Tablecom columns={columns} data={data} />
      </div>

      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                <FaChevronLeft /> {/* Left arrow icon */}
              </a>
            </li>
            <li className="page-item ">
              <a
                className="page-link text-white"
                style={{ backgroundColor: "#7B3F00" }}
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <FaChevronRight /> {/* Right arrow icon */}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Enquiry;
