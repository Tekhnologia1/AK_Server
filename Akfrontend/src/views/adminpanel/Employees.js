// import React, { useEffect, useState } from "react";
// import InputBox from "../../commancomponet/InputBox";
// import CommanButton from "../../commancomponet/CommanButton";
// import Tablecom from "../../commancomponet/Tablecom";
// import SelectBox from "../../commancomponet/SelectBox";
// import SearchBox from "../../commancomponet/Searchbox";
// import {
//   FaChevronLeft,
//   FaChevronRight,
//   FaEdit,
//   FaEllipsisV,
//   FaTrash,
// } from "react-icons/fa";
// import DateInputBox from "../../commancomponet/Dateinputbox";
// import { useDispatch, useSelector } from "react-redux";
// import { createEmployee, fetchEmployees } from "../store/employeeSlice";
// import { Button, Table } from "react-bootstrap";

// function Employees() {
//   const employee = useSelector((state) => state.employees.employees);
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     employeeName: "",
//     username: "",
//     password: "",
//     email: "",
//     contactNo: "",
//     salary: "",
//     enrollmentDate: "",
//     incrementDate: "",
//     incrementAmount: "",
//     employee_type: "",
//   });

//   // Employee type options (with integer values)
//   const employeeTypeOptions = [
//     { label: "Select Employee Type", value: 2 },
//     { label: "Permanent", value: 1 }, // Integer for permanent employees
//     { label: "Contract", value: 2 }, // Integer for contract employees
//   ];

//   const columns = [
//     "SR.NO.",
//     "Employee Name",
//     "Employee Type",
//     "Contact No",
//     "Status",
//   ];

//   // Fetch employees from the backend
//   const fetchEmployees1 = async () => {
//     dispatch(fetchEmployees());
//   };

//   useEffect(() => {
//     fetchEmployees1();
//   }, []);

//   const data = [
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//   ];

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Convert employee_type to integer if selected
//     const updatedValue = name === "employee_type" ? parseInt(value, 10) : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: updatedValue,
//     }));
//   };

//   console.log(employee)
//   // Handle form submission
//   const handlesubmit = async () => {
//     console.log(formData);

//     const value = {
//       name: formData.employeeName,
//       username: formData.username,
//       password: formData.password,
//       employee_type_id: formData.employee_type,
//       email: formData.email,
//       cell_number: formData.contactNo,
//       salary: formData.salary,
//       enrollment_datetime: formData.enrollmentDate,
//       increament_datetime: formData.incrementDate,
//       increament_amount: formData.incrementAmount,
//       created_by: "vvv",
//     };

//     await dispatch(createEmployee(value));
//     console.log();
//   };

//   return (
//     <div className="p-lg-5">
//       <div className="">
//         <div className="row m-0 border rounded pb-3">
//           <div className="col-lg-12 p-4">
//             <div className="row m-0">
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Employee Name"
//                   value={formData.employeeName}
//                   onChange={handleChange}
//                   name="employeeName"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   name="username"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   name="password"
//                 />
//               </div>
//             </div>

//             <div className="row m-0">
//               <div className="col-lg-4 gy-4">
//                 <SelectBox
//                   options={employeeTypeOptions}
//                   value={formData.employee_type}
//                   onChange={handleChange}
//                   name="employee_type"
//                   defaultValue="Employee Type"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="E-mail"
//                   value={formData.email}
//                   onChange={handleChange}
//                   name="email"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Contact No"
//                   value={formData.contactNo}
//                   onChange={handleChange}
//                   name="contactNo"
//                 />
//               </div>
//             </div>

