import React, { useState ,useEffect} from "react";
import InputBox from "../../commancomponet/InputBox";
import CommanButton from "../../commancomponet/CommanButton";
import Tablecom from "../../commancomponet/Tablecom";
import SelectBox from "../../commancomponet/SelectBox";
import SearchBox from "../../commancomponet/Searchbox";
import { FaChevronLeft, FaChevronRight, FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createArea, deleteArea, fetchAreas, fetchCities } from "../store/areaSlice";

function Enquiry() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const areas = useSelector((state) => state.areas.areas);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [deleteid, setDelete] = useState();

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

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = (id) => {
    setDelete(id);
    setShowFirstModal(true);
  };

  
  useEffect(()=>{
    dispatch(fetchAreas()); 
  },[dispatch])

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

  const handleDelete = () => {
    if (deleteid) {
      dispatch(deleteArea(deleteid));
      setShowFirstModal(false);
    }
  };

  return (
    <div className="p-lg-5">



      <div className="pb-2 ps-2" >
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
          Enquiry
        </span>
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
  );
}

export default Enquiry;
