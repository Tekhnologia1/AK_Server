// import React from "react";
// import { useState } from "react";
// import InputBox from "../../commancomponet/InputBox";
// import CommanButton from "../../commancomponet/CommanButton";
// import Table from "react-bootstrap/Table";
// import Tablecom from "../../commancomponet/Tablecom";
// import { Button } from "react-bootstrap";
// import SelectBox from "../../commancomponet/SelectBox";
// import SearchBox from "../../commancomponet/Searchbox";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// function Cafe() {
//   const [name, setName] = useState("");
//   const genderOptions = [
//     { label: "City", value: "" },
//     { label: "pune", value: "pune" },
//     { label: "Mumbai", value: "mumbai" },
//   ];







//   const columns = [
//     "SR.NO.",
//     "Cafe Name",
//     "City Name",
//     "Contact Person",
//   ];


  

//   const data = [
//     [
//         1,
//       "Iranni",
//       "pune",
//       'ck'
//     ],
//     [
//         1,
//       "Iranni",
//       "pune",
//       'ck'
//     ],
//     [
//         1,
//       "Iranni",
//       "pune",
//       'ck'
//     ],
//     [
//         1,
//       "Iranni",
//       "pune",
//       'ck'
//     ],
    
//   ];

//   return (
//     <div>
//       <div className="p-lg-5 ">
//         <div className="row m-0 border rounded  pb-3">
//           <div className="col-lg-12 p-4 ">


//             <div className="row m-0 ">
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Cafe Name"
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
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Area"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//             </div>




//             <div className="row m-0 ">
//             <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Route Name"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Route City"
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


//             <div className="row m-0 justify-content-center ">
        
//               <div className="col-lg-4 gy-4 ">
//                 <SelectBox
//                   options={genderOptions}
//                   value={"gender"}
//                   // onChange={handleChange}
//                   name="gender"
//                   defaultValue="Payment Term"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Contact Person"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   name="name"
//                 />
//               </div>
//             </div>



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

//         <div className="pt-5">
//           <div className="row justify-content-end m-0">
//             <div className="col-lg-4">
//               <SearchBox
//                 placeholder="Search by Route name"
//                 value={"searchTerm"}
//                 // onChange={handleSearchChange}
//                 // onSearch={handleSearchClick}
//               />
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className="p-lg-5 ">

// <Tablecom columns={columns} data={data} />


// </div>

// <div className="pe-5 pt-0 ">
// <nav aria-label="Page navigation example">
// <ul className="pagination justify-content-end">
//   <li className="page-item disabled">
//     <a className="page-link" href="#" tabIndex="-1">
//       <FaChevronLeft /> {/* Left arrow icon */}
//     </a>
//   </li>
//   <li className="page-item "  ><a className="page-link text-white" style={{backgroundColor:' #7B3F00'}} href="#">1</a></li>
//   <li className="page-item"><a className="page-link" href="#">2</a></li>
//   <li className="page-item"><a className="page-link" href="#">...</a></li>
//   <li className="page-item"><a className="page-link" href="#">3</a></li>
//   <li className="page-item">
//     <a className="page-link" href="#">
//       <FaChevronRight /> {/* Right arrow icon */}
//     </a>
//   </li>
// </ul>
// </nav>
// </div>
//     </div>
//   );
// }

// export default Cafe;



import React, { useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Tablecom from "../../commancomponet/Tablecom";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Cafe() {
  const navigate=useNavigate()
  // Single state to hold all form data
  const [formData, setFormData] = useState({
    cafeName: "",
    address: "",
    area: "",
    contactPerson: "",
    selectedCity: "",
    selectedRoute: "",
    selectedDeal: "",
    selectedPaymentTerm: ""
  });

  const [data, setData] = useState([
    [1, "Iranni", "Pune", "CK"],
    [2, "Cafe Mocha", "Mumbai", "John"],
    // Add initial data as needed
  ]);

  const genderOptions = [
    { label: "City", value: "" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];

  const columns = ["SR.NO.", "Cafe Name", "City Name", "Contact Person"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddCafe = () => {
    const { cafeName, address, area, contactPerson, selectedCity } = formData;
    if (cafeName && address && area && contactPerson) {
      const newCafe = [
        data.length + 1,
        cafeName,
        selectedCity,
        contactPerson,
      ];
      setData([...data, newCafe]);

      // Reset form fields
      setFormData({
        cafeName: "",
        address: "",
        area: "",
        contactPerson: "",
        selectedCity: "",
        selectedRoute: "",
        selectedDeal: "",
        selectedPaymentTerm: ""
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="p-lg-5 ">

<div className="pb-2">
        <span onClick={()=>{navigate('/dashboard/adminpanel')}}  style={{ color: '#7B3F00', cursor: 'pointer' }}
 className="fs-5 fw-bold">Adminpanel</span><span style={{color:'#7B3F00'}}> <FaArrowRight/></span><span className="fs-5 fw-bold " style={{color:'#7B3F00'}}> Cafe</span>  


      </div>
      <div >
        <div className="row m-0 border rounded  pb-3">
          <div className="col-lg-12 p-4 ">
            <div className="row m-0 ">
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Cafe Name"
                  value={formData.cafeName}
                  onChange={handleChange}
                  name="cafeName"
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
                <InputBox
                  placeholder="Area"
                  value={formData.area}
                  onChange={handleChange}
                  name="area"
                />
              </div>
            </div>

            <div className="row m-0 ">
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={genderOptions}
                  value={formData.selectedCity}
                  onChange={handleChange}
                  name="selectedCity"
                  defaultValue="City"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={genderOptions}
                  value={formData.selectedRoute}
                  onChange={handleChange}
                  name="selectedRoute"
                  defaultValue="Route"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={genderOptions}
                  value={formData.selectedDeal}
                  onChange={handleChange}
                  name="selectedDeal"
                  defaultValue="Special Deal"
                />
              </div>
            </div>

            <div className="row m-0 justify-content-center ">
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={genderOptions}
                  value={formData.selectedPaymentTerm}
                  onChange={handleChange}
                  name="selectedPaymentTerm"
                  defaultValue="Payment Term"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Contact Person"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  name="contactPerson"
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <CommanButton
              label="Add"
              onClick={handleAddCafe}
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
                placeholder="Search by Route name"
                value={"searchTerm"}
                // onChange={handleSearchChange}
                // onSearch={handleSearchClick}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Tablecom columns={columns} data={data} />
      </div>

      <div className="pt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                <FaChevronLeft /> {/* Left arrow icon */}
              </a>
            </li>
            <li className="page-item "><a className="page-link text-white" style={{ backgroundColor: '#7B3F00' }} href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">...</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
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

export default Cafe;
