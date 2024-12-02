import React, { useEffect, useState } from "react";
import SearchBox from "../../../commancomponet/Searchbox";
import {
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  fetchEmployeeTypes,
  updateEmployee,
} from "../../store/employeeSlice";
import { Button, Table, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Pagination1 from "../../../commancomponet/Pagination1";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import EmployeeForm from "./EmployeeForm";
import Backpage from "../../../commancomponet/Backpage";
import ShowModal from "../../../commancomponet/ShowModal";
import { isMobileView } from "../../../Utils/utils";
import { PiEyeBold, PiNotePencilBold, PiTrashBold } from "react-icons/pi";

function Employees() {
  const { employees, status, error } = useSelector((state) => state.employees);
  const employeeType = useSelector((state) => state.employees.employeeTypes);

  const dispatch = useDispatch();
  const [showModal1, setShowModal1] = useState(false);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [modaledata, seModaledata] = useState({});
  const [deleteid, setDelete] = useState();
  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDelete(id);
    setShowFirstModal(true);
  };


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

  const [editEmployee, setEditEmployee] = useState({
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [pageEmployees, setPageEmployees] = useState([]);
  const pageSize = 5;
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });

  const columns = [
    "SR.NO.",
    "Employee Name",
    "Employee Type",
    "Contact No",
    "Action",
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
      const result = await dispatch(deleteEmployee(deleteid));
      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchEmployees());
        setShowFirstModal(false);
        setAlert({
          show: true,
          message: "Employee Deleted!",
          varient: "success",
        });
        if (pageEmployees.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } else {
        setShowFirstModal(false);
        setAlert({
          show: true,
          message: result.error ? result.error.message : "Employee not deleted",
          varient: "danger",
        });
      }
    }
  };

  useEffect(() => {
    const filteredEmployees = employees
      ? employees.filter((emp) =>
        emp.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
      )
      : [];

    const pages = Math.ceil(filteredEmployees.length / pageSize);
    setTotalPages(pages);
    const empl = filteredEmployees.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setPageEmployees(empl);
  }, [employees, currentPage, searchTerm]);

  const handleUpdate = async (employee) => {
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
    } = employee;

    const id = selectedEmployee.employees_id;
    const updatedEmployee = {
      name: employeeName,
      username: username,
      employee_type_id: employee_type,
      email: email,
      cell_number: contactNo,
      salary: salary,
      enrollment_datetime: `${enrollmentDate.getFullYear()}-${String(
        enrollmentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(enrollmentDate.getDate()).padStart(2, "0")}`,
      increament_datetime: `${incrementDate.getFullYear()}-${String(
        incrementDate.getMonth() + 1
      ).padStart(2, "0")}-${String(incrementDate.getDate()).padStart(2, "0")}`,
      increament_amount: incrementAmount,
      password: password,
      updated_by: "ssa",
    };

    console.log("payload for update ", updatedEmployee);

    try {
      const result = await dispatch(
        updateEmployee({ updatedData: updatedEmployee, id: id })
      );

      console.log("api result ", result);

      if (result.meta.requestStatus === "rejected" || result.error) {
        setAlert({ show: true, message: error?.message ? error.message : "Can't update employee!", varient: "danger" });
        return { success: false, error: error.message };
      } else {
        dispatch(fetchEmployees());

        setShowUpdateModal(false);
        setAlert({ show: true, message: "Employee Updated", varient: "success" });
        return { success: true };
      }

    } catch (error) {
      setAlert({ show: true, message: error.message, varient: "danger" });
      return { success: false, error: error.message };
    }
  };

  const handleUpdateModalOpen = (employee) => {
    setSelectedEmployee(employee);
    setFormData1({
      employeeName: employee.name,
      username: employee.username,
      password: employee.password,
      email: employee.email,
      contactNo: employee.cell_number,
      salary: employee.salary,
      enrollmentDate: employee.enrollment_datetime
        ? new Date(employee.enrollment_datetime.split("T")[0])
        : null,
      incrementDate: employee.increament_datetime
        ? new Date(employee.increament_datetime.split("T")[0])
        : null,
      incrementAmount: employee.increament_amount,
      employee_type: employee.employee_type_id,
    });
    setEditEmployee({
      employeeName: employee.name,
      username: employee.username,
      password: employee.password,
      email: employee.email,
      contactNo: employee.cell_number,
      salary: employee.salary,
      enrollmentDate: employee.enrollment_datetime
        ? new Date(employee.enrollment_datetime.split("T")[0])
        : "",
      incrementDate: employee.increament_datetime
        ? new Date(employee.increament_datetime.split("T")[0])
        : "",
      incrementAmount: employee.increament_amount,
      employee_type: employee.employee_type_id,
    });
    setShowUpdateModal(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleAdd = async (employee) => {

    const value = {
      name: employee.employeeName,
      username: employee.username,
      password: employee.password,
      employee_type_id: employee.employee_type,
      email: employee.email,
      cell_number: employee.contactNo,
      salary: employee.salary,
      enrollment_datetime: `${employee.enrollmentDate.getFullYear()}-${String(
        employee.enrollmentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(employee.enrollmentDate.getDate()).padStart(
        2,
        "0"
      )}`,
      increament_datetime: `${employee.incrementDate.getFullYear()}-${String(
        employee.incrementDate.getMonth() + 1
      ).padStart(2, "0")}-${String(employee.incrementDate.getDate()).padStart(
        2,
        "0"
      )}`,
      increament_amount: employee.incrementAmount,
      created_by: "vvv",
    };

    try {
      const result = await dispatch(createEmployee(value));

      dispatch(fetchEmployees());

      setShowUpdateModal(false);
      setAlert({ show: true, message: "Employee Created", varient: "success" });
      return { success: true };
    } catch (error) {
      setAlert({
        show: true,
        message: error.message ? error.message : "Failed to create employee",
        varient: "danger",
      });
      return { success: false, error: error.message };
    }
  };




  const modalContent = (
    <Row className="m-0">
      <Col className="gy-2" lg={6}><span className="fw-bold">Employee Name :</span> {modaledata?.name}</Col>
      <Col className="gy-2" lg={6}> <span className="fw-bold">Employee Type :</span> {modaledata?.employee_type_name} </Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">Employee UserName :</span> {modaledata?.username}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold"> Employee Salary :</span> {modaledata?.salary}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold"> Employee Email :</span> {modaledata?.email}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold"> Mobile No :</span> {modaledata?.cell_number}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold"> Entrollment DateTime :</span> {modaledata?.enrollment_datetime}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold"> Increament DateTime :</span> {modaledata?.increament_datetime}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold"> Increment Amount :</span> {modaledata?.increament_amount}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold"> Employee Add By :</span> {modaledata?.created_by}</Col>
    </Row>
  );


  return (
    <div className="p-lg-5 p-3">
      <Backpage
        mainPage="Admin Panel"
        mainPagePath="/adminpanel"
        currentPage="Employees"
      />
      {/* Create Emploee */}
      <EmployeeForm data={formData} handleSubmit={handleAdd} />

      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <SearchBox
              placeholder="Search Employees"
              value={searchTerm}
              onChange={handleSearchChange}
            />
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
            {pageEmployees.length > 0 ? (
              pageEmployees.map((item, rowIndex) => (
                <tr key={item.id} className="text-center">
                  <td>{rowIndex + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.employee_type_name}</td>
                  <td>{item.cell_number}</td>
                  <td className="d-flex justify-content-center gap-2">
                    {isMobileView() ?
                      <button className="icon_blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          seModaledata(item);
                          setShowModal1(true);
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
                        <button className="icon_blue"
                          onClick={(e) => {
                            e.stopPropagation();
                            seModaledata(item);
                            setShowModal1(true);
                          }}
                        >
                          <PiEyeBold />
                        </button>
                      </OverlayTrigger>}
                    {isMobileView() ?
                      <button className="icon_green"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateModalOpen(item);
                        }}
                      >
                        <PiNotePencilBold />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">Edit</Tooltip>
                        }
                      >
                        <button className="icon_green"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpdateModalOpen(item);
                          }}>
                          <PiNotePencilBold />
                        </button>
                      </OverlayTrigger>}

                    {isMobileView() ?
                      <button className="icon_red"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFirstModalShow(item.employees_id);
                        }}
                      >
                        <PiTrashBold />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">Delete</Tooltip>
                        }
                      >
                        <button className="icon_red"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFirstModalShow(item.employees_id);
                          }}>
                          <PiTrashBold />
                        </button>
                      </OverlayTrigger>}
                  </td>
                  {/* <td>
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
                    </div>
                  </td> */}
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

      {totalPages > 1 && (
        <div className="pt-4">
          <Pagination1
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

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
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>



      <ShowModal
        show={showModal1}
        setShow={setShowModal1}
        title="Employee Detail"
        bodyContent={modalContent}

        data={modaledata}
      />

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeForm
            data={editEmployee}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        </Modal.Body>
      </Modal>

      <BackdropAlert
        closeAlert={() => {
          setAlert({ ...alert, show: false });
        }}
        show={alert.show}
        setShow={setAlert}
        varient={alert.varient}
        message={alert.message}
      />
    </div>
  );
}

export default Employees;