//             <div className="row m-0">
//               <div className="col-lg-3 gy-4">
//                 <InputBox
//                   placeholder="Salary"
//                   value={formData.salary}
//                   onChange={handleChange}
//                   name="salary"
//                 />
//               </div>
//               <div className="col-lg-3 gy-4">
//                 <DateInputBox
//                   value={formData.enrollmentDate}
//                   onChange={handleChange}
//                   placeholder="Enrollment Date"
//                   name="enrollmentDate"
//                   className="my-date-input"
//                 />
//               </div>
//               <div className="col-lg-3 gy-4">
//                 <DateInputBox
//                   value={formData.incrementDate}
//                   onChange={handleChange}
//                   placeholder="Increament Date"
//                   name="incrementDate"
//                   className="my-date-input"
//                 />
//               </div>
//               <div className="col-lg-3 gy-4">
//                 <InputBox
//                   placeholder="Increment Amount"
//                   value={formData.incrementAmount}
//                   onChange={handleChange}
//                   name="incrementAmount"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="d-flex justify-content-center">
//             <CommanButton
//               label="Create"
//               variant="#7B3F0080"
//               className="mb-3 ps-4 pe-4"
//               style={{ borderRadius: "5px" }}
//               onClick={handlesubmit}
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

//       <div className="pt-4">
//         <Table responsive="sm">
//           <thead>
//             <tr className="text-center">
//               {columns.map((column, index) => (
//                 <th
//                   key={index}
//                   style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}
//                 >
//                   {column}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//           {employee.map((item, rowIndex) => (
//       <tr key={item.id} className="text-center">
//         <td>{rowIndex + 1}</td>
//         <td>{item.name}</td>
//         <td>{item.employee_type_id}</td>
//         <td>{item.cell_number}</td>
//         <td>
//           <div className="d-flex justify-content-center">
//             <Button
//               variant="outline-primary"
//               size="sm"
//               className="me-2"
//               // onClick={() => onEdit(item.employees_id)}
//             >
//               <FaEdit />
//             </Button>
//             <Button
//               variant="outline-danger"
//               size="sm"
//               className="me-2"
//               // onClick={() => onDelete(item.employees_id)}
//             >
//               <FaTrash />
//             </Button>
//             <Button
//               size="sm"
//               style={{
//                 background: 'white',
//                 border: 'none',
//                 color: 'black',
//               }}
//               // onClick={() => onMoreActions(item.employees_id)}
//             >
//               <FaEllipsisV />
//             </Button>
//           </div>
//         </td>
//       </tr>
//     ))}
//           </tbody>
//         </Table>
//       </div>

//       <div className="">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination justify-content-end">
//             <li className="page-item disabled">
//               <a className="page-link" href="#" tabIndex="-1">
//                 <FaChevronLeft />
//               </a>
//             </li>
//             <li className="page-item">
//               <a
//                 className="page-link text-white"
//                 style={{ backgroundColor: "#7B3F00" }}
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
//                 <FaChevronRight />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//     </div>
//   );
// }

// export default Employees;

// import React, { useEffect, useState } from "react";
// import InputBox from "../../commancomponet/InputBox";
// import CommanButton from "../../commancomponet/CommanButton";
// import Tablecom from "../../commancomponet/Tablecom";
// import SelectBox from "../../commancomponet/SelectBox";
// import SearchBox from "../../commancomponet/Searchbox";
// import {
//   FaArrowRight,
//   FaChevronLeft,
//   FaChevronRight,
//   FaEdit,
//   FaEllipsisV,
//   FaTrash,
// } from "react-icons/fa";
// import DateInputBox from "../../commancomponet/Dateinputbox";
// import { useDispatch, useSelector } from "react-redux";
// import { createEmployee, deleteEmployee, fetchEmployees } from "../store/employeeSlice";
// import { Button, Table } from "react-bootstrap";
// import { Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// function Employees() {
//   const employee = useSelector((state) => state.employees.employees);
//   const dispatch = useDispatch();
//   const [showFirstModal, setShowFirstModal] = useState(false);
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [deleteid, setDelete] = useState();
//   const navigate = useNavigate();

//   const handleFirstModalClose = () => setShowFirstModal(false);
//   const handleFirstModalShow = (id) => {
//     console.log(id)
//     setDelete(id)
//     console.log(deleteid)
//     setShowFirstModal(true);

//   };

