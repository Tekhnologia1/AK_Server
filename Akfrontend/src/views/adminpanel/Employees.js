import React, { useEffect, useState } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
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
import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  fetchEmployeeTypes,
  updateEmployee,
} from "../store/employeeSlice";
import { Button, Table } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validateEmployeeData } from "../validation/Validationall";

function Employees() {
  const employee = useSelector((state) => state.employees.employees);
  const employeeType = useSelector((state) => state.employees.employeeTypes);

  const dispatch = useDispatch();
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [errors, setErrors] = useState({});
  const [errors1, setErrors1] = useState({});

  const [deleteid, setDelete] = useState();
  const navigate = useNavigate();

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDelete(id);
    setShowFirstModal(true);
  };

  console.log("employee", employee);
  // const handleSecondModalClose = () => setShowSecondModal(false);
  // const handleSecondModalShow = () => setShowSecondModal(true);

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

  const [formData1, setFormData1] = useState({
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
  // const employeeTypeOptions = [
  //   { label: "Permanent", value: 1 },
  //   { label: "Contract", value: 2 },
  // ];

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

    dispatch(fetchEmployeeTypes());
  };

  useEffect(() => {
    fetchEmployees1();
  }, []);

  const transformedpaymentterm = employeeType.map((employeeType) => ({
    label: employeeType.name,
    option: employeeType.employee_type_id,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "employee_type" ? parseInt(value, 10) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleDelete = async () => {
    if (deleteid) {
      await dispatch(deleteEmployee(deleteid));
      dispatch(fetchEmployees());
      setShowFirstModal(false);
    }
  };

  console.log(employee);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateEmployeeData(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
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
      dispatch(fetchEmployees());

      setFormData({
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
        setErrors({});


    } else {
      setErrors(validationErrors);
    }
  };

  const handleUpdate = async (e) => {
    const {
      employeeName,
      username,
      employee_type,
      email,
      contactNo,
      salary,
      enrollmentDate,
      incrementDate,
      incrementAmount,
      password,
    } = formData1;

    // if (
    //   !employeeName ||
    //   !username ||
    //   !employee_type ||
    //   !email ||
    //   !contactNo ||
    //   !salary ||
    //   !enrollmentDate ||
    //   !incrementDate ||
    //   !incrementAmount ||
    //   !password
    // ) {
    //   alert("Please fill in all fields.");
    //   return;
    // }

    e.preventDefault();
    const validationErrors = validateEmployeeData(formData1);
    if (Object.keys(validationErrors).length === 0) {
    const id = selectedEmployee.employees_id;
    const updatedEmployee = {
      name: employeeName,
      username: username,
      employee_type_id: employee_type,
      email: email,
      cell_number: contactNo,
      salary: salary,
      enrollment_datetime: enrollmentDate,
      increament_datetime: incrementDate,
      increament_amount: incrementAmount,
      password: password,
      updated_by: "ssa",
    };

    console.log("id", id);

    await dispatch(updateEmployee({ updatedData: updatedEmployee, id: id }));

    dispatch(fetchEmployees());

    setShowUpdateModal(false);
 } else {
      setErrors1(validationErrors);
    }
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateModalOpen = (employee) => {
    setSelectedEmployee(employee);
    console.log("object", employee);
    setFormData1({
      employeeName: employee.name,
      username: employee.username,
      password: employee.password,
      email: employee.email,
      contactNo: employee.cell_number,
      salary: employee.salary,
      enrollmentDate: employee.enrollment_datetime
        ? new Date(employee.enrollment_datetime).toISOString().split("T")[0]
        : "",
      incrementDate: employee.increament_datetime
        ? new Date(employee.increament_datetime).toISOString().split("T")[0]
        : "",
      incrementAmount: employee.increament_amount,
      employee_type: employee.employee_type_id,
    });
    setShowUpdateModal(true);
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
                <p className="text-danger">{errors.employeeName}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                />
                <p className="text-danger">{errors.username}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
                <p className="text-danger">{errors.password}</p>
              </div>
            </div>

            <div className="row m-0">
              <div className="col-lg-4 gy-4">
                <SelectBox
                  options={transformedpaymentterm}
                  value={formData.employee_type}
                  onChange={handleChange}
                  name="employee_type"
                  defaultValue="Employee Type"
                />
                <p className="text-danger">{errors.employee_type}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
                <p className="text-danger">{errors.email}</p>
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="Contact No"
                  value={formData.contactNo}
                  onChange={handleChange}
                  name="contactNo"
                />
                <p className="text-danger">{errors.contactNo}</p>
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
                <p className="text-danger">{errors.salary}</p>
              </div>
              <div className="col-lg-3 gy-4">
                <DateInputBox
                  value={formData.enrollmentDate}
                  onChange={handleChange}
                  placeholder="Enrollment Date"
                  name="enrollmentDate"
                  className="my-date-input"
                />
                <p className="text-danger">{errors.enrollmentDate}</p>
              </div>
              <div className="col-lg-3 gy-4">
                <DateInputBox
                  value={formData.incrementDate}
                  onChange={handleChange}
                  placeholder="Increament Date"
                  name="incrementDate"
                  className="my-date-input"
                />
                <p className="text-danger">{errors.incrementDate}</p>
              </div>
              <div className="col-lg-3 gy-4">
                <InputBox
                  placeholder="Increment Amount"
                  value={formData.incrementAmount}
                  onChange={handleChange}
                  name="incrementAmount"
                />
                <p className="text-danger">{errors.incrementAmount}</p>
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
              <SearchBox placeholder="Type to search..." value={"searchTerm"} />
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
                <td>{item.employee_type_name}</td>
                <td>{item.cell_number}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleUpdateModalOpen(item)}
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

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <EmployeeForm
            formData1={formData1}
            handleChange={handleChange}
            handleSubmit={handleUpdate}
            employeeTypeOptions={employeeTypeOptions}
          /> */}

          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <InputBox
                label="Employee Name"
                name="employeeName"
                value={formData1.employeeName}
                onChange={handleChange1}
                placeholder="Enter employee name"
              />
              <p className="text-danger">{errors1.employeeName}</p>

              <InputBox
                label="Username"
                name="username"
                value={formData1.username}
                onChange={handleChange1}
                placeholder="Enter username"
              />
              <p className="text-danger">{errors1.username}</p>

              <InputBox
                label="Password"
                name="password"
                type="text"
                value={formData1.password}
                onChange={handleChange1}
                placeholder="Enter password"
              />
              <p className="text-danger">{errors1.password}</p>

              <InputBox
                label="Email"
                name="email"
                value={formData1.email}
                onChange={handleChange1}
                placeholder="Enter email"
              />
              <p className="text-danger">{errors1.email}</p>

              <InputBox
                label="Contact Number"
                name="contactNo"
                value={formData1.contactNo}
                onChange={handleChange1}
                placeholder="Enter contact number"
              />
              <p className="text-danger">{errors1.contactNo}</p>

              <InputBox
                label="Salary"
                name="salary"
                value={formData1.salary}
                onChange={handleChange1}
                placeholder="Enter salary"
              />
              <p className="text-danger">{errors1.salary}</p>

              <InputBox
                label="Enrollment Date"
                name="enrollmentDate"
                type="date"
                value={formData1.enrollmentDate}
                onChange={handleChange1}
              />
              <p className="text-danger">{errors1.enrollmentDate}</p>

              <InputBox
                label="Increment Date"
                name="incrementDate"
                type="date"
                value={formData1.incrementDate}
                onChange={handleChange1}
              />
              <p className="text-danger">{errors1.incrementDate}</p>

              <InputBox
                label="Increment Amount"
                name="incrementAmount"
                value={formData1.incrementAmount}
                onChange={handleChange1}
                placeholder="Enter increment amount"
              />
              <p className="text-danger">{errors1.incrementAmount}</p>

              <SelectBox
                label="Employee Type"
                options={transformedpaymentterm}
                value={formData1.employee_type}
                onChange={handleChange}
                name="employee_type"
                defaultValue="Employee Type"
              />
              <p className="text-danger">{errors1.employee_type}</p>

              <div className="d-flex justify-content-center pt-3">
                <CommanButton
                  label="Update"
                  variant="#7B3F0080"
                  className="mb-3 ps-4 pe-4"
                  style={{ borderRadius: "5px" }}
                  onClick={handleUpdate}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Employees;
