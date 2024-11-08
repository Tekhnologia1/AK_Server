import React, { useState,useEffect } from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Tablecom from "../../commancomponet/Tablecom";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createArea, deleteArea, fetchAreas, fetchCities } from "../store/areaSlice";
import { Button, Modal, Table } from "react-bootstrap";


function Cafedeal() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.areas.cities);
  const areas = useSelector((state) => state.areas.areas);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [deleteid, setDelete] = useState();

  const navigate=useNavigate();

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDelete(id);
    setShowFirstModal(true);
  };

  useEffect(()=>{
    dispatch(fetchAreas()); // Correct async pattern
  },[dispatch])

  // Single state to hold all form data
  const [formData, setFormData] = useState({
    cafe: "",
    userName: "",
    contactNo: "",
    userType: "",
    email: "",
    additionalContactNo: "",
  });

  const genderOptions = [
    { label: "City", value: "" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];

  const columns = ["SR.NO.", "Cafe User Name", "User Type", "Contact Person"];

  const data = [
    [1, "Irani", "pune", "ck"],
    [2, "Irani", "pune", "ck"],
    [3, "Irani", "pune", "ck"],
    [4, "Irani", "pune", "ck"],
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleDelete = () => {
    if (deleteid) {
      dispatch(deleteArea(deleteid));
      setShowFirstModal(false);
    }
  };

  const handleAddClick = () => {
    // Handle form submission or data processing here
    alert("Data added: " + JSON.stringify(formData));
    
    // Reset the form after adding
    setFormData({
      cafe: "",
      userName: "",
      contactNo: "",
      userType: "",
      email: "",
      additionalContactNo: "",
    });
  };

  return (
    <div>
      <div className="p-lg-5 ">
      <div className="pb-2">
        <span onClick={()=>{navigate('/dashboard/adminpanel')}}  style={{ color: '#7B3F00', cursor: 'pointer' }}
          className="fs-5 fw-bold">Adminpanel</span><span style={{color:'#7B3F00'}}> <FaArrowRight/></span><span className="fs-5 fw-bold " style={{color:'#7B3F00'}}> Cafe Deal</span>  


      </div>

        <div className="row m-0 border rounded  pb-3">
          <div className="col-lg-12 p-4 ">
            <div className="row m-0 ">
              <div className="col-lg-4 gy-4 ">
                <SelectBox
                  options={genderOptions}
                  value={formData.cafe}
                  onChange={handleChange}
                  name="cafe"
                  defaultValue="Cafe"
                />
              </div>
              <div className="col-lg-4 gy-4">
                <InputBox
                  placeholder="User Name"
                  value={formData.userName}
                  onChange={handleChange}
                  name="userName"
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

            <div className="row m-0 ">
              <div className="col-lg-4 gy-4 ">
                <SelectBox
                  options={genderOptions}
                  value={formData.userType}
                  onChange={handleChange}
                  name="userType"
                  defaultValue="User Type"
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
                  placeholder="Additional Contact No"
                  value={formData.additionalContactNo}
                  onChange={handleChange}
                  name="additionalContactNo"
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <CommanButton
              label="Add"
              onClick={handleAddClick}
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
            {areas.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.cities_id}</td>
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
                        handleFirstModalShow(item.areas_id)
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


        <div className="pt-3">
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
                  style={{ backgroundColor: " #7B3F00" }}
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

        <Modal
        show={showFirstModal}
        onHide={handleFirstModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this area?</Modal.Body>
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
    </div>
  );
}

export default Cafedeal;