//   const handleSecondModalClose = () => setShowSecondModal(false);
//   const handleSecondModalShow = () => setShowSecondModal(true);

//   const [formData, setFormData] = useState({
//     employeeName: "",
//     username: "",
//     password: "",
//     email: "",
//     contactNo: "",
//     salary: "",
//     enrollmentDate: "",
//     incrementDate: "",
//     incrementAmount: "",
//     employee_type: "",
//   });

//   // Employee type options (with integer values)
//   const employeeTypeOptions = [
//     { label: "Select Employee Type", value: 2 },
//     { label: "Permanent", value: 1 }, // Integer for permanent employees
//     { label: "Contract", value: 2 }, // Integer for contract employees
//   ];

//   const columns = [
//     "SR.NO.",
//     "Employee Name",
//     "Employee Type",
//     "Contact No",
//     "Status",
//   ];

//   // Fetch employees from the backend
//   const fetchEmployees1 = async () => {
//     dispatch(fetchEmployees());
//   };

//   useEffect(() => {
//     fetchEmployees1();
//   }, []);

//   const data = [
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//     [1, "kothrud", "pune", "7845120202"],
//   ];

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Convert employee_type to integer if selected
//     const updatedValue = name === "employee_type" ? parseInt(value, 10) : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: updatedValue,
//     }));
//   };

//   console.log(employee);
//   // Handle form submission



//   const handleDelete=()=>{
//     dispatch(deleteEmployee(deleteid))
//   }
//   const handlesubmit = async () => {
//     console.log(formData);

//     const value = {
//       name: formData.employeeName,
//       username: formData.username,
//       password: formData.password,
//       employee_type_id: formData.employee_type,
//       email: formData.email,
//       cell_number: formData.contactNo,
//       salary: formData.salary,
//       enrollment_datetime: formData.enrollmentDate,
//       increament_datetime: formData.incrementDate,
//       increament_amount: formData.incrementAmount,
//       created_by: "vvv",
//     };

//     await dispatch(createEmployee(value));
//     console.log();
//   };

//   return (
//     <div className="p-lg-5">
//       <div className="pb-2">
//         <span
//           onClick={() => {
//             navigate("/dashboard/adminpanel");
//           }}
//           style={{ color: "#7B3F00", cursor: "pointer" }}
//           className="fs-5 fw-bold"
//         >
//           Adminpanel
//         </span>
//         <span style={{ color: "#7B3F00" }}>
//           {" "}
//           <FaArrowRight />
//         </span>
//         <span className="fs-5 fw-bold " style={{ color: "#7B3F00" }}>
//           {" "}
//           Employees
//         </span>
//       </div>
//       <div className="">
//         <div className="row m-0 border rounded pb-3">
//           <div className="col-lg-12 p-4">
//             <div className="row m-0">
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Employee Name"
//                   value={formData.employeeName}
//                   onChange={handleChange}
//                   name="employeeName"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   name="username"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   name="password"
//                 />
//               </div>
//             </div>

//             <div className="row m-0">
//               <div className="col-lg-4 gy-4">
//                 <SelectBox
//                   options={employeeTypeOptions}
//                   value={formData.employee_type}
//                   onChange={handleChange}
//                   name="employee_type"
//                   defaultValue="Employee Type"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="E-mail"
//                   value={formData.email}
//                   onChange={handleChange}
//                   name="email"
//                 />
//               </div>
//               <div className="col-lg-4 gy-4">
//                 <InputBox
//                   placeholder="Contact No"
//                   value={formData.contactNo}
//                   onChange={handleChange}
//                   name="contactNo"
//                 />
//               </div>
//             </div>

//             <div className="row m-0">
//               <div className="col-lg-3 gy-4">
//                 <InputBox
//                   placeholder="Salary"
//                   value={formData.salary}
//                   onChange={handleChange}
//                   name="salary"
//                 />
//               </div>
//               <div className="col-lg-3 gy-4">
//                 <DateInputBox
//                   value={formData.enrollmentDate}
//                   onChange={handleChange}
//                   placeholder="Enrollment Date"
//                   name="enrollmentDate"
//                   className="my-date-input"
//                 />
//               </div>
//               <div className="col-lg-3 gy-4">
//                 <DateInputBox
//                   value={formData.incrementDate}
//                   onChange={handleChange}
//                   placeholder="Increament Date"
//                   name="incrementDate"
//                   className="my-date-input"
//                 />
//               </div>
//               <div className="col-lg-3 gy-4">
//                 <InputBox
//                   placeholder="Increment Amount"
//                   value={formData.incrementAmount}
//                   onChange={handleChange}
//                   name="incrementAmount"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="d-flex justify-content-center">
//             <CommanButton
//               label="Create"
//               variant="#7B3F0080"
//               className="mb-3 ps-4 pe-4"
//               style={{ borderRadius: "5px" }}
//               onClick={handlesubmit}
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

//       <div className="pt-4">
//         <Table responsive="sm">
//           <thead>
//             <tr className="text-center">
//               {columns.map((column, index) => (
//                 <th
//                   key={index}
//                   style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}
//                 >
//                   {column}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {employee.map((item, rowIndex) => (
//               <tr key={item.id} className="text-center">
//                 <td>{rowIndex + 1}</td>
//                 <td>{item.name}</td>
//                 <td>{item.employee_type_id}</td>
//                 <td>{item.cell_number}</td>
//                 <td>
//                   <div className="d-flex justify-content-center">
//                     <Button
//                       variant="outline-primary"
//                       size="sm"
//                       className="me-2"

//                       // onClick={()=>{handleFirstModalShow(item.employees_id)}}
//                     >
//                       <FaEdit />
//                     </Button>
//                     <Button
//                       variant="outline-danger"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => {
//                         handleFirstModalShow(item.employees_id);
//                       }}
//                     >
//                       {item.employees_id}
//                       <FaTrash />
//                     </Button>
//                     <Button
//                       size="sm"
//                       style={{
//                         background: "white",
//                         border: "none",
//                         color: "black",
//                       }}
//                       // onClick={() => onMoreActions(item.employees_id)}
//                     >
//                       <FaEllipsisV />
//                     </Button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <div className="">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination justify-content-end">
//             <li className="page-item disabled">
//               <a className="page-link" href="#" tabIndex="-1">
//                 <FaChevronLeft />
//               </a>
//             </li>
//             <li className="page-item">
//               <a
//                 className="page-link text-white"
//                 style={{ backgroundColor: "#7B3F00" }}
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
//                 <FaChevronRight />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <Modal show={showFirstModal} onHide={handleFirstModalClose}>
//         <div className="p-4">
//           <p className="text-center fs-5 fw-bold">Delete Employee Record</p>
//           <p className="text-center">
//             Are you sure you want to delete this employee's record? This action
//             cannot be undone.
//           </p>
//           <div className="d-flex justify-content-center pt-2">
//             <Button style={{ background: " #7B3F00" }} className="text-white" onClick={handleDelete}>
//               Delete
//             </Button>
//             <Button
//               variant="secondary"
//               className="ms-2"
//               onClick={handleFirstModalClose}
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default Employees;



import React, { useEffect, useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Tablecom from "../../commancomponet/Tablecom";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaEllipsisV,
  FaTrash,
} from "react-icons/fa";
import DateInputBox from "../../commancomponet/Dateinputbox";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, deleteEmployee, fetchEmployees } from "../store/employeeSlice";
import { Button, Table } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Employees() {
  const employee = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [deleteid, setDelete] = useState();
  const navigate = useNavigate();

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDelete(id);
    setShowFirstModal(true);
  };

  const handleSecondModalClose = () => setShowSecondModal(false);
  const handleSecondModalShow = () => setShowSecondModal(true);

  const [formData, setFormData] = useState({
    employeeName: "",
    username: "",
    password: "",
    email: "",
    contactNo: "",
    salary: "",
    enrollmentDate: "",
    incrementDate: "",
    incrementAmount: "",
    employee_type: "",
  });

  // Employee type options (with integer values)
  const employeeTypeOptions = [
    { label: "Select Employee Type", value: 2 },
    { label: "Permanent", value: 1 },
    { label: "Contract", value: 2 },
  ];

  const columns = [
    "SR.NO.",
    "Employee Name",
    "Employee Type",
    "Contact No",
    "Status",
  ];

  // Fetch employees from the backend
  const fetchEmployees1 = async () => {
    dispatch(fetchEmployees());
  };

  useEffect(() => {
    fetchEmployees1();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "employee_type" ? parseInt(value, 10) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleDelete = () => {
    if (deleteid) {
      dispatch(deleteEmployee(deleteid));
      setShowFirstModal(false);
    }
  };

  const handlesubmit = async () => {
    const value = {
      name: formData.employeeName,
      username: formData.username,
      password: formData.password,
      employee_type_id: formData.employee_type,
      email: formData.email,
      cell_number: formData.contactNo,
      salary: formData.salary,
      enrollment_datetime: formData.enrollmentDate,
      increament_datetime: formData.incrementDate,
      increament_amount: formData.incrementAmount,
      created_by: "vvv",
    };

    await dispatch(createEmployee(value));
  };

  return (
    <div className="p-lg-5">
      <div className="pb-2">
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
          Employees
        </span>
      </div>
      <div className="">
        <div className="row m-0 border rounded pb-3">
          <div className="col-lg-12 p-4">
            <div className="row m-0">
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Employee Name"
                  value={formData.employeeName}
                  onChange={handleChange}
                  name="employeeName"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>
            </div>

            <div className="row m-0">
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={employeeTypeOptions}
                  value={formData.employee_type}
                  onChange={handleChange}
                  name="employee_type"
                  defaultValue="Employee Type"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Contact No"
                  value={formData.contactNo}
                  onChange={handleChange}
                  name="contactNo"
                />
              </div>
            </div>

            <div className="row m-0">
              <div className="col-lg-3 gy-4">
                <InputBox
                  placeholder="Salary"
                  value={formData.salary}
                  onChange={handleChange}
                  name="salary"
                />
              </div>
              <div className="col-lg-3 gy-4">
                <DateInputBox
                  value={formData.enrollmentDate}
                  onChange={handleChange}
                  placeholder="Enrollment Date"
                  name="enrollmentDate"
                  className="my-date-input"
                />
              </div>
              <div className="col-lg-3 gy-4">
                <DateInputBox
                  value={formData.incrementDate}
                  onChange={handleChange}
                  placeholder="Increament Date"
                  name="incrementDate"
                  className="my-date-input"
                />
              </div>
              <div className="col-lg-3 gy-4">
                <InputBox
                  placeholder="Increment Amount"
                  value={formData.incrementAmount}
                  onChange={handleChange}
                  name="incrementAmount"
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <CommanButton
              label="Create"
              variant="#7B3F0080"
              className="mb-3 ps-4 pe-4"
              style={{ borderRadius: "5px" }}
              onClick={handlesubmit}
            />
          </div>
        </div>

        <div className="pt-5">
          <div className="row justify-content-end m-0">
            <div className="col-lg-4">
              <SearchBox
                placeholder="Type to search..."
                value={"searchTerm"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
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
            {employee.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.employee_type_id}</td>
                <td>{item.cell_number}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="me-2"
                      onClick={() => {
                        handleFirstModalShow(item.employees_id);
                      }}
                    >
                      <FaTrash />
                    </Button>
                    <Button
                      size="sm"
                      style={{
                        background: "white",
                        border: "none",
                        color: "black",
                      }}
                    >
                      <FaEllipsisV />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <span className="page-link">
                <FaChevronLeft />
              </span>
            </li>
            <li className="page-item">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <span className="page-link">
                <FaChevronRight />
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <Modal
        show={showFirstModal}
        onHide={handleFirstModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFirstModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Employees;
